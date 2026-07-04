// SVGO config for icon cleanup. Assumes MONOCHROME icons: colours are
// normalized to `currentColor` and fixed width/height stripped so the
// generated component controls size. For multi-colour icons, drop
// `convertColors.currentColor` and `removeDimensions`.
// Note: SVGO 4 keeps viewBox by default, so we don't touch removeViewBox.
export default {
  multipass: true,
  plugins: [
    'preset-default',
    'removeDimensions',
    { name: 'convertColors', params: { currentColor: true } },
    { name: 'removeAttrs', params: { attrs: '(stroke|fill):((?!currentColor).)*' } },
  ],
};
