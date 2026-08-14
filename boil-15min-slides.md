# Boiling the ocean: 15-minute slide plan

## Direction

Use `/Users/mwolff/dev/vl-apps/vlab-wt` as technical foundation and quality reference, not as template to copy literally.

- Reveal.js, 16:9, keyboard and presenter controls
- Closed-caption panel using each slide's `Notes` as public narration
- Roobert PRO with Anthropic-inspired typography, spacing, and directness
- Original ocean-inspired visual system for Claude Community Amsterdam
- Anthropic cream `#f0eee6`, dark brown `#261f1a`, Claude orange `#d97757`, plus ocean blue and aqua
- Oversized statements, custom diagrams, terminal scenes, real screenshots, selective full-bleed imagery
- One idea per slide, designed for back row
- `Notes` must make deck understandable without presenter. They are public captions, not private stage directions

Structure: three five-minute beats. Refrain: **Plan. Preserve. Prove.**

## Beat map

### Beat 1, 0:00–5:00: Wonder → friction → scale

Story first. AI makes creation feel magical, sharing breaks spell, platform demo restores it, platform reveal shows size of ocean.

- **Energy:** playful and surprising
- **Novelty moments:** show of hands, confetti, localhost joke, video demo
- **Turn:** `That was the ocean.`
- **Audience question:** How did one design engineer build this?

### Beat 2, 5:00–10:00: Method → acceleration → calibration

Move from story into practical system: planning ratio, small plans, context layers, and multi-agent workflows. Agent swarm creates spectacle, then the 30-commit sidenote adds one caution: understanding must keep pace.

- **Energy:** useful, fast, exploratory
- **Novelty moments:** planning bar, animated plan queue, 14-agent terminal, inspectable TypeScript workflow
- **Turn:** `Understanding has to keep up.`
- **Audience question:** How do I make speed sustainable?

### Beat 3, 10:00–15:00: Control → learning → invitation

Answer with understanding, invariants, proof loops, user feedback, skills, and session hygiene. Return to ocean with path across it.

- **Energy:** reflective, practical, optimistic
- **Novelty moments:** 30-commit rewind resolves into rule, animated handover, feedback wall, ocean WebGL callback
- **Turn:** `The ocean didn't get smaller.`
- **Audience answer:** Cross it through small, verified learning loops.

Inside each beat, add attention reset every 60–90 seconds: audience interaction, joke, visual transformation, demo, confession, or callback. Major beat change should alter both content and visual rhythm.

## Motion direction

Transitions should feel like movement through one continuous story, rather than repeated fades.

- Reveal changes slide first, then slide-specific animation begins.
- Use short entrance sequences, usually 400–900ms, to direct attention after transition.
- Animate meaning: bubbles rise, diagrams assemble, queues receive cards, workflow branches fan out, commits rewind, tangled architecture grows, verification checks complete.
- Reserve WebGL for memorable ocean moments: cover atmosphere, “That was the ocean,” and closing crossing. Use one persistent canvas so water state can evolve across deck.
- Ocean animation carries three major turns: calm surface becomes deep water during platform reveal; currents accelerate during multi-agent work and briefly tangle during the 30-commit sidenote; water calms and a raft or buoy path appears during closing.
- Preferred implementation: lightweight WebGL shader on one persistent canvas. Fallback order: Three.js scene, then three short looping videos with matched color and camera position.
- Keep normal content in HTML/SVG for crisp text, accessibility, and easy editing.
- Respect `prefers-reduced-motion`; show static ocean fallback and final animation states.
- Pause expensive rendering when ocean is not visible.
- Closed captions stay stable during motion and never cover important content.

## Asset approach

Use simple placeholders while building layout. Do not force custom illustration when real screenshot, supplied image, stock image, or short video would work better. Mark needed assets clearly with purpose, crop, aspect ratio, and fallback so Mauricio can provide them later.

## Notes contract

Every `Notes` field is viewer-facing narration. Someone opening deck alone should be able to follow complete argument by enabling captions. Keep timing, delivery cues, and production instructions outside `Notes`.

---

## BEAT 1: WONDER → FRICTION → SCALE | 0:00–5:15

### Opening | 0:00–1:15

### Slide 1: Cover

