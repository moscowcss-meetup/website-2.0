import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const src = await readFile(join(root, 'packages/icons/src/svg/menucards.svg'), 'utf8');
const lines = src.split('\n');
const waveLines = [5, 9, 14, 18].map((n) => lines[n - 1].trim());
const svg = [
  '<svg viewBox="0 0 1285 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">',
  ...waveLines.map((line) => line.replace('fill="#C4C4C4"', 'fill="currentColor"')),
  '</svg>',
].join('\n');

const out = join(root, 'apps/website/public/assets/partner-cards-wave.svg');
await mkdir(dirname(out), { recursive: true });
await writeFile(out, svg);

console.log(`Extracted ${waveLines.length} wave path(s) to ${out}`);
