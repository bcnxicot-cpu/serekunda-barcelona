import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("all key contact actions use desktop-safe HTTPS or tel links", () => {
  assert.match(page, /https:\/\/wa\.me\//);
  assert.match(page, /https:\/\/mail\.google\.com\/mail/);
  assert.match(page, /tel:\+34602034270/);
  assert.doesNotMatch(page, /mailto:/);
});

test("responsive styles and accessible image descriptions are present", () => {
  assert.match(css, /@media \(max-width: 900px\)/);
  assert.match(page, /alt="Plato servido en SereKunda"/);
  assert.match(page, /aria-label="Navegación principal"/);
});