- **Background:** Anthropic dark brown over subtle WebGL ocean.
- **Image:** Claude logo top-left. Small avatar beside name near bottom-left.
- **Description:** Left-aligned editorial cover with generous negative space and subtle WebGL water moving behind the title.
- **Text:** `Boiling the ocean`  
  `How to build platforms and do what seems impossible with Claude Code`  
  `Mauricio Wolff`
- **Notes:** This is the story of how I used Claude Code to build a platform that looked far too large for one person.

### Slide 2: Introduction

- **Background:** Cream.
- **Image:** Large circular or cutout portrait on right. No product logo needed.
- **Description:** Personal introduction missing from prior version. Keep human and brief.
- **Text:** `I'm Mauricio Wolff.`  
  `Staff designer at Miro.`  
  `I build things.`
- **Notes:** I'm Mauricio, a Staff Designer at Miro and the creator of an internal app-hosting platform. I work as a design engineer, and Claude Code helped me cross the knowledge gap required to build an internal app-hosting platform.

### Slide 3: Who is here?

- **Background:** Cream.
- **Image:** Three simple Miro-style line icons: pen, roadmap, terminal.
- **Description:** Audience interaction with large labels.
- **Text:** `Designer?`  
  `PM?`  
  `Engineer?`
- **Notes:** This story is for designers, product managers, and engineers using AI coding tools to take on work beyond their usual boundaries.

### Slide 4: Name the idea

- **Background:** Anthropic dark brown.
- **Image:** None.
- **Description:** Oversized statement.
- **Text:** `Boil the ocean.`
- **Notes:** “Boiling the ocean” is a phrase usually used to warn us that a project is too large to attempt.

### Slide 5: A story

- **Background:** Anthropic dark brown.
- **Image:** None.
- **Description:** Chapter divider. Small yellow eyebrow: `AT MIRO`. One huge statement, same divider pattern as the `HOW` slide.
- **Text:** `A story.`
- **Notes:** To explain what this means, I'll tell you a story about what happened at Miro.

### Slide 6: Definition

- **Background:** Cream.
- **Image:** Dictionary-style rule and typography, not literal dictionary screenshot.
- **Description:** Large definition with “impractical” highlighted yellow.
- **Text:** `A project so vast that completing it seems impractical, regardless of people or resources.`
- **Notes:** In software, this is usually a useful warning. This talk explores what happened when I ignored it, and which practices kept ambition from turning into chaos.

---

### Story and reveal | 1:15–5:15

### Slide 7: Ideas started bubbling

- **Background:** Full-bleed `assets/bubbles.jpg` style image with dark overlay.
- **Image:** Rising bubbles.
- **Description:** First story image. Yellow eyebrow: `AT MIRO`.
- **Text:** `Ideas became software.`
- **Notes:** At Miro, designers gained access to AI coding tools. Ideas that once lived in static mockups started becoming real, interactive software at remarkable speed.

### Slide 8: Localhost magic

- **Background:** Cream.
- **Image:** Miro-style browser mock showing `localhost:3000`, with confetti.
- **Description:** Product screenshot inside rounded browser frame.
- **Text:** `It works!`
- **Notes:** The first time a local server works feels magical. A prompt becomes code, the browser refreshes, and an idea suddenly exists.

### Slide 9: Next question

- **Background:** Anthropic dark brown.
- **Image:** URL bar enlarged in monospace.
- **Description:** Sparse suspense slide.
- **Text:** `How do I share it?`
- **Notes:** Creating a prototype became easy. Sharing it securely and reliably became the next problem.

### Slide 10: Localhost meme

- **Background:** Full-bleed Boromir meme or rights-safe recreation.
- **Image:** Character guarding gate.
- **Description:** One visual joke.
- **Text:** `One does not simply share localhost.`
- **Notes:** Localhost belongs to one computer. Other people cannot use that URL, so the working prototype is still trapped on its creator's machine.

### Slide 11: Existing answers

- **Background:** Cream.
- **Image:** Vendor logos in tidy Miro-style tile grid.
- **Description:** Lovable, Replit, Vercel, Netlify, Railway, Fly.io, Cloudflare.
- **Text:** `Good tools.`  
  `Different constraints.`
- **Notes:** Many products already deploy software. They are good tools, but they were designed around constraints different from ours.

### Slide 12: Our constraints

- **Background:** Cream.
- **Image:** Four rounded constraint cards with simple icons.
- **Description:** One icon and word per tile.
- **Text:** `Workflow`  
  `Security`  
  `Data`  
  `Ownership`
