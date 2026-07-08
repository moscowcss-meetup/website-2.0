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
  '4xl': '80px',
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
  size: {
    tgLinkButton: null,
    tgLinkButtonCompact: null,
    tgLinkButtonIcon: null,
    tgLinkButtonIconCompact: null,
    burgerIcon: null,
    burgerIconCompact: null,
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
  size: {
    tgLinkButton: '3.75rem',
    tgLinkButtonCompact: '2.0625rem',
    tgLinkButtonIcon: '2.4375rem',
    tgLinkButtonIconCompact: '1.375rem',
    burgerIcon: '1.5rem',
    burgerIconCompact: '0.875rem',
  },
};

export const spacing = { contract, values };
