// Брейкпоинты — константы времени сборки, а не CSS-переменные: медиа-запросы
// не читают var(). Используй их в @media внутри .css.ts.
export const breakpoints = {
  md: '768px',
  lg: '1280px',
} as const;
