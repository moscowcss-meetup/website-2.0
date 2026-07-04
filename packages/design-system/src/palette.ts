// Слой 1 — примитивы: сырые значения, названы по своей сути. В компонентах
// напрямую не используются — их читают только семантические токены (colors.ts).
export const palette = {
  // Нейтральные
  white: '#FFFFFF',
  black: '#000000',
  ink: '#0B0400', // фирменный тёплый «чёрный»
  gray300: '#C4C4C4',
  gray500: '#9B9B9B',

  // Полупрозрачные из набора — альфа зашита в значение (hex8)
  blackA50: '#00000080',
  blackA30: '#0000004D',
  whiteA75: '#FFFFFFBF',

  // Цветные
  red: '#F05133',
  redDeep: '#CA3035',
  orange: '#F16528',
  yellow: '#F9DC3E',
  green: '#70DC55',
  greenDeep: '#468834',
  sky: '#8ED6FB',
  blue: '#3845CF',
  magenta: '#C75FB8',
  pink: '#FF4E8D',
} as const;
