// Пространственный масштаб (t-shirt) — один набор ступеней для двух семантических
// групп: `padding` (внутренние отступы) и `spacing` (промежутки между элементами,
// gap/margin). Значения общие, но группы независимы — адаптив можно задавать
// каждой отдельно (см. themes/spacing.css.ts). Радиусы — отдельная ось.
const scale = {
  xs: '4px',
  s: '8px',
  m: '12px',
  l: '16px',
  xl: '20px',
  xxl: '24px',
  xxxl: '32px',
} as const;

const scaleKeys = () =>
  Object.fromEntries(Object.keys(scale).map((k) => [k, null])) as Record<keyof typeof scale, null>;

const contract = {
  padding: scaleKeys(),
  spacing: scaleKeys(),
  radius: {
    small: null,
    medium: null,
  },
} as const;

// От темы не зависят — задаются один раз (тема отвечает только за цвет).
const values = {
  padding: { ...scale },
  spacing: { ...scale },
  radius: {
    small: '4px',
    medium: '8px',
  },
};

export const spacing = { contract, values };
