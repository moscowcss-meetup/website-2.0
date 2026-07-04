// Брейкпоинты — константы времени сборки, а не CSS-переменные: медиа-запросы
// не читают var(). Используй их в @media внутри .css.ts.
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;
