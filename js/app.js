/* =========================================================================
   app.js — Cinema Guess game engine
   Plain vanilla JS. No frameworks, no backend, no build step.
   ========================================================================= */

(() => {
  "use strict";

  /* --------------------------- persisted storage -------------------------- */
  const STORAGE_KEYS = {
    highScore: "cinemaguess_highscore",
    bestStreak: "cinemaguess_beststreak",
    soundOn: "cinemaguess_sound",
    musicOn: "cinemaguess_music",
    volume: "cinemaguess_volume",
    darkMode: "cinemaguess_darkmode",
    difficulty: "cinemaguess_difficulty",
    timerSeconds: "cinemaguess_timerseconds",
    leaderboard: "cinemaguess_leaderboard"
  };

  const store = {
    get(key, fallback) {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      try { return JSON.parse(raw); } catch { return fallback; }
    },
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  /* -------------------------------- state ---------------------------------- */
  const state = {
    deck: [],            // shuffled queue of movie indices not yet played this game
    pool: [],             // movie objects available this game (post difficulty filter)
    solvedCount: 0,
    correctCount: 0,
    wrongCount: 0,
    currentMovie: null,
    lives: 3,
    score: 0,
    streak: 0,
    bestStreakRun: 0,
    hintLevel: 0,         // 0..4, how many hint lines are revealed for current movie
    timerSeconds: store.get(STORAGE_KEYS.timerSeconds, 60),
    timeLeft: 60,
    timerInterval: null,
    soundOn: store.get(STORAGE_KEYS.soundOn, true),
    musicOn: store.get(STORAGE_KEYS.musicOn, false),
    volume: store.get(STORAGE_KEYS.volume, 70),
    darkMode: store.get(STORAGE_KEYS.darkMode, false),
    difficulty: store.get(STORAGE_KEYS.difficulty, "All"),
    roundLocked: false,   // true once a round has been resolved, blocks double-submits
    gameStartedAt: 0,
    activeScreen: null,
    audioMuted: store.get("cinemaguess_audio_muted", false)
  };

  /* --------------------------------- audio ---------------------------------- */
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AC();
    }
    if (audioCtx.state === "suspended") {
      try { audioCtx.resume(); } catch (e) { /* ignore */ }
    }
    return audioCtx;
  }

  function vol() { return Math.max(0, Math.min(1, state.volume / 100)); }

  function playTone({
    freq = 440,
    duration = 0.16,
    type = "triangle",
    gain = 0.14,
    glideTo = null,
    detune = 0,
    filterFreq = 2200,
    attack = 0.01,
    release = 0.08,
    volumeScale = 1,
    notes = null,
    delay = 0.035
  }) {
    if (!state.soundOn || state.audioMuted) return;
    try {
      const ctx = getAudioCtx();
      const now = ctx.currentTime;
      const noteList = Array.isArray(notes) ? notes : [freq];
      const filter = ctx.createBiquadFilter();
      const masterGain = ctx.createGain();

      filter.type = "bandpass";
      filter.frequency.value = filterFreq;
      filter.Q.value = 0.7;

      const scaledGain = gain * vol() * volumeScale;
      masterGain.gain.setValueAtTime(0.0001, now);
      masterGain.gain.linearRampToValueAtTime(scaledGain > 0 ? scaledGain : 0.0001, now + attack);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration + release);

      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      noteList.forEach((note, index) => {
        const start = now + index * delay;
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        osc1.type = type;
        osc2.type = type === "sine" ? "triangle" : "sine";
        osc1.frequency.setValueAtTime(note, start);
        osc2.frequency.setValueAtTime(note * 1.003, start);
        osc2.detune.value = detune;
        if (glideTo) {
          osc1.frequency.exponentialRampToValueAtTime(glideTo, start + duration);
          osc2.frequency.exponentialRampToValueAtTime(glideTo * 1.002, start + duration);
        }
        osc1.connect(filter);
        osc2.connect(filter);
        osc1.start(start);
        osc2.start(start);
        osc1.stop(start + duration + release);
        osc2.stop(start + duration + release);
      });
    } catch (e) { /* audio not available — fail silently */ }
  }

  function beep(params) {
    playTone(params);
  }

  const sound = {
    click: () => playTone({ notes: [560, 660], duration: 0.08, type: "sine", gain: 0.08, detune: 3, filterFreq: 2600, attack: 0.001, release: 0.04, delay: 0.03 }),
    screen: () => playTone({ notes: [392, 523.25], duration: 0.1, type: "triangle", gain: 0.06, filterFreq: 2200, attack: 0.002, release: 0.06, delay: 0.02 }),
    roundStart: () => {
      playTone({ notes: [440, 523.25, 659.25], duration: 0.12, type: "sine", gain: 0.08, filterFreq: 2400, attack: 0.003, release: 0.07, delay: 0.025 });
      setTimeout(() => playTone({ notes: [659.25, 783.99], duration: 0.1, type: "triangle", gain: 0.07, filterFreq: 2600, attack: 0.002, release: 0.06, delay: 0.02 }), 70);
    },
    correct: () => {
      playTone({ notes: [523.25, 659.25, 783.99], duration: 0.16, type: "triangle", gain: 0.15, filterFreq: 2300, attack: 0.01, release: 0.1, delay: 0.04, volumeScale: 1.08 });
      setTimeout(() => playTone({ notes: [783.99, 1046.5], duration: 0.14, type: "triangle", gain: 0.14, filterFreq: 2500, attack: 0.01, release: 0.1, delay: 0.04 }), 110);
    },
    streak: () => playTone({ notes: [659.25, 783.99, 1046.5], duration: 0.12, type: "triangle", gain: 0.1, filterFreq: 2600, attack: 0.003, release: 0.08, delay: 0.025 }),
    wrong: () => {
      playTone({ notes: [220, 176, 132], duration: 0.24, type: "sawtooth", gain: 0.15, glideTo: 110, filterFreq: 1500, attack: 0.005, release: 0.12, delay: 0.03 });
    },
    lifeLost: () => playTone({ notes: [220, 165], duration: 0.18, type: "sawtooth", gain: 0.1, glideTo: 110, filterFreq: 1400, attack: 0.003, release: 0.1, delay: 0.03 }),
    hint: () => playTone({ notes: [392, 493], duration: 0.12, type: "sine", gain: 0.12, filterFreq: 1900, attack: 0.005, release: 0.07, delay: 0.03 }),
    skip: () => playTone({ notes: [330, 261, 196], duration: 0.16, type: "square", gain: 0.12, glideTo: 180, detune: 2, filterFreq: 1750, attack: 0.004, release: 0.08, delay: 0.04 }),
    tick: () => playTone({ notes: [900, 1108], duration: 0.05, type: "square", gain: 0.06, filterFreq: 2800, attack: 0.002, release: 0.03, delay: 0.02 }),
    gameover: () => {
      playTone({ notes: [300, 240, 180], duration: 0.22, type: "sawtooth", gain: 0.16, filterFreq: 1400, attack: 0.008, release: 0.12, delay: 0.04 });
      setTimeout(() => playTone({ notes: [220, 176], duration: 0.28, type: "sawtooth", gain: 0.16, filterFreq: 1300, attack: 0.008, release: 0.14, delay: 0.05 }), 150);
    },
    win: () => {
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
        setTimeout(() => playTone({ notes: [f, f * 1.25], duration: 0.2, type: "triangle", gain: 0.18, filterFreq: 2500, attack: 0.01, release: 0.12, delay: 0.03 }), i * 110);
      });
    }
  };

  /* -------------------------- ambient background music ------------------------ */
  // Real theme track, shipped in assets/sounds/. If it's missing or fails to
  // load/play (e.g. blocked by autoplay policy), we fall back to the
  // procedural chiptune loop below so the game never goes silent.
  const MUSIC_TRACK_PATH = "assets/sounds/game-of-thrones-theme.mp3";
  const MUSIC_TRACK_GAIN = 0.55; // relative to the master volume slider

  let musicEl = null;
  let musicNodes = null; // synth fallback nodes
  let musicUsingFallback = false;

  function getMusicEl() {
    if (!musicEl) {
      musicEl = new Audio(MUSIC_TRACK_PATH);
      musicEl.loop = true;
      musicEl.preload = "auto";
      musicEl.addEventListener("error", () => {
        musicUsingFallback = true;
        if (state.musicOn && !state.audioMuted) startSynthMusic();
      });
    }
    return musicEl;
  }

  function startMusic() {
    if (state.audioMuted || !state.musicOn) return;
    if (musicUsingFallback) { startSynthMusic(); return; }
    if (musicEl && !musicEl.paused) return;

    const el = getMusicEl();
    el.volume = vol() * MUSIC_TRACK_GAIN;
    const playPromise = el.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // File missing, unsupported, or blocked — fall back to the synth loop.
        musicUsingFallback = true;
        startSynthMusic();
      });
    }
  }

  function stopMusic() {
    if (musicEl) {
      try { musicEl.pause(); musicEl.currentTime = 0; } catch (e) { /* ignore */ }
    }
    stopSynthMusic();
  }

  function updateMusicVolume() {
    if (musicEl) musicEl.volume = vol() * MUSIC_TRACK_GAIN;
    if (musicNodes && musicNodes.master) musicNodes.master.gain.value = 0.03 * vol();
  }

  /* ---- procedural chiptune fallback (used only if the real track can't play) ---- */
  function startSynthMusic() {
    if (musicNodes || state.audioMuted || !state.musicOn) return;
    try {
      const ctx = getAudioCtx();
      const master = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 1100;
      filter.Q.value = 0.8;
      master.gain.value = 0.03 * vol();
      filter.connect(master);
      master.connect(ctx.destination);

      const notes = [196, 261.63, 329.63, 392];
      const pattern = [0, 2, 3, 2];
      let stepIndex = 0;
      let timer = null;
      const activeVoices = [];

      function playStep() {
        const note = notes[pattern[stepIndex % pattern.length]];
        stepIndex += 1;
        const now = ctx.currentTime;
        const oscA = ctx.createOscillator();
        const oscB = ctx.createOscillator();
        const gainNode = ctx.createGain();
        oscA.type = "sine";
        oscB.type = "triangle";
        oscA.frequency.setValueAtTime(note, now);
        oscB.frequency.setValueAtTime(note * 1.005, now);
        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.linearRampToValueAtTime(0.03 * vol(), now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);
        oscA.connect(gainNode);
        oscB.connect(gainNode);
        gainNode.connect(filter);
        oscA.start(now);
        oscB.start(now);
        oscA.stop(now + 0.58);
        oscB.stop(now + 0.58);
        activeVoices.push({ oscA, oscB, gainNode });
        setTimeout(() => {
          const idx = activeVoices.indexOf({ oscA, oscB, gainNode });
          if (idx >= 0) activeVoices.splice(idx, 1);
        }, 650);
      }

      timer = setInterval(playStep, 600);
      playStep();

      musicNodes = { master, filter, timer, activeVoices };
    } catch (e) { /* ignore */ }
  }

  function stopSynthMusic() {
    if (!musicNodes) return;
    try {
      if (musicNodes.timer) clearInterval(musicNodes.timer);
      musicNodes.activeVoices.forEach(({ oscA, oscB }) => {
        try { oscA.stop(); oscB.stop(); } catch (e) { /* ignore */ }
      });
    } catch (e) { /* ignore */ }
    musicNodes = null;
  }

  /* ------------------------------- utilities -------------------------------- */
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // strip accents
      .replace(/[^a-z0-9]/g, ""); // strip spaces & punctuation
  }

  // classic Levenshtein edit distance, used to forgive small typos
  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }
    return dp[m][n];
  }

  function isCorrectGuess(guess, movie) {
    const g = normalize(guess);
    if (!g) return false;
    const candidates = [movie.name, ...(movie.aliases || [])].map(normalize);
    for (const candidate of candidates) {
      if (g === candidate) return true;
      // allow small typos, scaled to name length so short names stay strict
      const tolerance = candidate.length <= 4 ? 0 : candidate.length <= 8 ? 1 : 2;
      if (levenshtein(g, candidate) <= tolerance) return true;
    }
    return false;
  }

  function shuffledIndices(n) {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function showToast(message, kind = "") {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show" + (kind ? ` toast-${kind}` : "");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 1600);
  }

  function formatClock(totalSeconds) {
    const s = Math.max(0, Math.round(totalSeconds));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${String(r).padStart(2, "0")}`;
  }

  /* ------------------------------- navigation -------------------------------- */
  function showScreen(id) {
    if (state.activeScreen && state.activeScreen !== id && !state.audioMuted && state.soundOn) {
      sound.screen();
    }
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    state.activeScreen = id;
  }

  /* --------------------------------- confetti & fireworks -------------------------------- */
  function launchConfetti(layerId = "confetti-layer") {
    const layer = document.getElementById(layerId);
    if (!layer) return;
    const colors = ["#e8b004", "#c81e3a", "#16a3a0", "#f5efe0", "#7a1029"];
    const pieces = 46;
    for (let i = 0; i < pieces; i++) {
      const el = document.createElement("div");
      el.className = "confetti-piece";
      const size = 6 + Math.random() * 7;
      el.style.width = size + "px";
      el.style.height = (size * 0.4) + "px";
      el.style.left = Math.random() * 100 + "vw";
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      const duration = 1.6 + Math.random() * 1.3;
      el.style.animationDuration = duration + "s";
      el.style.transform = `rotate(${Math.random() * 360}deg)`;
      layer.appendChild(el);
      setTimeout(() => el.remove(), duration * 1000 + 100);
    }
  }

  function launchFireworks() {
    const layer = document.getElementById("fireworks-layer");
    if (!layer) return;
    const colors = ["#e8b004", "#c81e3a", "#16a3a0", "#ffd23f", "#ffffff"];
    function burst(cx, cy) {
      const sparkCount = 18;
      for (let i = 0; i < sparkCount; i++) {
        const el = document.createElement("div");
        el.className = "firework-spark";
        const angle = (Math.PI * 2 * i) / sparkCount;
        const dist = 60 + Math.random() * 60;
        el.style.setProperty("--fx", `${Math.cos(angle) * dist}px`);
        el.style.setProperty("--fy", `${Math.sin(angle) * dist}px`);
        el.style.left = cx + "vw";
        el.style.top = cy + "vh";
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        layer.appendChild(el);
        setTimeout(() => el.remove(), 1200);
      }
    }
    let rounds = 0;
    const iv = setInterval(() => {
      burst(15 + Math.random() * 70, 15 + Math.random() * 45);
      rounds += 1;
      if (rounds >= 5) clearInterval(iv);
    }, 450);
  }

  /* ------------------------------- floating particles -------------------------------- */
  function spawnParticles() {
    const layer = document.getElementById("particles-layer");
    if (!layer) return;
    const count = window.innerWidth < 560 ? 14 : 26;
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "particle";
      const size = 2 + Math.random() * 3;
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.style.left = Math.random() * 100 + "vw";
      el.style.setProperty("--drift", `${(Math.random() - 0.5) * 80}px`);
      const duration = 14 + Math.random() * 18;
      el.style.animationDuration = duration + "s";
      el.style.animationDelay = (-Math.random() * duration) + "s";
      layer.appendChild(el);
    }
  }

  /* ---------------------------------- ripple ---------------------------------- */
  function attachRipple() {
    document.addEventListener("pointerdown", (e) => {
      const btn = e.target.closest(".btn, .icon-btn, .segment");
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.4;
      const ripple = document.createElement("span");
      ripple.className = "btn-ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 620);
    });
  }

  function attachParallax() {
    const elements = Array.from(document.querySelectorAll("[data-parallax]"));
    if (!elements.length) return;

    const applyParallax = (x, y) => {
      elements.forEach((el) => {
        const factor = Number(el.dataset.parallax || 0.5);
        const dx = (x - window.innerWidth / 2) * factor * 0.01;
        const dy = (y - window.innerHeight / 2) * factor * 0.01;
        el.style.setProperty("--tilt-x", `${dy.toFixed(2)}deg`);
        el.style.setProperty("--tilt-y", `${dx.toFixed(2)}deg`);
        el.classList.add("tilt-surface");
        el.style.transform = `perspective(1200px) rotateX(${dy.toFixed(2)}deg) rotateY(${dx.toFixed(2)}deg) translateZ(0)`;
      });
    };

    const resetParallax = () => {
      elements.forEach((el) => {
        el.style.transform = "";
        el.style.removeProperty("--tilt-x");
        el.style.removeProperty("--tilt-y");
        el.classList.remove("tilt-surface");
      });
    };

    const moveHandler = (e) => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const x = e.clientX || window.innerWidth / 2;
      const y = e.clientY || window.innerHeight / 2;
      applyParallax(x, y);
    };

    const touchHandler = (e) => {
      const touch = e.touches?.[0];
      if (!touch) return;
      applyParallax(touch.clientX, touch.clientY);
    };

    document.addEventListener("pointermove", moveHandler, { passive: true });
    document.addEventListener("touchmove", touchHandler, { passive: true });
    document.addEventListener("pointerleave", resetParallax);
    document.addEventListener("touchend", resetParallax);
    window.addEventListener("blur", resetParallax);
  }

  /* ------------------------------- poster art -------------------------------- */
  // Real image files are never bundled with this project (see assets/images/README.txt).
  // We always try the real path first — drop matching files in assets/images/ and
  // they'll be used automatically — but instantly fall back to generated poster art
  // so the game is never broken or empty-looking.
  const POSTER_CAPTIONS = ["scene one", "the lead", "the twist"];

  function buildPoster(movie, slotIndex) {
    const wrap = document.createElement("div");
    wrap.className = "poster";

    const imagePath = movie.images?.[slotIndex] || "";
    const isExternalImage = /^(https?:)?\/\//i.test(imagePath) || imagePath.startsWith("data:") || imagePath.startsWith("blob:") || imagePath.startsWith("/");

    const img = document.createElement("img");
    img.alt = `${movie.name} poster clue ${slotIndex + 1}`;
    img.className = "img-loading";
    img.src = isExternalImage ? imagePath : `assets/images/${imagePath}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.fetchPriority = "low";

    const fallback = document.createElement("div");
    fallback.className = "poster-fallback";
    fallback.style.background = `linear-gradient(150deg, ${movie.posterColors[0]}, ${movie.posterColors[1]})`;

    const watermark = document.createElement("span");
    watermark.className = "poster-watermark";
    watermark.textContent = movie.name.trim().charAt(0);

    const glyph = document.createElement("span");
    glyph.className = "poster-glyph";
    glyph.textContent = slotIndex === 1 ? movie.posterGlyph : movie.emojis[slotIndex % movie.emojis.length];

    const sprocketsLeft = document.createElement("div");
    sprocketsLeft.className = "poster-sprockets left";
    const sprocketsRight = document.createElement("div");
    sprocketsRight.className = "poster-sprockets right";
    for (let i = 0; i < 8; i++) {
      sprocketsLeft.appendChild(document.createElement("span"));
      sprocketsRight.appendChild(document.createElement("span"));
    }

    const caption = document.createElement("span");
    caption.className = "poster-caption";
    caption.textContent = POSTER_CAPTIONS[slotIndex];

    fallback.append(watermark, glyph, sprocketsLeft, sprocketsRight, caption);

    img.addEventListener("load", () => img.classList.remove("img-loading"), { once: true });
    img.addEventListener("error", () => {
      img.remove();
      wrap.appendChild(fallback);
    }, { once: true });

    wrap.appendChild(img);
    return wrap;
  }

  /* ---------------------------------- timer ----------------------------------- */
  const RING_CIRCUMFERENCE = 264; // 2 * PI * r(42), matches CSS stroke-dasharray

  function startTimer() {
    stopTimer();
    state.timeLeft = state.timerSeconds;
    updateTimerUI();
    state.timerInterval = setInterval(() => {
      state.timeLeft -= 1;
      updateTimerUI();
      if (state.timeLeft <= 15 && state.timeLeft > 0) sound.tick();
      if (state.timeLeft <= 0) {
        stopTimer();
        handleTimeout();
      }
    }, 1000);
  }

  function triggerPulseFeedback() {
    const card = document.getElementById("movie-card");
    if (!card) return;
    card.classList.remove("pulse-ring");
    void card.offsetWidth;
    card.classList.add("pulse-ring");
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function updateTimerUI() {
    const pct = Math.max(0, state.timeLeft / state.timerSeconds);
    const ring = document.getElementById("timer-ring-fg");
    const wrap = document.getElementById("timer-wrap");
    if (state.timeLeft <= 12 && state.timeLeft > 0) triggerPulseFeedback();
    ring.style.strokeDashoffset = String(RING_CIRCUMFERENCE * (1 - pct));
    document.getElementById("timer-number").textContent = formatClock(state.timeLeft);

    // Green -> Yellow -> Orange -> Red, based on proportion of time remaining
    ring.classList.remove("stage-green", "stage-yellow", "stage-orange", "stage-red");
    if (pct > 0.6) ring.classList.add("stage-green");
    else if (pct > 0.35) ring.classList.add("stage-yellow");
    else if (pct > 0.15) ring.classList.add("stage-orange");
    else ring.classList.add("stage-red");

    wrap.classList.toggle("timer-pulse", state.timeLeft <= 20 && state.timeLeft > 10);
    wrap.classList.toggle("timer-flash", state.timeLeft <= 10);
  }

  /* ------------------------------- game lifecycle ------------------------------ */
  function getPool() {
    if (state.difficulty === "All") return MOVIES;
    const filtered = MOVIES.filter(m => m.difficulty === state.difficulty);
    return filtered.length ? filtered : MOVIES;
  }

  function startNewGame() {
    state.pool = getPool();
    state.deck = shuffledIndices(state.pool.length);
    state.solvedCount = 0;
    state.correctCount = 0;
    state.wrongCount = 0;
    state.lives = 3;
    state.score = 0;
    state.streak = 0;
    state.bestStreakRun = 0;
    state.gameStartedAt = Date.now();
    updateLivesUI();
    updateScoreUI();
    updateProgressUI();
    nextRound();
    showScreen("screen-game");
  }

  function nextRound() {
    if (state.deck.length === 0) {
      endGame(true);
      return;
    }
    const movieIndex = state.deck.pop();
    state.currentMovie = state.pool[movieIndex];
    state.hintLevel = 0;
    state.roundLocked = false;

    renderMovieCard();
    updateProgressUI();
    document.getElementById("guess-input").value = "";
    document.getElementById("guess-input").focus();
    sound.roundStart();
    startTimer();
  }

  function renderMovieCard() {
    const movie = state.currentMovie;

    document.getElementById("difficulty-badge").textContent = movie.difficulty;

    const posterStrip = document.getElementById("poster-strip");
    posterStrip.innerHTML = "";
    for (let i = 0; i < 3; i++) posterStrip.appendChild(buildPoster(movie, i));

    const emojiRow = document.getElementById("emoji-row");
    emojiRow.innerHTML = "";
    movie.emojis.forEach(e => {
      const span = document.createElement("span");
      span.textContent = e;
      emojiRow.appendChild(span);
    });

    renderHints();
  }

  function renderHints() {
    const movie = state.currentMovie;
    const box = document.getElementById("hints-box");
    box.innerHTML = "";

    if (state.hintLevel === 0) {
      const p = document.createElement("p");
      p.className = "hints-empty";
      p.id = "hints-empty";
      p.textContent = 'No hints revealed yet. Tap "Reveal Hint" if you\'re stuck.';
      box.appendChild(p);
      return;
    }

    const revealed = [
      { label: "Hero", value: movie.hero },
      { label: "Director", value: movie.director },
      { label: "Release Year", value: String(movie.year) },
      { label: "Story Hint", value: movie.storyHints[0] }
    ];
    if (state.hintLevel >= 5) revealed.push({ label: "Story Hint", value: movie.storyHints[1] });

    revealed.slice(0, state.hintLevel).forEach(h => {
      const line = document.createElement("p");
      line.className = "hint-line";
      line.innerHTML = `<b>${h.label}:</b> ${h.value}`;
      box.appendChild(line);
    });
  }

  function updateLivesUI() {
    document.querySelectorAll("#lives-display .life").forEach((el, i) => {
      el.classList.toggle("lost", i >= state.lives);
    });
  }

  function updateScoreUI() {
    document.getElementById("score-current").textContent = state.score;
    document.getElementById("score-best").textContent = store.get(STORAGE_KEYS.highScore, 0);
    document.getElementById("streak-current").textContent = `${state.streak} 🔥`;
    document.getElementById("streak-best").textContent = store.get(STORAGE_KEYS.bestStreak, 0);
  }

  function updateProgressUI() {
    const total = state.pool.length || MOVIES.length;
    const played = total - state.deck.length; // includes current round
    document.getElementById("progress-label").textContent = `Movie ${Math.min(played, total)} / ${total}`;
    document.getElementById("progress-fill").style.width = `${(state.solvedCount / total) * 100}%`;
  }

  function addScore(delta) {
    state.score = Math.max(0, state.score + delta);
    updateScoreUI();
  }

  function flashCard(kind) {
    const card = document.getElementById("movie-card");
    card.classList.remove("shake", "correct-flash");
    // force reflow so the animation can replay
    void card.offsetWidth;
    card.classList.add(kind === "correct" ? "correct-flash" : "shake");
  }

  /* --------------------------------- actions ----------------------------------- */
  function submitGuess(e) {
    e.preventDefault();
    if (state.roundLocked) return;
    const input = document.getElementById("guess-input");
    const guess = input.value.trim();
    if (!guess) return;

    if (isCorrectGuess(guess, state.currentMovie)) {
      handleCorrect();
    } else {
      handleWrong();
    }
  }

  function handleCorrect() {
    state.roundLocked = true;
    stopTimer();
    sound.correct();
    flashCard("correct");
    launchConfetti("confetti-layer");

    addScore(10);
    state.streak += 1;
    if (state.streak > 1) sound.streak();
    state.bestStreakRun = Math.max(state.bestStreakRun, state.streak);
    state.solvedCount += 1;
    state.correctCount += 1;

    persistBests();
    updateScoreUI();
    updateProgressUI();
    showToast(`Correct! It was "${state.currentMovie.name}" 🎉`, "correct");

    setTimeout(() => { state.roundLocked = false; nextRound(); }, 1100);
  }

  function handleWrong() {
    sound.wrong();
    flashCard("wrong");
    addScore(-2);
    state.streak = 0;
    state.wrongCount += 1;
    updateScoreUI();
    document.getElementById("guess-input").value = "";
    document.getElementById("guess-input").focus();

    loseLife();
  }

  function loseLife() {
    state.lives -= 1;
    sound.lifeLost();
    updateLivesUI();
    if (state.lives <= 0) {
      state.roundLocked = true;
      stopTimer();
      setTimeout(() => endGame(false), 500);
    }
  }

  function useHint() {
    if (state.roundLocked) return;
    const maxLevel = state.currentMovie.storyHints.length >= 2 ? 5 : 4;
    if (state.hintLevel >= maxLevel) {
      showToast("No more hints left for this one!");
      return;
    }
    triggerPulseFeedback();
    state.hintLevel += 1;
    sound.hint();
    addScore(-3);
    renderHints();
  }

  function skipMovie() {
    if (state.roundLocked) return;
    state.roundLocked = true;
    stopTimer();
    sound.skip();
    addScore(-5);
    state.streak = 0;
    state.wrongCount += 1;
    updateScoreUI();
    showToast(`Skipped. It was "${state.currentMovie.name}"`);
    setTimeout(() => { state.roundLocked = false; nextRound(); }, 700);
  }

  function revealAnswerName() {
    if (state.roundLocked) return;
    state.roundLocked = true;
    stopTimer();
    sound.click();
    showToast(`🎬 It's "${state.currentMovie.name}"`);
    setTimeout(() => { state.roundLocked = false; nextRound(); }, 900);
  }

  function handleTimeout() {
    if (state.roundLocked) return;
    state.roundLocked = true;
    sound.wrong();
    state.streak = 0;
    state.wrongCount += 1;
    updateScoreUI();
    showToast(`Time's up! It was "${state.currentMovie.name}"`, "wrong");
    setTimeout(() => { state.roundLocked = false; nextRound(); }, 900);
  }

  function persistBests() {
    const currentHigh = store.get(STORAGE_KEYS.highScore, 0);
    if (state.score > currentHigh) store.set(STORAGE_KEYS.highScore, state.score);
    const currentBestStreak = store.get(STORAGE_KEYS.bestStreak, 0);
    if (state.bestStreakRun > currentBestStreak) store.set(STORAGE_KEYS.bestStreak, state.bestStreakRun);
  }

  /* -------------------------------- leaderboard --------------------------------- */
  function addToLeaderboard(score) {
    const board = store.get(STORAGE_KEYS.leaderboard, []);
    board.push({ score, date: new Date().toISOString() });
    board.sort((a, b) => b.score - a.score);
    store.set(STORAGE_KEYS.leaderboard, board.slice(0, 10));
  }

  function renderLeaderboard() {
    const list = document.getElementById("leaderboard-list");
    const board = store.get(STORAGE_KEYS.leaderboard, []);
    list.innerHTML = "";
    if (!board.length) {
      const empty = document.createElement("p");
      empty.className = "leaderboard-empty";
      empty.textContent = "No runs yet — play a game to claim the top spot!";
      list.appendChild(empty);
      return;
    }
    const medalClass = ["gold", "silver", "bronze"];
    const medalIcon = ["🥇", "🥈", "🥉"];
    board.forEach((entry, i) => {
      const row = document.createElement("div");
      row.className = "lb-row" + (medalClass[i] ? " " + medalClass[i] : "");
      const rank = document.createElement("div");
      rank.className = "lb-rank";
      rank.textContent = medalIcon[i] || String(i + 1);
      const info = document.createElement("div");
      info.className = "lb-info";
      const scoreEl = document.createElement("div");
      scoreEl.className = "lb-score";
      scoreEl.textContent = `${entry.score} pts`;
      const dateEl = document.createElement("div");
      dateEl.className = "lb-date";
      const d = new Date(entry.date);
      dateEl.textContent = isNaN(d) ? "" : d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
      info.append(scoreEl, dateEl);
      row.append(rank, info);
      list.appendChild(row);
    });
  }

  /* ---------------------------------- game over / win --------------------------------- */
  function starsForScore(score) {
    if (score >= 90) return 5;
    if (score >= 70) return 4;
    if (score >= 50) return 3;
    if (score >= 30) return 2;
    return 1;
  }

  function endGame(won) {
    stopTimer();
    persistBests();
    addToLeaderboard(state.score);

    const elapsedMs = Date.now() - state.gameStartedAt;
    const elapsedSeconds = Math.max(0, Math.floor(elapsedMs / 1000));
    const highScore = store.get(STORAGE_KEYS.highScore, 0);
    const bestStreak = store.get(STORAGE_KEYS.bestStreak, 0);

    updateHomeStats();

    if (won) {
      sound.win();
      document.getElementById("win-score-counter").textContent = "0";
      document.getElementById("win-beststreak").textContent = bestStreak;
      document.getElementById("win-highscore").textContent = highScore;

      const stars = starsForScore(state.score);
      const starEl = document.getElementById("star-rating");
      starEl.className = "star-rating";
      showScreen("screen-win");
      launchConfetti("confetti-layer-win");
      launchFireworks();

      // animated star reveal + score counter
      requestAnimationFrame(() => { starEl.classList.add(`filled-${stars}`); });
      animateCounter(document.getElementById("win-score-counter"), state.score);
    } else {
      sound.gameover();
      const isNewBest = state.score === highScore && state.score > 0;
      const total = state.correctCount + state.wrongCount;
      const accuracy = total > 0 ? Math.round((state.correctCount / total) * 100) : 0;

      document.getElementById("gameover-title").textContent = "Game Over";
      document.getElementById("gameover-sub").textContent = "You ran out of lives.";
      document.getElementById("go-score").textContent = state.score;
      document.getElementById("go-correct").textContent = state.correctCount;
      document.getElementById("go-wrong").textContent = state.wrongCount;
      document.getElementById("go-accuracy").textContent = `${accuracy}%`;
      document.getElementById("go-time").textContent = formatClock(elapsedSeconds);
      document.getElementById("go-beststreak").textContent = bestStreak;
      document.getElementById("gameover-newbest").hidden = !isNewBest;

      showScreen("screen-gameover");
    }
  }

  function animateCounter(el, target) {
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      el.textContent = Math.round(target * p);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }

  function updateHomeStats() {
    document.getElementById("home-highscore").textContent = store.get(STORAGE_KEYS.highScore, 0);
    document.getElementById("home-beststreak").textContent = store.get(STORAGE_KEYS.bestStreak, 0);
  }

  /* --------------------------------- share ----------------------------------- */
  async function shareScore() {
    const text = `I scored ${state.score} points on Cinema Guess — the Telugu Movie Quiz! 🎬🏆 Can you beat me?`;
    if (navigator.share) {
      try { await navigator.share({ text, title: "Cinema Guess" }); return; } catch (e) { /* user cancelled or unsupported */ }
    }
    try {
      await navigator.clipboard.writeText(text);
      showToast("Score copied to clipboard!");
    } catch (e) {
      showToast(text);
    }
  }

  /* --------------------------------- settings ----------------------------------- */
  function applySoundToggleUI() {
    document.getElementById("toggle-sound").setAttribute("aria-pressed", String(state.soundOn));
  }
  function applyAudioMuteUI() {
    const homeBtn = document.getElementById("btn-music");
    const settingsToggle = document.getElementById("toggle-audio");
    if (homeBtn) {
      homeBtn.setAttribute("aria-pressed", String(state.audioMuted));
      homeBtn.textContent = state.audioMuted ? "🔈" : "🔊";
      homeBtn.title = state.audioMuted ? "Unmute audio" : "Mute audio";
    }
    if (settingsToggle) settingsToggle.setAttribute("aria-pressed", String(state.audioMuted));
  }
  function applyMusicToggleUI() {
    document.getElementById("toggle-music").setAttribute("aria-pressed", String(state.musicOn));
  }
  function applyVolumeUI() {
    const slider = document.getElementById("volume-slider");
    slider.value = state.volume;
    slider.style.setProperty("--val", state.volume + "%");
  }
  function applyDarkModeUI() {
    document.getElementById("toggle-darkmode").setAttribute("aria-pressed", String(state.darkMode));
    document.body.classList.toggle("theme-dim", state.darkMode);
  }
  function applyTimerSegmentUI() {
    document.querySelectorAll("#timer-options .segment").forEach(seg => {
      seg.classList.toggle("active", Number(seg.dataset.seconds) === state.timerSeconds);
    });
  }
  function applyDifficultySegmentUI() {
    document.querySelectorAll("#difficulty-options .segment").forEach(seg => {
      seg.classList.toggle("active", seg.dataset.difficulty === state.difficulty);
    });
  }

  function toggleMusic(force) {
    state.musicOn = force !== undefined ? force : !state.musicOn;
    store.set(STORAGE_KEYS.musicOn, state.musicOn);
    applyMusicToggleUI();
    if (state.audioMuted) return;
    if (state.musicOn) startMusic(); else stopMusic();
  }

  function toggleAudioMute(force) {
    state.audioMuted = force !== undefined ? force : !state.audioMuted;
    store.set("cinemaguess_audio_muted", state.audioMuted);
    applyAudioMuteUI();
    if (state.audioMuted) {
      stopMusic();
      return;
    }
    if (state.musicOn) startMusic();
  }

  /* ----------------------------------- wiring ------------------------------------ */
  function wireEvents() {
    document.getElementById("btn-start").addEventListener("click", () => { sound.click(); startNewGame(); });
    document.getElementById("btn-howto").addEventListener("click", () => { sound.click(); showScreen("screen-howto"); });
    document.getElementById("btn-howto-back").addEventListener("click", () => { sound.click(); showScreen("screen-home"); });
    document.getElementById("btn-settings").addEventListener("click", () => { sound.click(); showScreen("screen-settings"); });
    document.getElementById("btn-settings-back").addEventListener("click", () => { sound.click(); showScreen("screen-home"); });
    document.getElementById("btn-leaderboard").addEventListener("click", () => { sound.click(); renderLeaderboard(); showScreen("screen-leaderboard"); });
    document.getElementById("btn-leaderboard-back").addEventListener("click", () => { sound.click(); showScreen("screen-home"); });

    document.getElementById("btn-music").addEventListener("click", () => toggleAudioMute());
    document.getElementById("toggle-music").addEventListener("click", () => toggleMusic());
    document.getElementById("toggle-audio").addEventListener("click", () => toggleAudioMute());

    document.getElementById("toggle-sound").addEventListener("click", () => {
      state.soundOn = !state.soundOn;
      store.set(STORAGE_KEYS.soundOn, state.soundOn);
      applySoundToggleUI();
      sound.click();
    });

    document.getElementById("volume-slider").addEventListener("input", (e) => {
      state.volume = Number(e.target.value);
      store.set(STORAGE_KEYS.volume, state.volume);
      applyVolumeUI();
      updateMusicVolume();
    });
    document.getElementById("volume-slider").addEventListener("change", () => sound.click());

    document.getElementById("toggle-darkmode").addEventListener("click", () => {
      state.darkMode = !state.darkMode;
      store.set(STORAGE_KEYS.darkMode, state.darkMode);
      applyDarkModeUI();
      sound.click();
    });

    document.getElementById("timer-options").addEventListener("click", (e) => {
      const seg = e.target.closest(".segment");
      if (!seg) return;
      state.timerSeconds = Number(seg.dataset.seconds);
      store.set(STORAGE_KEYS.timerSeconds, state.timerSeconds);
      applyTimerSegmentUI();
      sound.click();
    });

    document.getElementById("difficulty-options").addEventListener("click", (e) => {
      const seg = e.target.closest(".segment");
      if (!seg) return;
      state.difficulty = seg.dataset.difficulty;
      store.set(STORAGE_KEYS.difficulty, state.difficulty);
      applyDifficultySegmentUI();
      sound.click();
    });

    document.getElementById("btn-reset").addEventListener("click", () => {
      if (!confirm("Reset high score, best streak and leaderboard? This can't be undone.")) return;
      store.set(STORAGE_KEYS.highScore, 0);
      store.set(STORAGE_KEYS.bestStreak, 0);
      store.set(STORAGE_KEYS.leaderboard, []);
      updateHomeStats();
      showToast("Progress reset");
    });

    document.getElementById("guess-form").addEventListener("submit", submitGuess);
    document.getElementById("guess-input").addEventListener("focus", () => {
      document.getElementById("movie-card").classList.add("input-focus");
    });
    document.getElementById("guess-input").addEventListener("blur", () => {
      document.getElementById("movie-card").classList.remove("input-focus");
    });
    document.getElementById("btn-hint").addEventListener("click", useHint);
    document.getElementById("btn-skip").addEventListener("click", skipMovie);
    document.getElementById("btn-reveal-name").addEventListener("click", revealAnswerName);

    document.getElementById("btn-play-again").addEventListener("click", () => { sound.click(); startNewGame(); });
    document.getElementById("btn-home").addEventListener("click", () => { sound.click(); updateHomeStats(); showScreen("screen-home"); });

    document.getElementById("btn-win-play-again").addEventListener("click", () => { sound.click(); startNewGame(); });
    document.getElementById("btn-win-home").addEventListener("click", () => { sound.click(); updateHomeStats(); showScreen("screen-home"); });
    document.getElementById("btn-win-share").addEventListener("click", () => { sound.click(); shareScore(); });
  }

  /* ------------------------------------ init -------------------------------------- */
  function init() {
    applySoundToggleUI();
    applyAudioMuteUI();
    applyMusicToggleUI();
    applyVolumeUI();
    applyDarkModeUI();
    applyTimerSegmentUI();
    applyDifficultySegmentUI();
    updateHomeStats();
    wireEvents();
    attachRipple();
    attachParallax();
    spawnParticles();
    showScreen("screen-home");

    // Most browsers block audio until a user gesture — start music lazily
    // on first interaction if the person already has it enabled.
    if (state.musicOn && !state.audioMuted) {
      const resume = () => { startMusic(); document.removeEventListener("pointerdown", resume); };
      document.addEventListener("pointerdown", resume, { once: true });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();