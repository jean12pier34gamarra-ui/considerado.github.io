/* Pokelinage map-canvas cache utilities.
   Equivalent cache logic is inlined in the self-contained HTML build. */
(function (global) {
  "use strict";

  const TERRAIN_CHUNK_SIZE = 512; // 16 x 16 tiles of 32px
  const TERRAIN_CACHE_LIMIT = 48;
  const POND_CACHE_LIMIT = 28;
  const terrain = new Map();
  const ponds = new Map();

  function getCachedCanvas(cache, key, width, height, build, limit) {
    let canvas = cache.get(key);
    if (canvas) {
      cache.delete(key);
      cache.set(key, canvas); // LRU: refresh recency
      return canvas;
    }
    canvas = global.document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.imageSmoothingEnabled = false;
    build(ctx, width, height);
    cache.set(key, canvas);
    while (cache.size > limit) cache.delete(cache.keys().next().value);
    return canvas;
  }

  function getTerrainChunk(key, build) {
    return getCachedCanvas(
      terrain, key, TERRAIN_CHUNK_SIZE, TERRAIN_CHUNK_SIZE,
      build, TERRAIN_CACHE_LIMIT
    );
  }

  function getPondSprite(key, width, height, build) {
    return getCachedCanvas(ponds, key, width, height, build, POND_CACHE_LIMIT);
  }

  function clear() {
    terrain.clear();
    ponds.clear();
  }

  global.PokelinageMapCache = Object.freeze({
    TERRAIN_CHUNK_SIZE,
    TILE_SIZE: 32,
    getTerrainChunk,
    getPondSprite,
    clear,
    stats: () => ({ terrainChunks: terrain.size, pondSprites: ponds.size })
  });
})(window);
