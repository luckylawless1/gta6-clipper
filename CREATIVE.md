# Creative — "A Customer Just Walked In" (GTA 6 gator clip)

Entry for make.fun bounty **gta6-clipper-01** ("Clip GTA 6 for the most YouTube views"),
account @luckylawless. Researched, decided, cut and rendered in this session.

## 1. Views-model research (done first, in-session)

What the biggest GTA VI / GTA 6 clips of launch week have in common:

- **One single moment, never a montage.** The runaway clip of launch week is a lone
  animal-chaos moment: protesters free a bear on a highway and it mauls them — one
  upload passed **28M views**, press reported 8M+ on the original. An orca tossing
  the activist who "rescued" it went the same way. Instant karma + an animal +
  a payoff inside five seconds.
- **First-look / stunt titles in plain words.** "World's First Stolen Plane in
  GTA 6" (2.7M in a day), "iShowSpeed's First Look At GTA 6" (2.6M), "Intercepted
  by Fighter Jets in GTA 6" (~1M). The title just names the moment, sometimes
  with #GTA6 / #Shorts appended.
- **Short and loopable.** The big standalone Shorts run ~0:30–0:51, open *on* the
  moment with no intro, and carry **burned-in captions** (the 28M bear upload has
  full subtitles burned in) so the joke lands with the sound off.
- **This bounty's own board agrees.** ~40 minutes after the 08:00 WIB opening the
  board already ranked 21 videos (51 submissions); the leaders are all single
  named action moments: "GTA 6 IS FINALLY OUT — This Chase Is INSANE!", "He Jumped
  the Train Tracks in GTA 6", "Lucia and Jason jump out of a plane", "A Dog on a
  Jet Ski SAVED Me in GTA 6!". Chases, stunts and animals — one moment each.
  (The board's view counts are withheld in the API, so ranks are the signal.)

Model chosen: **one animal-chaos moment, opened on frame one, replayed in
slow motion with deadpan burned-in captions, ending that loops into the start.**

## 2. The moment

**An alligator walks through the front door of a convenience store** — from
Rockstar Games' official *Grand Theft Auto VI Trailer 1* (YouTube id
`QdBZY2fkU-0`, downloaded in this session at 3840×2160), the CCTV "FRONT DOOR"
shot at **47.15s–48.45s**. The gator pushes in past the door mat while shoppers
outside freeze and the clerk stares.

Why this one:

- It is the trailer-footage twin of the bear clip that is dominating launch
  week: an animal doing something absurd in an everyday place, readable with
  zero context and zero sound.
- It is a *real Rockstar moment*, not a fan render — the CCTV timestamp overlay
  ("FRONT DOOR 09:58:47") makes it feel like leaked security footage, the most
  shared format in the game's social clips.
- It loops perfectly: the gator ends mid-stride through the door, so the last
  replay can cut straight back to the first frame of it entering.

Source footage acquired in-session with yt-dlp from the official Rockstar Games
uploads (Trailer 1 `QdBZY2fkU-0`, Trailer 2 `VQRLujxTm3c`, Launch Trailer
`rz1B4B2yBZY`); Trailer 1 held the moment. Footage lives outside this repo
(`../footage/` in the build workspace) — the repo ships the program, not the film.

## 3. The cut (21.0s, 1080×1920, 30fps, H.264 + AAC)

All ffmpeg commands were run in this session (see transcripts); the render is
`clip-final.mp4` in the build workspace.

| Time | Picture | On-screen text |
| --- | --- | --- |
| 0.0–1.3 | The moment at full speed, 9:16 crop tracked on the door | **A CUSTOMER JUST / WALKED IN** · "only in Leonida" |
| 1.3–6.1 | Same moment at 0.25× (motion-interpolated), tighter crop | captions: "no leash." → "no wallet." → "just vibes." |
| 6.1–8.7 | Tail of the moment at 0.5×, then a 1.3s freeze on the gator mid-door | **ONLY IN LEONIDA.** |
| 8.7–11.3 | Full CCTV frame on a blurred plate | **MY AI AGENT / CUT THIS CLIP** |
| 11.3–17.2 | Same plate | **MAKE CLIPS LIKE THIS WITH AI / AND EARN MONEY ON / MAKE.FUN** |
| 17.2–19.8 | Same plate | **ENTER THE BOUNTY** · `make.fun/bounty/` `gta6-clipper-01` |
| 19.8–21.0 | The opening 1.3s again, identical frames | hook text again — seamless loop |

Audio: the trailer's own audio under the same window, loudness-normalised
(−14 LUFS) with a short fade at the end. Text sits inside the vertical safe
area (clear of YouTube's bottom and right-side buttons). The pitch is on
screen for ~11 seconds total, in three readable beats.

## 4. Upload pack (for the channel owner)

- **File:** `clip-final.mp4` (1080×1920, 21.0s — a Short)
- **Title:** `A Gator Just Walked Into a Store in GTA 6 🐊 #GTA6 #Shorts`
- **Description:** see `UPLOAD.md` in this repo — it carries, word for word,
  the bounty's required line and play code `makefun-cartoon-catfish-heron`.
- **Visibility:** Public. Keep public until the results are out.
- After upload, put the video's address in `VIDEO.json` (currently the kit
  placeholder) and re-submit this repo.
