// Толщина и стиль рамки — пространственные токены, от темы не зависят.
const contract = {
  border: {
    width: {
      thin: null,
      medium: null,
      thick: null,
    },
    style: {
      solid: null,
      dashed: null,
    },
  },
} as const;

const values = {
  border: {
    width: {
      thin: '1px',
      medium: '2px',
      thick: '4px',
    },
    style: {
      solid: 'solid',
      dashed: 'dashed',
    },
  },
};

export const border = { contract, values };