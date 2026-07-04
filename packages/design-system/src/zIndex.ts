// Слои внутри изолированного stacking context — от темы не зависят.
const contract = {
  zIndex: {
    ring: null,
    mask: null,
    content: null,
  },
} as const;

const values = {
  zIndex: {
    ring: '1',
    mask: '2',
    content: '3',
  },
};

export const zIndex = { contract, values };
