This folder is intentionally empty.

The game code always tries to load real poster photos first, using the exact
filenames listed in js/movies.js (e.g. pushpa1.jpg, pushpa2.jpg, pushpa3.jpg).

Since this project ships with no licensed movie photos, every poster slot
automatically falls back to a generated gradient + emoji "poster" the instant
the real file fails to load — so the game is fully playable with zero setup.

To use real posters:
  1. Drop image files into this folder using the exact filenames from
     js/movies.js (see each movie's "images" array).
  2. Reload the page. The real photos will appear automatically; no code
     changes needed. Any movie missing its files just keeps using the
     generated poster for that slot.