- **Notes:** Our path needed a simple workflow for non-engineers, approved infrastructure, secure credentials, governed data, and clear ownership. Existing options solved parts of this, but not the complete experience we wanted.

### Slide 13: Desired experience

- **Background:** Anthropic dark brown.
- **Image:** SVG flow: folder → yellow publish button → secure URL.
- **Description:** Money slide for product vision.
- **Text:** `Create locally.`  
  `Publish in seconds.`
- **Notes:** The goal was simple: create something locally, publish it in seconds, and receive a secure URL anyone at Miro could open. No deployment expertise and no new vendor account.

### Slide 14: Demo

- **Background:** Anthropic dark brown.
- **Image:** Prerecorded split-screen video. Terminal left, browser right.
- **Description:** Prompt creates app, skill deploys it, browser opens published URL. End zooms into URL.
- **Text:** None.
- **Notes:** In this demo, an app is generated locally, pushed to GitHub, published through the platform, and opened at a secure company URL.

### Slide 15: Simple experience

- **Background:** Cream.
- **Image:** None.
- **Description:** Large statement with dim second line.
- **Text:** `Simple experience.`  
  `Platform-sized problem.`
- **Notes:** Making publishing feel simple required hiding substantial platform complexity.

### Slide 16: Ocean of capabilities

- **Background:** Cream.
- **Image:** Miro-style honeycomb around the platform logo.
- **Description:** Tiles: routing, GitHub, auth, secrets, deploy queue, framework detection, observability, backups, CI/CD, Kubernetes.
- **Text:** `The ocean.`
- **Notes:** Behind one publish action sit Kubernetes, dynamic routing, GitHub integration, authentication, secrets, deployment queues, framework detection, observability, database recovery, and CI/CD.

### Slide 17: Conventional estimate

- **Background:** Anthropic dark brown.
- **Image:** None.
- **Description:** Giant yellow number with small white labels beneath it.
- **Text:** `5–6`  
  `engineers`  
  `9–12 months`
- **Notes:** My conservative estimate for building the current production scope conventionally is five to six experienced engineers working for nine to twelve months. This is an informed estimate, not a measured counterfactual.

### Slide 18: What happened

- **Background:** Cream.
- **Image:** One avatar beside small Claude Code symbol.
- **Description:** Same number treatment, contrast with previous slide.
- **Text:** `3 weeks`  
  `MVP`  
  `1 design engineer`
- **Notes:** I released the MVP in three weeks as one design engineer. The broader product followed in about two months, with support from one SRE.

### Slide 19: Callback

- **Background:** Full-bleed ocean image with dark overlay.
- **Image:** One person facing water.
- **Description:** Emotional transition.
- **Text:** `That was the ocean.`
- **Notes:** This platform was my ocean: a useful product whose implementation seemed far beyond a reasonable scope.

### Slide 20: Disclaimer

- **Background:** Cream.
- **Image:** None.
- **Description:** Small yellow eyebrow: `DISCLAIMER`. Large statement beneath.
- **Text:** `Not a recipe.`  
  `What worked for me.`
- **Notes:** This is not a universal recipe. It is an account of practices that worked for me, offered so you can adapt the useful parts to your own constraints.

---

## BEAT 2: METHOD → ACCELERATION → CALIBRATION | 5:15–10:05

### Slide 21: Section divider

- **Background:** Anthropic dark brown.
- **Image:** None.
- **Description:** Small yellow section label above a huge `HOW`, with the ocean dropping into a deeper, darker state.
- **Text:** `SECTION 2`  
  `HOW`
- **Notes:** Building ambitious software with agents starts with how work is framed, planned, and remembered.

### Slide 22: Human starts

- **Background:** Cream.
- **Image:** Small spark expands into branching possibilities.
- **Description:** Human spark stays yellow. Agent branches stay blue.
- **Text:** `The idea comes from you.`
- **Notes:** Claude can refine and challenge an idea, but a human must decide what matters, which problem deserves solving, and what experience the product should create.

### Slide 23: Planning prompt

- **Background:** Anthropic dark brown.
- **Image:** Dark terminal mock with two oversized prompt lines.
- **Description:** Two prompt lines, large monospace.
- **Text:** `Challenge my assumptions.`  
  `Do not code yet.`
- **Notes:** Claude Code tends to implement quickly. During planning, I explicitly ask it to challenge assumptions and wait before writing code.

### Slide 24: Time split

