// Базовые layout-значения — от темы не зависят.
const contract = {
  display: {
    inlineFlex: null,
  },
  position: {
    relative: null,
    absolute: null,
  },
  alignItems: {
    center: null,
  },
  justifyContent: {
    center: null,
  },
} as const;

const values = {
  display: {
    inlineFlex: 'inline-flex',
  },
  position: {
    relative: 'relative',
    absolute: 'absolute',
  },
  alignItems: {
    center: 'center',
  },
  justifyContent: {
    center: 'center',
  },
};

export const layout = { contract, values };
