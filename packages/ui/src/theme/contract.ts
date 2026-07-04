import { createGlobalThemeContract } from '@vanilla-extract/css';

// Layer 2 — SEMANTIC CONTRACT. The shape of every themeable value.
// `createGlobalThemeContract` (not createThemeContract) so the emitted CSS
// custom properties get readable names: `padding.medium` -> `--padding-medium`,
// `font.caption` -> `--font-caption`. Components consume ONLY `vars`.
export const vars = createGlobalThemeContract(
  {
    color: {
      background: null,
      text: null,
      success: null,
      danger: null,
      info: null,
      warning: null,
    },
    padding: {
      small: null,
      medium: null,
      large: null,
    },
    radius: {
      small: null,
      medium: null,
    },
    font: {
      body: null,
      caption: null,
      heading: null,
    },
  },
  // path -> css variable name (vanilla-extract prepends `--`)
  (_value, path) => path.join('-'),
);