- **Background:** Cream.
- **Image:** Large horizontal bar: 70% yellow, 20% blue, 10% coral.
- **Description:** Personal operating ratio.
- **Text:** `MY WORKING RATIO`  
  `70% plan`  
  `20% tinker`  
  `10% fix`
- **Notes:** My rough working split is seventy percent planning, twenty percent tinkering, and ten percent fixing. Planning sets direction and proof. Tinkering explores possibilities through small experiments.

### Slide 25: Rule of three

- **Background:** Cream.
- **Image:** Three file cards.
- **Description:** Three file cards enter one by one, each answering a different planning question.
- **Text:** `PITCH.md`  
  `EXPERIENCE.md`  
  `ARCHITECTURE.md`
- **Notes:** I begin with three small documents. Pitch defines why, what, and done. Experience defines how product should feel. Architecture tests feasibility and exposes what I still need to learn.

### Slide 26: Unit of work

- **Background:** Anthropic dark brown.
- **Image:** One highlighted Markdown file.
- **Description:** Oversized equation.
- **Text:** `1 change = 1 plan`
- **Notes:** Every feature or meaningful change gets its own small Markdown plan, versioned beside code.

### Slide 27: Protect focus

- **Background:** Cream.
- **Image:** Current plan stays left. New idea moves right into `.plans/INDEX.md` queue.
- **Description:** HTML/SVG motion illustrates scope control.
- **Text:** `New idea?`  
  `Index it for later.`
- **Notes:** When a new idea appears during execution, I create a separate plan and add it to the index for later. The idea survives without expanding the current scope.

### Slide 28: Context architecture

- **Background:** Cream.
- **Image:** Four stacked rows using finder-style file icons.
- **Description:** Highlight first word yellow on each row.
- **Text:** `TRUTH  AGENTS.md`  
  `INTENT  .plans`  
  `LEARNING  memory`  
  `HISTORY  .archives`
- **Notes:** `AGENTS.md` stores current architecture, commands, constraints, and invariants. `.plans` stores current intent. Memory stores focused lessons. `.archives` preserves completed plans and historical decisions for later investigation.

### Slide 29: Keep context fresh

- **Background:** Anthropic dark brown.
- **Image:** Large gauge at 45% with clean signal on left and visual noise beyond it.
- **Description:** Number slide.
- **Text:** `MY CONTEXT HEURISTIC`  
  `< 40–50%`
- **Notes:** I try to keep active context below roughly forty to fifty percent. This is a personal heuristic, not an official model limit. When context grows noisy, I preserve a handover, clear the session, and restart from focused documentation.

### Slide 30: Lead agent

- **Background:** Cream.
- **Image:** One large lead node above four smaller task nodes.
- **Description:** Lead labels tasks with model, effort, dependency, and proof.
- **Text:** `Plan the agent team first.`
- **Notes:** For larger changes, I ask the most capable model to act as the lead. It divides the goal into tasks, maps dependencies, chooses a model and effort for each task, and defines how the results will be verified.

### Slide 31: Fourteen agents

- **Background:** Full-bleed terminal screenshot.
- **Image:** User's 14-agent screenshot, cropped for readable count and activity.
- **Description:** Coral `14` badge in corner. No extra decoration.
- **Text:** `14 agents.`
- **Notes:** I once ran fourteen agents in parallel. It was impressive and useful while learning, but also created substantial coordination cost.

### Slide 32: Coordination cost

- **Background:** Cream.
- **Image:** Three gotcha tiles.
- **Description:** Three warning cards enter quickly, then compress into a single coordination-cost label.
- **Text:** `Duplicate work`  
  `Conflicting changes`  
  `Review overload`
- **Notes:** More agents do not automatically create better work. They can duplicate effort, make conflicting changes, and generate more output than one person can review.

### Slide 33: Inspectable workflows

- **Background:** Anthropic dark brown.
- **Image:** Terminal mock showing generated TypeScript task graph.
- **Description:** Highlight `model`, `effort`, `dependsOn`, and `verify` in yellow, blue, green, and coral.
- **Text:** `Inspect before running.`
- **Notes:** I now generate workflow as TypeScript before running it. I can inspect tasks, model choices, effort, dependencies, concurrency, and verification before agents touch code.

### Slide 34: Bounded parallelism

