Sound effects (click, correct, wrong, hint, skip, streak, game over, win)
are still synthesized live in js/app.js using the Web Audio API — no files
needed for those, and they work immediately with zero setup.

Background music is now a real track:

    game-of-thrones-theme.mp3   <- currently used (Settings > Background music)

An extra track is also bundled but not wired up by default:

    they-call-him-og-trance-omi-bgm.mp3

To switch which file plays as the background loop, open js/app.js and
change the MUSIC_TRACK_PATH constant near "ambient background music":

    const MUSIC_TRACK_PATH = "assets/sounds/game-of-thrones-theme.mp3";

Point it at any file in this folder (e.g. the Omi BGM track above) and
reload. If the file is missing, unsupported, or blocked by the browser's
autoplay policy, the game automatically falls back to a procedural
chiptune loop so it never goes silent.

Note: filenames here avoid spaces and mixed case on purpose — spaces in
audio filenames can get mangled when referenced from CSS/HTML/JS or when
served through some web servers, so we renamed the uploaded files to
lowercase-with-hyphens.
