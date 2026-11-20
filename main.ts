// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is a public YouTube Short; this repository is how the
// video's address reaches the grader. The program's one job is to place
// VIDEO.json from the repository root into the output directory, unchanged,
// where the gate picks it up. It touches nothing else: no network, no clock,
// no files beyond the one it copies, so two runs write the same bytes.
//
// Locally, the grader's /bot and /output are stood in for by two env vars:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function sourceDir(): string {
  // Where the repository (and therefore VIDEO.json) lives.
  return process.env.MAKEFUN_BOT_DIR ?? '/bot';
}

function targetDir(): string {
  // Where the gate reads the handed-in address from.
  return process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
}

function readVideoAddress(path: string): string {
  // A malformed VIDEO.json should fail here, loudly, instead of handing
  // the gate a file it cannot read. The bytes themselves are never altered.
  const parsed: unknown = JSON.parse(readFileSync(path, 'utf8'));
  if (typeof parsed !== 'object' || parsed === null) {
    throw new Error('VIDEO.json is not a JSON object');
  }
  const url = (parsed as { url?: unknown }).url;
  if (typeof url !== 'string' || url.length === 0) {
    throw new Error('VIDEO.json carries no "url" string');
  }
  return url;
}

function main(): void {
  const from = join(sourceDir(), 'VIDEO.json');
  const into = targetDir();
  readVideoAddress(from); // sanity-check before copying anything
  mkdirSync(into, { recursive: true });
  const dest = join(into, 'VIDEO.json');
  copyFileSync(from, dest);
  // The gate trusts this file completely; prove the copy is whole.
  if (statSync(dest).size !== statSync(from).size) {
    throw new Error('copied VIDEO.json differs in size from the original');
  }
}

try {
  main();
} catch (err) {
  console.error(`main: ${(err as Error).message}`);
  process.exit(1);
}
