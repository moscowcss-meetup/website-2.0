// SVG -> Astro component generator ("SVGR for Astro").
// Reads src/svg/*.svg, cleans each with SVGO, and writes one
// src/generated/<PascalName>.astro per icon plus a barrel index.ts.
//
// Deps (install latest): pnpm --filter @moscowcss/icons add -D svgo
import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimize } from 'svgo';
import svgoConfig from '../svgo.config.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const SRC = join(root, 'src/svg');
const OUT = join(root, 'src/generated');

const pascal = (name) =>
  name
    .replace(/\.svg$/, '')
    .split(/[-_\s]+/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');

function parse(svg) {
  const viewBox = (svg.match(/viewBox="([^"]+)"/) || [])[1] ?? '0 0 24 24';
  const inner = (svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/) || [])[1] ?? '';
  return { viewBox, inner: inner.trim() };
}

const template = (viewBox, inner) => `---
interface Props extends astroHTML.JSX.SVGAttributes {
  size?: string | number;
}
const { size, width, height, ...rest } = Astro.props;
---
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="${viewBox}"
  width={width ?? size ?? '1em'}
  height={height ?? size ?? '1em'}
  fill="currentColor"
  aria-hidden="true"
  {...rest}
  set:html={${JSON.stringify(inner)}}
/>
`;

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const files = (await readdir(SRC)).filter((f) => f.endsWith('.svg'));
  const names = [];

  for (const file of files) {
    const raw = await readFile(join(SRC, file), 'utf8');
    const { data } = optimize(raw, { ...svgoConfig, path: file });
    const { viewBox, inner } = parse(data);
    const name = pascal(basename(file));
    await writeFile(join(OUT, `${name}.astro`), template(viewBox, inner));
    names.push(name);
  }

  const barrel = names
    .sort()
    .map((n) => `export { default as ${n} } from './${n}.astro';`)
    .join('\n');
  await writeFile(join(OUT, 'index.ts'), barrel + '\n');

  console.log(`Generated ${names.length} icon component(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
