import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// Storybook (server renderMode) wires two separate Vite instances, each needing
// its own registration path for vanilla-extract:
//   1. the builder Vite auto-merges plugins from `vite.plugins` below;
//   2. the internal Astro SSR render server ignores `vite.plugins` and only
//      picks up Astro *integrations*, so the same plugin is re-exposed as one.
//      Without it, `.css.ts` evaluates untransformed there and vanilla-extract
//      throws "Styles were unable to be assigned to a file" at render time.
// apps/website needs only the vite side (it has no SSR render server).
const vanillaExtractIntegration = {
  name: 'vanilla-extract',
  hooks: {
    'astro:config:setup': ({ updateConfig }) => {
      updateConfig({ vite: { plugins: [vanillaExtractPlugin()] } });
    },
  },
};

export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  integrations: [vanillaExtractIntegration],
});
