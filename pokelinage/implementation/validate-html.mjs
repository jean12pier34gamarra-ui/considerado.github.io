import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const file = process.argv[2] || "pokelinage.html";
const html = fs.readFileSync(file, "utf8");

for (const [needle, label] of [
  ["MAP_TERRAIN_CHUNK_CACHE", "caché de tiles"],
  ["MAP_POND_SPRITE_CACHE", "caché de lagos"],
  ["html.desktop-device .bottom-controls", "regla de escritorio"],
  ["html.mobile-device .bottom-controls", "regla móvil"],
  ["image-rendering:pixelated", "renderizado pixel art"],
  ["clearMapTerrainChunkCache();", "invalidación de caché al crear mundo"]
]) {
  assert.ok(html.includes(needle), `Falta ${label}`);
}

// Compile inline JavaScript without executing game side effects.
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
assert.ok(scripts.length > 0, "No se encontraron scripts inline");
scripts.forEach((match, index) => {
  new vm.Script(match[1], { filename: `${file}#inline-${index + 1}` });
});

// Remove script bodies before checking static markup so id="..." literals
// inside template strings (rendered later by the game) aren't false duplicates.
const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, "");
const ids = [...markup.matchAll(/\bid=["']([^"']+)["']/gi)].map((m) => m[1]);
const duplicateIds = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
assert.deepEqual(duplicateIds, [], "Hay IDs duplicados en el marcado estático");

console.log(
  `Pokelinage static checks passed: ${html.length.toLocaleString()} chars, ${scripts.length} scripts parsed, ${ids.length} static IDs; no duplicates.`
);
