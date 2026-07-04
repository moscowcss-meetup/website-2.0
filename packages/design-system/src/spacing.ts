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

// От темы не зависят — задаются один раз (тема отвечает только за цвет).
const values = {
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

export const spacing = { contract, values };
