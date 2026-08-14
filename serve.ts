Bun.serve({
  port: 8888,
  async fetch(request) {
    const pathname = new URL(request.url).pathname === "/" ? "/index.html" : new URL(request.url).pathname;
    const file = Bun.file(import.meta.dir + pathname);
    return await file.exists() ? new Response(file) : new Response("Not found", { status: 404 });
  },
});
console.log("http://localhost:8888");
