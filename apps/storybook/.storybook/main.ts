import { readFileSync } from 'node:fs';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import type { StorybookConfig } from '@storybook-astro/framework';

// The framework's client-side transform of a `.astro` file replaces it with a
// stub and preserves only Astro-native `<style>` blocks and child `.astro`
// imports — it drops `.css` / `.css.ts` (vanilla-extract) frontmatter imports.
// Since every component here is styled with a colocated `.css.ts`, those rules
// would never reach the story canvas in `server` renderMode. This plugin runs
// after the marker (enforce: 'post', appended last) and re-adds the stripped CSS
// imports as side-effects on the client stub, so the builder's vanilla-extract
// plugin injects each component's styles. Builder-only: the internal Astro SSR
// server is a separate Vite instance and doesn't receive viteFinal plugins.
function reinjectComponentCssPlugin() {
  const cssImport = /(?:from|import)\s*\(?\s*['"]([^'"]+\.css(?:\.ts)?)['"]/g;

  return {
    name: 'storybook-astro-reinject-component-css',
    enforce: 'post' as const,
    transform(code: string, id: string) {
      if (!id.endsWith('.astro') || !code.includes('isAstroComponentFactory')) {
        return null;
      }

      let source: string;
      try {
        source = readFileSync(id, 'utf-8');
      } catch {
        return null;
      }

      const frontmatter = source.match(/^---([\s\S]*?)---/m)?.[1];
      if (frontmatter === undefined) {
        return null;
      }

      const specifiers = new Set<string>();
      for (const match of frontmatter.matchAll(cssImport)) {
        if (match[1]) {
          specifiers.add(match[1]);
        }
      }
      if (specifiers.size === 0) {
        return null;
      }

      const injected = [...specifiers].map((s) => `import ${JSON.stringify(s)};`).join('\n');
      return { code: `${injected}\n${code}`, map: null };
    },
  };
}

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook-astro/framework',
    // 'server', not the 'static' default: static prerenders stories at build
    // time and evaluates vanilla-extract `.css.ts` untransformed under Vite 8 /
    // Rolldown (throws). See docs/setup-status-and-open-questions.md.
    options: { renderMode: 'server' },
  },
  async viteFinal(cfg) {
    cfg.plugins ??= [];
    cfg.plugins.push(vanillaExtractPlugin(), reinjectComponentCssPlugin());
    return cfg;
  },
};

export default config;
