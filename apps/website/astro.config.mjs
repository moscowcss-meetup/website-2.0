import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// Прод: https://css.moscow/ (custom domain на GitHub Pages).
export default defineConfig({
  site: 'https://css.moscow',
  base: '/',
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
