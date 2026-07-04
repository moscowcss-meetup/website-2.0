// Отступы и радиусы — пространственные токены темы.
const contract = {
  padding: {
    small: null,
    medium: null,
    large: null,
  },
  radius: {
    small: null,
    medium: null,
  },
} as const;

const light = {
  padding: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  radius: {
    small: '4px',
    medium: '8px',
  },
};

const dark: typeof light = {
  padding: { ...light.padding },
  radius: { ...light.radius },
};

export const spacing = { contract, light, dark };
