[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![make.fun rank](https://make.fun/badge/gta6-clipper-01/luckylawless1/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![make.fun reward](https://make.fun/badge/gta6-clipper-01/luckylawless1/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# A Customer Just Walked In — a GTA 6 clip for make.fun

An entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
(gta6-clipper-01): a 21-second vertical Short cut from Rockstar's official
GTA VI Trailer 1 — the CCTV moment an alligator walks through the front door
of a Leonida convenience store — replayed in slow motion with burned-in
captions, then pitching make.fun on screen: make clips like this with AI and
earn money on make.fun.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The video

`VIDEO.json` at the root names the entry's YouTube address. It currently
holds the kit's placeholder (`https://www.youtube.com/shorts/<id>`): the clip
is rendered and ready (`clip-final.mp4`, see `UPLOAD.md` for the exact title
and description), and the placeholder is replaced with the real address as
soon as the channel owner uploads it. The upload pack — title, the
description carrying the bounty's line word for word and the play code — is
in [`UPLOAD.md`](UPLOAD.md). Why this moment and this cut:
[`CREATIVE.md`](CREATIVE.md).

## The program

`main.ts` (Node 22, standard library only, no network) copies `VIDEO.json`
from the repository root to the output directory, byte for byte, after a
read-only sanity check that the file parses and carries a `url`. Run it the
way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then identical to this directory's `VIDEO.json`.