- **Background:** Cream.
- **Image:** Miro-style workflow line with parallel middle branches and review gates.
- **Description:** Horizontal workflow that branches during `run`, then converges before verification.
- **Text:** `plan → inspect → run → synthesize → verify`
- **Notes:** Independent tasks can run together, dependent tasks remain ordered, and review gates happen before integration. Parallelism accelerates a good plan; it does not replace one.

### Slide 35: Revert story

- **Background:** Anthropic dark brown.
- **Image:** Git log mock with 30 coral rows rolling backward.
- **Description:** Giant yellow number.
- **Text:** `30`  
  `commits reverted`
- **Notes:** At one point, I accepted Claude's suggestions without fully understanding them. Each change looked reasonable, so I continued until I eventually had to revert thirty commits.

### Slide 36: Confusion compounds

- **Background:** Cream.
- **Image:** Clean architecture diagram gradually tangles into crossing lines.
- **Description:** Before and after comparison.
- **Text:** `Understanding has to keep up.`
- **Notes:** This was a useful sidenote, not the center of the story. Confusion can compound when generated changes move faster than our understanding, so I protect my mental model as the system evolves.

## BEAT 3: CONTROL → LEARNING → INVITATION | 10:05–15:00

### Slide 37: Understanding rule

- **Background:** Coral.
- **Image:** None.
- **Description:** Biggest type in deck.
- **Text:** `Never merge faster than you understand.`
- **Notes:** I now skim every diff and inspect architecture, security, data, and unfamiliar code more deeply. If I cannot explain what changed and why, I ask Claude to explain it, simplify it, or stop.

### Slide 38: Critical stuff

- **Background:** Cream.
- **Image:** Guardrail around simple path.
- **Description:** Plain language before technical term.
- **Text:** `Write down what must stay true.`
- **Notes:** Some conditions must remain true for a system to stay safe. Write these critical invariants down with their reasons, so future agents do not remove them during reasonable-looking cleanup.

### Slide 39: One example

- **Background:** Anthropic dark brown.
- **Image:** Old runner serves traffic. New runner builds. Route flips only after green health check.
- **Description:** Simple animated SVG, not architecture diagram.
- **Text:** `Keep the old version live until the new one works.`
- **Notes:** In this platform, this means the old runner keeps serving until its replacement passes its health check. Writing the plain-language rule and its technical reason prevents a sensible-looking cleanup from causing downtime.

### Slide 40: Proof loop

- **Background:** Cream.
- **Image:** Circular five-step loop.
- **Description:** Yellow arrows, green check on verify.
- **Text:** `plan → build → verify → review → learn`
- **Notes:** Give Claude a short, trustworthy verification loop. Proof can be a test, typecheck, build, screenshot, or runnable scenario. Risky work should verify failure and recovery, not only the happy path.

### Slide 41: Incidents become memory

- **Background:** Anthropic dark brown.
- **Image:** Bug transforms across four cards.
- **Description:** Repetition of loopline pattern.
- **Text:** `bug → fix → test → rule`
- **Notes:** An incident should leave behind a code fix, a test, and a written rule. The next session begins with the lesson already learned instead of rediscovering it.

### Slide 42: Skills

- **Background:** Cream.
- **Image:** Repeated prompt cards collapse into one `SKILL.md` card.
- **Description:** Small command chip at bottom.
- **Text:** `Explained twice?`  
  `Make a skill.`
- **Notes:** When a workflow needs the same explanation twice, consider turning it into a skill. A skill stores context, steps, safety checks, and a definition of done so repeated work becomes consistent.

### Slide 43: Two outputs

- **Background:** Anthropic dark brown.
- **Image:** Split layout: product screenshot left, Markdown diff right.
- **Description:** Equal visual weight.
- **Text:** `Better product.`  
  `Better instructions.`
- **Notes:** Every session should leave behind a better product and better instructions for changing that product. This is how agent capability compounds instead of resetting with each new chat.

### Slide 44: Recap

- **Background:** Full-bleed bubbles image.
- **Image:** Bubbles with dark overlay.
- **Description:** Repeated three-word structure.
- **Text:** `Plan.`  
  `Preserve.`  
  `Prove.`
- **Notes:** The method reduces to three actions: plan work before execution, preserve knowledge between sessions, and require proof before trusting the result.

---

### Slide 45: From proof to adoption

