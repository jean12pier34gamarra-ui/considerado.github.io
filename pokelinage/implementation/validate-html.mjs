import fs from "node:fs";
import assert from "node:assert/strict";

const file = process.argv[2] || "pokelinage.html";
const html = fs.readFileSync(file, "utf8");

assert.ok(html.includes("MAP_TERRAIN_CHUNK_CACHE"), "Falta la caché de tiles");
assert.ok(html.includes("MAP_POND_SPRITE_CACHE"), "Falta la caché de lagos");
assert.ok(html.includes("html.desktop-device .bottom-controls"), "Falta la regla de escritorio");
assert.ok(html.includes("html.mobile-device .bottom-controls"), "Falta la regla móvil");
assert.ok(html.includes("image-rendering:pixelated"), "Falta el render pixelado");
assert.ok(html.includes("clearMapTerrainChunkCache();"), "Falta invalidar caché al generar una expedición");

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((m) => m[1]);
const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
assert.deepEqual([...new Set(duplicates)], [], "Hay IDs duplicados");

console.log(`Pokelinage checks passed: ${html.length.toLocaleString()} chars, ${ids.length} IDs, no duplicates.`);
