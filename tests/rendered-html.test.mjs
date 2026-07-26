import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete tournament guide", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Bethpage Black Best-Ball Field Guide<\/title>/i);
  assert.match(html, /Event essentials/);
  assert.match(html, /Drive-through registration/);
  assert.match(html, /Set up your foursome/);
  assert.match(html, /id="group-form"/);
  assert.match(html, /name="start"/);
  assert.match(html, /name="driver"/);
  assert.match(html, /name="longName"/);
  assert.match(html, /Hospitality along the route/);
  assert.match(html, /Why we play/);
  assert.equal((html.match(/class="hole-card"/g) ?? []).length, 18);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("ships the client-side personalization engine and aerial assets", async () => {
  const script = await readFile(new URL("../public/guide.js", import.meta.url), "utf8");
  assert.match(script, /bethpage-group-profile-v2/);
  assert.match(script, /orderedHoles/);
  assert.match(script, /handicapCall/);
  assert.match(script, /pointAlongRoute/);
  assert.match(script, /navigator\.clipboard/);
  assert.match(script, /URLSearchParams/);

  await Promise.all(
    Array.from({ length: 18 }, (_, index) =>
      access(new URL(`../public/aerials/hole-${index + 1}.webp`, import.meta.url)),
    ),
  );
});
