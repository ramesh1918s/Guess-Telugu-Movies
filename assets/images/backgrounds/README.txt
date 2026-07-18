This folder is intentionally empty.

The premium UI looks for a fullscreen cinema-hall wallpaper at:

    assets/images/backgrounds/cinema-wallpaper.jpg

No such file ships with this project (no licensed photo is bundled).
CSS layers a rich cinematic gradient underneath the image, so if the file
is missing the background still looks fully designed — it just won't have
a photographic hero image behind it.

To add one:
  1. Get a wallpaper you're licensed to use (a dark, moody cinema-hall or
     marquee-lights photo works best — think red velvet curtains, spotlight
     beams, or a wall of movie posters).
  2. Save it as cinema-wallpaper.jpg in this folder (1920x1080 or larger,
     landscape). You can also drop cinema-wallpaper@2x.jpg for higher-DPI
     screens; the CSS will pick either up via background-image, no code
     changes required.
  3. Reload the page. The dark overlay + blur + slow zoom animation are
     already wired up in css/style.css under .cinema-bg.
