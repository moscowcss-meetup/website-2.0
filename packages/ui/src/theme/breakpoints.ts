// Breakpoints are BUILD-TIME constants, not CSS variables:
// media queries cannot read var(). Use these inside `.css.ts` @media blocks.
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;