- **Background:** Anthropic dark brown.
- **Image:** Green verification check transforms into a real user opening the product.
- **Description:** Fast visual turn from technical proof to product proof.
- **Text:** `The next proof is adoption.`
- **Notes:** Tests can show that software works. A product succeeds only when people understand it, use it, and choose to return.

### Slide 46: User feedback

- **Background:** Cream.
- **Image:** Real platform feedback snippets or anonymized sticky notes arranged like a Miro board.
- **Description:** Human evidence replaces abstract icons.
- **Text:** `User feedback = gold.`
- **Notes:** Release early and listen closely. First users reveal confusion, missing value, and useful workarounds faster than planning alone.

### Slide 47: Adoption principles

- **Background:** Anthropic dark brown.
- **Image:** Three words at intentionally different sizes.
- **Description:** Yellow emphasis on `FUN`.
- **Text:** `Easy.`  
  `Convenient.`  
  `Fun.`
- **Notes:** Make the product easy to understand, convenient to use, and fun enough that people want to return. Technical power matters only when people choose to use it.

### Slide 48: Five actions

- **Background:** Cream.
- **Image:** Five rows with yellow numbers.
- **Description:** Reveal one row at a time.
- **Text:** `1  Keep Markdown beside code`  
  `2  Work in indexed plans`  
  `3  Wrap before context gets noisy`  
  `4  Verify meaningful changes`  
  `5  Release and listen`
- **Notes:** Keep Markdown beside code, work through indexed plans, wrap sessions before context becomes noisy, verify meaningful changes, and release early enough to learn from users. [Wrap](https://github.com/bitbonsai/wrap) can optionally preserve documentation, learnings, and a handover at the end of a session.

### Slide 49: Build the raft

- **Background:** Persistent ocean canvas, now calm and brighter.
- **Image:** Plans, documentation, and verification marks assemble into a simple raft on the water.
- **Description:** Repeated ocean image changes meaning. Methods and frameworks become a way to navigate complexity.
- **Text:** `The ocean didn't get smaller.`
- **Notes:** Claude Code did not reduce the platform's scope or remove its complexity. What changed was the way I worked: planning, durable context, and verification formed a raft that made the ocean navigable.

### Slide 50: Three parts

- **Background:** Ocean continues behind the raft.
- **Image:** Three parts of the raft highlight one at a time.
- **Description:** Final callback to talk's refrain.
- **Text:** `Plan what you will cross.`  
  `Preserve what you learn.`  
  `Prove every step.`
- **Notes:** Plan the crossing before moving, preserve what each session teaches, and prove each meaningful step before trusting it.

### Slide 51: Final message

- **Background:** Raft begins moving across the WebGL ocean toward warm yellow horizon.
- **Image:** Minimal silhouette, no extra diagram.
- **Description:** Closing motion continues after slide transition.
- **Text:** `Build your raft.`  
  `Cross your ocean.`
- **Notes:** Methods and frameworks do not make ambitious work small. They make it possible to navigate while continuing to learn and build something people enjoy using.

### Slide 52: End card

- **Background:** Anthropic dark brown.
- **Image:** Claude logo, avatar, optional QR code to resources.
- **Description:** Match cover for visual closure.
- **Text:** `Thank you.`  
  `Mauricio Wolff`  
  `@bitbonsai`
- **QR destination:** One resource page containing the deck, Wrap, and related projects.
- **Notes:** Thank you for following the story of this platform and the practices that made it possible.

---

## Build notes

- Reuse `vlab-wt` infrastructure: Reveal.js, controls, progress, slide count, notes/caption panel, font loading, keyboard behavior, and local server.
- Build new layout components and visual identity for this story. Do not duplicate Worktrees slides.
- Use persistent WebGL canvas behind Reveal. Slides set ocean scene through data attributes such as `data-ocean="surface|deep|current|tangle|raft"`.
- Use `slidechanged` and `slidetransitionend` events to reset and start each slide's animation. Animation must begin after transition settles.
- Treat every `Notes` entry as caption copy. Private timing and delivery cues belong in separate rehearsal document, not deck.
- Keep visible text short. Explanations belong in notes.
- Pre-record demo and store video locally beside deck.
- Use HTML/SVG for simple explanatory diagrams. Leave explicit placeholders for photos, screenshots, memes, and videos Mauricio can provide.
- Rehearse aloud three times. Fifty-one slides can work only if most land in 5–12 seconds. If timing runs long, remove slide 20, remove slide 21, then merge slides 32–33. Never rush slides 49–51.
