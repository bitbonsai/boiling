(() => {
  const canvas = document.getElementById('ocean');
  const vignette = document.getElementById('ocean-vignette');
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scenes = { surface: 0, deep: 1, current: 2, tangle: 3, raft: 4, sail: 5 };
  let target = -1;
  let raftT = -1;
  let current = 0;
  let sceneInitialized = false;
  let running = false;
  const started = performance.now();

  window.setOceanScene = name => {
    const next = name in scenes ? scenes[name] : -1;
    if (next === scenes.raft && target !== scenes.raft) raftT = (performance.now() - started) / 1000;
    if (next !== scenes.raft) raftT = -1;
    target = next;
    if (!sceneInitialized && target >= 0) {
      current = target;
      sceneInitialized = true;
    }
    canvas.classList.toggle('visible', target >= 0);
    vignette.classList.toggle('visible', target >= 0);
    running = target >= 0;
    if (running) requestAnimationFrame(draw);
  };

  if (!gl) {
    canvas.style.background = 'linear-gradient(180deg,#584a40 0%,#31545d 42%,#0d313d 100%)';
    return;
  }

  const vertexSource = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
  `;

  const fragmentSource = `
    precision highp float;
    uniform vec2 resolution;
    uniform float time;
    uniform float scene;
    uniform float raftStart;

    const float PI = 3.14159265359;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), f.x),
        f.y
      );
    }


    float sdTriangle(vec2 p, vec2 p0, vec2 p1, vec2 p2) {
      vec2 e0 = p1 - p0, e1 = p2 - p1, e2 = p0 - p2;
      vec2 v0 = p - p0, v1 = p - p1, v2 = p - p2;
      vec2 pq0 = v0 - e0 * clamp(dot(v0, e0) / dot(e0, e0), 0.0, 1.0);
      vec2 pq1 = v1 - e1 * clamp(dot(v1, e1) / dot(e1, e1), 0.0, 1.0);
      vec2 pq2 = v2 - e2 * clamp(dot(v2, e2) / dot(e2, e2), 0.0, 1.0);
      float s = sign(e0.x * e2.y - e0.y * e2.x);
      vec2 d = min(min(vec2(dot(pq0, pq0), s * (v0.x * e0.y - v0.y * e0.x)),
                       vec2(dot(pq1, pq1), s * (v1.x * e1.y - v1.y * e1.x))),
                       vec2(dot(pq2, pq2), s * (v2.x * e2.y - v2.y * e2.x)));
      return -sqrt(d.x) * sign(d.y);
    }

    float waveField(vec2 p, float t, float chaos) {
      float height = 0.0;
      float amplitude = 0.72;
      float frequency = 0.48;
      vec2 direction = normalize(vec2(0.82, 0.57));
      mat2 rotate = mat2(0.80, -0.60, 0.60, 0.80);

      for (int i = 0; i < 6; i++) {
        float phase = dot(p, direction) * frequency + t * (0.72 + float(i) * 0.11);
        float crest = sin(phase + sin(phase * 0.43) * 0.42);
        height += crest * amplitude;
        direction = rotate * direction;
        frequency *= 1.82;
        amplitude *= 0.51;
      }

      float crossed = sin(p.x * 1.18 - p.y * 0.74 + t * 1.7);
      crossed += sin(p.x * 2.1 + p.y * 1.45 - t * 1.2) * 0.45;
      height += crossed * 0.24 * chaos;
      return height;
    }

    vec3 skyColor(vec3 ray, float warmth, float sunrise) {
      float elevation = clamp(ray.y * 0.5 + 0.5, 0.0, 1.0);
      vec3 coolHorizon = vec3(0.34, 0.49, 0.57);
      vec3 dawnHorizon = vec3(0.86, 0.31, 0.12);
      vec3 warmHorizon = vec3(0.72, 0.84, 0.88);
      vec3 horizon = mix(coolHorizon, dawnHorizon, sunrise);
      horizon = mix(horizon, warmHorizon, warmth);

      vec3 coolZenith = vec3(0.055, 0.14, 0.21);
      vec3 dawnZenith = vec3(0.17, 0.105, 0.085);
      vec3 warmZenith = vec3(0.30, 0.52, 0.70);
      vec3 zenith = mix(coolZenith, dawnZenith, sunrise);
      zenith = mix(zenith, warmZenith, warmth);
      vec3 color = mix(horizon, zenith, pow(elevation, 0.66));

      // Slightly below horizon so sunrise feels partially submerged.
      vec3 sunDirection = normalize(vec3(0.55, mix(-0.032, 0.34, warmth), 0.84));
      float sun = max(dot(ray, sunDirection), 0.0);
      float disk = pow(sun, mix(1450.0, 900.0, warmth));
      float glow = pow(sun, 62.0);
      color += mix(vec3(1.0, 0.57, 0.28), vec3(1.0, 0.85, 0.35), warmth) * disk * (sunrise * 4.0 + warmth * 3.0);
      color += mix(vec3(1.0, 0.34, 0.12), vec3(1.0, 0.82, 0.42), warmth) * glow * (sunrise * 0.42 + warmth * 0.30);
      return color;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / resolution;
      vec2 screen = (gl_FragCoord.xy - 0.5 * resolution) / resolution.y;

      float deep = smoothstep(0.35, 1.2, scene);
      float fast = smoothstep(1.15, 2.2, scene);
      float tangle = smoothstep(2.35, 2.95, scene) * (1.0 - smoothstep(3.25, 3.85, scene));
      float calm = smoothstep(3.25, 4.0, scene);
      float sunrise = 1.0 - smoothstep(0.28, 0.92, scene);
      float warmth = calm;

      float horizon = mix(0.565, 0.61, deep) - calm * 0.035;
      float belowHorizon = horizon - uv.y;
      vec3 viewRay = normalize(vec3(screen.x * 1.22, uv.y - horizon, 0.92));
      vec3 sky = skyColor(viewRay, warmth, sunrise);

      // Deep scene: camera below surface, with refracted shafts and suspended light.
      float underwater = smoothstep(0.52, 0.88, scene) * (1.0 - smoothstep(1.18, 1.55, scene));
      if (underwater > 0.5) {
        float depth = 1.0 - uv.y;
        vec3 underColor = mix(vec3(0.012, 0.095, 0.16), vec3(0.018, 0.24, 0.34), pow(uv.y, 1.25));

        float surfaceWarp = noise(vec2(uv.x * 8.0 + time * 0.08, time * 0.13));
        surfaceWarp += noise(vec2(uv.x * 19.0 - time * 0.12, time * 0.09)) * 0.45;
        float surface = smoothstep(0.83, 1.0, uv.y + surfaceWarp * 0.055);
        underColor += vec3(0.22, 0.62, 0.72) * surface * 0.34;

        float rays = 0.0;
        for (int i = 0; i < 6; i++) {
          float fi = float(i);
          float origin = -0.18 + fi * 0.29 + sin(time * 0.11 + fi * 2.3) * 0.06;
          float slope = -0.24 + fi * 0.082;
          float center = origin + (1.0 - uv.y) * slope;
          float width = 0.018 + depth * (0.045 + fi * 0.004);
          float beam = exp(-pow((uv.x - center) / width, 2.0));
          beam *= 0.58 + 0.42 * sin(time * 0.45 + fi * 1.7 + uv.y * 3.0);
          rays += beam;
        }
        rays *= smoothstep(0.04, 0.98, uv.y) * smoothstep(1.05, 0.28, depth);
        underColor += vec3(0.28, 0.69, 0.76) * rays * 0.26;

        vec2 causticUV = vec2(uv.x * 11.0, uv.y * 7.0);
        float caustic = abs(sin(causticUV.x + noise(causticUV + time * 0.12) * 5.0));
        caustic *= abs(sin(causticUV.y * 1.3 - noise(causticUV * 0.7 - time * 0.1) * 4.0));
        caustic = pow(caustic, 7.0) * smoothstep(0.35, 1.0, uv.y);
        underColor += vec3(0.16, 0.52, 0.58) * caustic * 0.13;


        float underVignette = 1.0 - dot(screen, screen) * 0.3;
        gl_FragColor = vec4(underColor * underVignette, 1.0);
        return;
      }

      if (belowHorizon <= 0.0) {
        gl_FragColor = vec4(sky, 1.0);
        return;
      }

      float distanceToHorizon = 1.0 / max(belowHorizon, 0.014);
      float speed = mix(0.35, 1.15, fast) * mix(1.0, 0.42, calm);
      float waveTime = time * speed;
      vec2 world = vec2(screen.x * distanceToHorizon * 2.15, distanceToHorizon * 0.92 + waveTime);
      float chaos = fast * 0.52 + tangle * 1.15;
      float amplitude = mix(0.72, 1.18, deep + fast * 0.35) * mix(1.0, 0.48, calm);

      float epsilon = 0.055 + distanceToHorizon * 0.0015;
      float height = waveField(world, waveTime, chaos) * amplitude;
      float heightX = waveField(world + vec2(epsilon, 0.0), waveTime, chaos) * amplitude;
      float heightZ = waveField(world + vec2(0.0, epsilon), waveTime, chaos) * amplitude;
      vec3 normal = normalize(vec3(-(heightX - height) / epsilon, 2.25, -(heightZ - height) / epsilon));

      vec3 reflectedRay = reflect(viewRay, normal);
      vec3 reflection = skyColor(reflectedRay, warmth, sunrise);
      vec3 deepWater = mix(vec3(0.012, 0.13, 0.22), vec3(0.045, 0.30, 0.42), calm);
      vec3 shallowWater = mix(vec3(0.025, 0.34, 0.49), vec3(0.17, 0.55, 0.62), calm);
      float facing = clamp(dot(-viewRay, normal), 0.0, 1.0);
      float fresnel = 0.04 + 0.96 * pow(1.0 - facing, 5.0);
      vec3 water = mix(deepWater, shallowWater, clamp(facing * 0.8 + height * 0.06, 0.0, 1.0));
      vec3 color = mix(water, reflection, fresnel * 0.82 + 0.08);

      vec3 lightDirection = normalize(vec3(0.62, 0.55, 0.52));
      vec3 halfVector = normalize(lightDirection - viewRay);
      float specular = pow(max(dot(normal, halfVector), 0.0), mix(115.0, 210.0, calm));
      color += mix(vec3(1.0, 0.68, 0.48), vec3(1.0, 0.98, 0.92), warmth) * specular * (0.46 + warmth * 0.9);

      float crest = smoothstep(0.72, 1.26, height) * (0.52 + fast * 0.48);
      float foamNoise = noise(world * 2.8 + waveTime * 0.3);
      float foam = crest * smoothstep(0.38, 0.83, foamNoise) * (1.0 - smoothstep(45.0, 75.0, distanceToHorizon));
      color = mix(color, vec3(0.76, 0.83, 0.79), foam * 0.46);

      float currentGlint = pow(max(0.0, sin(world.y * 1.7 + noise(world * 0.25) * 5.0)), 18.0) * fast;
      color += vec3(0.22, 0.48, 0.51) * currentGlint * 0.18;

      float tangledHighlight = pow(abs(sin(world.x * 1.4 + height) * sin(world.y * 1.1 - height)), 18.0);
      color += vec3(0.72, 0.24, 0.12) * tangledHighlight * tangle * 0.22;

      // Fade sub-pixel wave detail near horizon where perspective otherwise aliases.
      float farWater = smoothstep(24.0, 68.0, distanceToHorizon);
      vec3 horizonWater = mix(deepWater, skyColor(vec3(viewRay.x, 0.008, viewRay.z), warmth, sunrise), 0.58);
      color = mix(color, horizonWater, farWater * 0.58);

      float horizonBlend = smoothstep(0.0, 0.024, belowHorizon);
      color = mix(skyColor(vec3(viewRay.x, 0.008, viewRay.z), warmth, sunrise), color, horizonBlend);
      float raftAmt = calm;
      if (raftAmt > 0.02) {
        float sailMix = raftStart < 0.0 ? 0.0 : fract((time - raftStart) / 26.0);
        float rs = 1.0;
        float rx = mix(-0.08, 1.08, sailMix);
        float ry = horizon - 0.16;
        float hb = waveField(vec2(2.7, waveTime * 0.9 + 4.0), waveTime, 0.0);
        float hb2 = waveField(vec2(3.0, waveTime * 0.9 + 4.2), waveTime, 0.0);
        vec2 q = uv - vec2(rx, ry + hb * 0.014 * rs);
        q.x *= resolution.x / resolution.y;
        float tilt = (hb2 - hb) * 0.45;
        q = mat2(cos(tilt), -sin(tilt), sin(tilt), cos(tilt)) * q;
        q /= rs;
        vec2 wq = uv - vec2(rx, ry);
        wq.x *= resolution.x / resolution.y;
        float behind = -wq.x;
        float wakeWidth = 0.006 + behind * 0.16;
        float wake = exp(-pow((wq.y + 0.012) / wakeWidth, 2.0)) * smoothstep(0.0, 0.03, behind) * exp(-behind * 5.5);
        wake *= 0.55 + 0.45 * noise(vec2(wq.x * 34.0 - time * 1.6, wq.y * 90.0));
        float bow = exp(-dot(wq - vec2(0.055, -0.012), wq - vec2(0.055, -0.012)) * 9000.0) * (0.5 + 0.5 * sin(time * 6.0));
        color = mix(color, vec3(0.88, 0.94, 0.93), clamp(wake * 0.5 + bow * 0.35, 0.0, 1.0) * raftAmt);
        float dHullA = sdTriangle(q, vec2(-0.062, 0.02), vec2(0.062, 0.02), vec2(0.034, -0.012));
        float dHullB = sdTriangle(q, vec2(-0.062, 0.02), vec2(0.034, -0.012), vec2(-0.034, -0.012));
        float dHull = min(dHullA, dHullB);
        float dPeak = sdTriangle(q, vec2(-0.03, 0.02), vec2(0.03, 0.02), vec2(0.0, 0.068));
        float aa = 0.0022;
        float hullM = smoothstep(aa, -aa, dHull) * raftAmt;
        float peakM = smoothstep(aa, -aa, dPeak) * raftAmt;

        vec3 peakCol = mix(vec3(0.99, 0.97, 0.93), vec3(0.84, 0.81, 0.74), smoothstep(-0.003, 0.003, q.x));
        color = mix(color, peakCol, peakM);
        vec3 hullCol = mix(vec3(0.94, 0.91, 0.85), vec3(0.8, 0.77, 0.71), smoothstep(0.02, -0.012, q.y));
        color = mix(color, hullCol, hullM);
      }
      float vignette = 1.0 - dot(screen, screen) * 0.22;
      color *= vignette;
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
    return shader;
  }

  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const resolution = gl.getUniformLocation(program, 'resolution');
  const time = gl.getUniformLocation(program, 'time');
  const scene = gl.getUniformLocation(program, 'scene');
  const raftStart = gl.getUniformLocation(program, 'raftStart');

  function resize() {
    const density = Math.min(devicePixelRatio, 2);
    const width = Math.floor(innerWidth * density);
    const height = Math.floor(innerHeight * density);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  }

  function draw(now) {
    if (!running) return;
    resize();
    current += (target - current) * (reduced ? 1 : 0.035);
    gl.uniform2f(resolution, canvas.width, canvas.height);
    gl.uniform1f(time, reduced ? 12 : (now - started) / 1000);
    gl.uniform1f(scene, current);
    gl.uniform1f(raftStart, raftT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    if (!reduced) requestAnimationFrame(draw);
  }

  addEventListener('resize', resize);
})();
