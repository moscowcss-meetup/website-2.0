// Фиксированные пропорции из макета (1280px artboard) — не CSS-переменные.
export const dimensions = {
  mapFrame: {
    aspectRatio: '1280 / 583',
  },
  mediaTile: {
    aspectRatio: '413.3333435058594 / 309.1412658691406',
  },
  heroLogo: {
    width: '16.375rem',
    height: '15.6875rem',
  },
  heroCtaButton: {
    width: '32.625rem',
    height: '8.8125rem',
  },
  partnerQrCode: {
    width: '12.9375rem',
    height: '12.75rem',
  },
  partnerZvukLogo: {
    width: '51.1875rem',
    height: '14.125rem',
    offsetTop: '10.146875rem',
  },
} as const;
