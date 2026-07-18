# 🎬 Cinema Guess — Telugu Movie Quiz Game

A premium, single-screen Telugu movie guessing game. Emoji clues, poster
panels, a circular countdown timer, lives, streaks, hints, a leaderboard,
and a blockbuster win screen — all running as a lightweight, dependency-free
static web app (vanilla HTML/CSS/JS, zero build step, zero backend).

![status](https://img.shields.io/badge/status-production--ready-brightgreen)
![stack](https://img.shields.io/badge/stack-HTML%20%2F%20CSS%20%2F%20JS-blue)
![docker](https://img.shields.io/badge/docker-ready-2496ED)

---

## ✨ Features

- **50 Telugu movies** with emoji clues, poster art, hero/director/year/story hints
- **Lenient answer checking** — typo-tolerant (Levenshtein distance), ignores case/spacing/punctuation
- **01:30 circular countdown timer** — green → yellow → orange → red, pulses under 20s, flashes under 10s, ticks for the last 15s
- **Lives, score, streak, best streak** — persisted locally between sessions
- **Hint system** — reveal Hero → Director → Year → Story, each hint costs points
- **Skip / Show Name** — bail out of a tough round without losing all your lives
- **Difficulty selector** — play Easy / Medium / Hard / All
- **Leaderboard** — top 10 runs on this device, gold/silver/bronze medals
- **Cinematic Win Screen** — star rating, animated score counter, confetti, fireworks, clapboard animation, share score
- **Game Over screen** — final score, correct/wrong counts, accuracy, time played, best streak
- **Settings** — sound effects, ambient background music, master volume, round timer length, difficulty, dark theatre mode, progress reset
- **Premium UI** — glassmorphism cards, neon glow borders, gradient buttons with ripple/press animations, floating particles, parallax cinema spotlight background, refined motion cues for hints and the timer
- **Fully responsive** — desktop, laptop, tablet, Android, iPhone, portrait & landscape, with improved touch-friendly controls and compact mobile layouts
- **Zero external dependencies** — sound effects and background music are synthesized live with the Web Audio API; no audio files, no frameworks, no build tools
- **Offline-friendly** — everything runs from static files; posters gracefully fall back to generated gradient art if no image files are present
- **Deployment-ready** — container-friendly Nginx setup with health checks and compose support for lightweight hosting

---

## 📁 Folder Structure

```
movies-game-updated/
├── index.html                 # Single-page app shell (all screens)
├── css/
│   └── style.css              # All styling, animations, responsive rules
├── js/
│   ├── movies.js              # Movie dataset (50 movies)
│   └── app.js                 # Game engine (state, timer, audio, rendering)
├── assets/
│   ├── images/
│   │   ├── backgrounds/       # Drop cinema-wallpaper.jpg here (optional)
│   │   └── README.txt         # How poster images are loaded/fallback works
│   └── sounds/
│       └── README.txt         # Why sounds are synthesized, not shipped as files
├── Dockerfile                 # Nginx-based production image
├── docker-compose.yml         # One-command container orchestration
├── nginx.conf                 # Gzip, caching, security headers
├── .dockerignore
└── README.md
```

No build step, no `package.json`, no bundler — open `index.html` directly in
a browser and the game runs.

---

## 🖥️ Local Development

You only need a static file server (any will do) since the game makes no
server-side calls.

```bash
# Option 1: Python (built into most systems)
cd movies-game-updated
python3 -m http.server 8080

# Option 2: Node
npx serve movies-game-updated -l 8080

# Then open:
http://localhost:8080
```

Or simply double-click `index.html` — the game works fine opened directly
from disk (`file://`) too, since it has no backend.

---

## ☁️ Ubuntu EC2 Setup (from scratch)

```bash
# 1. SSH into your instance
ssh -i your-key.pem ubuntu@<EC2_PUBLIC_IP>

# 2. Update packages
sudo apt update && sudo apt upgrade -y

# 3. Install Docker
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 4. Let your user run docker without sudo
sudo usermod -aG docker $USER
newgrp docker

# 5. Clone the project (see GitHub Clone section below)
git clone https://github.com/<your-username>/cinema-guess.git
cd cinema-guess/movies-game-updated

# 6. Build & run with Docker Compose
docker compose up -d --build

# 7. Open the security group / firewall for port 8080
sudo ufw allow 8080/tcp

# 8. Visit in a browser
http://<EC2_PUBLIC_IP>:8080
```

---

## 🐳 Docker

### Install Docker & Docker Compose

See the **Ubuntu EC2 Setup** section above, or for other platforms follow
the official guide: https://docs.docker.com/engine/install/

### Build the Docker Image

```bash
cd movies-game-updated
docker build -t cinema-guess:latest .
```

### Run the Container

```bash
docker run -d --name cinema-guess -p 8080:80 cinema-guess:latest
```

Or with Docker Compose (recommended — includes healthcheck & restart policy):

```bash
docker compose up -d --build
```

The game is now available at **http://localhost:8080** (host port `8080` →
container port `80`, served by Nginx).

### Stop the Container

```bash
docker stop cinema-guess
# or with compose:
docker compose stop
```

### Restart the Container

```bash
docker restart cinema-guess
# or with compose:
docker compose restart
```

### Remove the Container

```bash
docker rm -f cinema-guess
# or with compose:
docker compose down
```

### View Logs

```bash
docker logs -f cinema-guess
# or with compose:
docker compose logs -f
```

### Docker Hub — Push

```bash
docker login
docker tag cinema-guess:latest <your-dockerhub-username>/cinema-guess:latest
docker push <your-dockerhub-username>/cinema-guess:latest
```

### Docker Hub — Pull

```bash
docker pull <your-dockerhub-username>/cinema-guess:latest
docker run -d --name cinema-guess -p 8080:80 <your-dockerhub-username>/cinema-guess:latest
```

### GitHub Clone

```bash
git clone https://github.com/<your-username>/cinema-guess.git
cd cinema-guess/movies-game-updated
```

---

## 📸 Project Screenshots

> Add screenshots of the Home, Gameplay, Leaderboard, Settings, and Win
> screens here once available, e.g.:
>
> ```markdown
> ![Home Screen](docs/screenshots/home.png)
> ![Gameplay](docs/screenshots/gameplay.png)
> ![Leaderboard](docs/screenshots/leaderboard.png)
> ![Win Screen](docs/screenshots/win.png)
> ```

---

## 🛠️ Troubleshooting

| Issue | Fix |
|---|---|
| Posters look like colored gradient cards, not real photos | Expected — no licensed poster images ship with this project. Drop image files into `assets/images/` using the exact filenames referenced in `js/movies.js`; the game auto-detects and swaps them in. |
| Background looks like a gradient, no photo | Add `assets/images/backgrounds/cinema-wallpaper.jpg` (see `assets/images/backgrounds/README.txt`). |
| No sound | Check the Settings screen — sound effects and music each have their own toggle, plus a master volume slider. Some browsers also block audio until you interact with the page once. |
| `docker build` fails on `COPY` steps | Run the build from inside the `movies-game-updated/` folder — the Dockerfile expects `css/`, `js/`, and `assets/` relative to the build context. |
| Port 8080 already in use | Change the host-side port mapping in `docker-compose.yml` (e.g. `"8081:80"`) or stop whatever else is bound to 8080. |
| Container starts but page won't load | Check `docker logs cinema-guess` for Nginx errors, and confirm your security group / firewall allows inbound traffic on the mapped port. |

---

## 🚀 Future Enhancements

- Online multiplayer / real-time leaderboard (would require a backend)
- More movie packs (Kollywood, Bollywood, Sandalwood editions)
- Achievements & badges
- Daily challenge mode with a shared seed
- PWA support for installable, offline play
- Localized UI (Telugu script toggle)
- Replace synthesized audio with licensed sound design / music track

---

## 📄 License

This project's code is provided as-is for the movies-game-updated game.
Movie titles, character names, and any studio marks referenced in the
dataset belong to their respective rights holders and are used here only
as quiz answers/trivia, not as licensed assets.
