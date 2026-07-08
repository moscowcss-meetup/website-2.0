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
    cardWidthMobile: null,
    cardWidthLaptop: null,
    cardPaddingBlock: null,
    cardPaddingInline: null,
    cardSliderArrow: null,
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
    tgLinkButton: '3.75rem', // 60px
    tgLinkButtonCompact: '2.0625rem', // 33px
    tgLinkButtonIcon: '2.4375rem', // 39px
    tgLinkButtonIconCompact: '1.375rem', // 22px
    burgerIcon: '1.5rem', // 24px
    burgerIconCompact: '0.875rem', // 14px
    cardWidthMobile: '19.0625rem', // 305px
    cardWidthLaptop: '26.5625rem', // 425px
    cardPaddingBlock: '2.5rem', // 40px
    cardPaddingInline: '1.75rem', // 28px
    cardSliderArrow: '3.9375rem', // 63px — ширина arrow-right в навигации слайдера
  },
};

export const spacing = { contract, values };
