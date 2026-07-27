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
  assert.match(html, /og-event\.png/);
  assert.match(html, /Event essentials/);
  assert.match(html, /Drive-through registration/);
  assert.match(html, /Set up your foursome/);
  assert.match(html, /id="group-form"/);
  assert.match(html, /name="start"/);
  assert.match(html, /name="driver"/);
  assert.match(html, /name="longName"/);
  assert.match(html, /id="rain-widget"/);
  assert.match(html, /id="first-food-summary"/);
  assert.match(html, /Donate to Ohel/);
  assert.match(html, /data-danger-window/);
  assert.match(html, /Hospitality along the route/);
  assert.match(html, /Muscat Catering logo/);
  assert.match(html, /Sushi Tokyo logo/);
  assert.match(html, /Holy Schnitzel logo/);
  assert.match(html, /tip both caddies appropriately/i);
  assert.match(html, /Why we play/);
  assert.equal((html.match(/class="hole-card"/g) ?? []).length, 18);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("accepts every whole-yard club distance and ships a valid default form", async () => {
  const response = await render();
  const html = await response.text();
  const numericInputs = [...html.matchAll(/<input\b[^>]*type="number"[^>]*>/gi)].map(([input]) => input);
  const attributes = (input) => Object.fromEntries(
    [...input.matchAll(/(\w+)="([^"]*)"/g)].map(([, name, value]) => [name, value]),
  );
  const fields = numericInputs.map(attributes);
  const yardageFields = fields.filter(({ name }) => ["driver", "long", "mid", "wedge"].includes(name));

  assert.equal(yardageFields.length, 4);
  for (const field of yardageFields) {
    assert.equal(field.step, "1", `${field.name} must accept every whole-yard distance`);
  }

  for (const field of fields) {
    const value = Number(field.value);
    const min = Number(field.min);
    const max = Number(field.max);
    const step = Number(field.step);
    assert.ok(Number.isFinite(value), `${field.name} must have a numeric default`);
    assert.ok(value >= min && value <= max, `${field.name} default must be within range`);
    assert.equal((value - min) % step, 0, `${field.name} default must satisfy its step`);
  }

  const script = await readFile(new URL("../public/guide.js", import.meta.url), "utf8");
  assert.match(script, /form\.reportValidity\(\)/);
});

test("ships the client-side personalization engine and aerial assets", async () => {
  const script = await readFile(new URL("../public/guide.js", import.meta.url), "utf8");
  assert.match(script, /bethpage-group-profile-v2/);
  assert.match(script, /orderedHoles/);
  assert.match(script, /handicapCall/);
  assert.match(script, /dangerZones/);
  assert.match(script, /updateDangerWindow/);
  assert.match(script, /forecastHourly/);
  assert.match(script, /foodStopNames/);
  assert.match(script, /IntersectionObserver/);
  assert.match(script, /aria-current/);
  assert.match(script, /navLinks\.scrollTo/);
  assert.match(script, /60 \* 60 \* 1000/);
  assert.match(script, /pointAlongRoute/);
  assert.match(script, /navigator\.clipboard/);
  assert.match(script, /URLSearchParams/);
  assert.match(script, /DOMContentLoaded/);
  assert.doesNotMatch(script, /window\.addEventListener\("load"/);

  await Promise.all(
    Array.from({ length: 18 }, (_, index) =>
      access(new URL(`../public/aerials/hole-${index + 1}.webp`, import.meta.url)),
    ),
  );

  await Promise.all([
    access(new URL("../public/event/tournament-lockup.png", import.meta.url)),
    access(new URL("../public/event/teal-golf-ball.png", import.meta.url)),
    access(new URL("../public/og-event.png", import.meta.url)),
    ...["muscat", "smash-house", "sunflower", "doma", "ritas", "chimichurri", "sushi-tokyo", "holy-schnitzel"]
      .map((name) => access(new URL(`../public/sponsors/${name}.png`, import.meta.url))),
  ]);
});
