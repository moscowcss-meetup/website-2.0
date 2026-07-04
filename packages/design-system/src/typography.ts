import { fontFamily as ff, fontWeight as fw } from './fonts';

// Шорткаты ссылаются на переменные размера как `var(--font-size-*)` строкой, а не
// через `vars`, — иначе была бы циклическая зависимость с contract.ts. Имя
// переменной задаёт маппер контракта (path.join('-'), §5). Благодаря этой ссылке
// шорткат сам подхватывает новый размер, когда его меняют на брейкпоинте
// (адаптив задаётся в themes/typography.css.ts).
const size = (k: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'ui') => `var(--font-size-${k})`;

const contract = {
  font: {
    size: { h1: null, h2: null, h3: null, body: null, caption: null, ui: null },
    shorthand: { h1: null, h2: null, h3: null, body: null, caption: null, ui: null },
    letterSpacing: { heading: null, body: null, ui: null },
  },
} as const;

// Базовые (mobile-first) значения. От темы не зависят (тема — только цвет).
// Заголовки — display (Montserrat), текст — sans (Inter), UI — mono (JetBrains Mono).
const values = {
  font: {
    size: {
      h1: '2rem',
      h2: '1.5rem',
      h3: '1.25rem',
      body: '1rem',
      caption: '0.875rem',
      ui: '0.875rem',
    },
    shorthand: {
      h1: `${fw.display.bold} ${size('h1')}/1.1 ${ff.display}`,
      h2: `${fw.display.semiBold} ${size('h2')}/1.2 ${ff.display}`,
      h3: `${fw.display.semiBold} ${size('h3')}/1.3 ${ff.display}`,
      body: `${fw.sans.medium} ${size('body')}/1.6 ${ff.sans}`,
      caption: `${fw.sans.medium} ${size('caption')}/1.5 ${ff.sans}`,
      ui: `${fw.mono.medium} ${size('ui')}/1 ${ff.mono}`,
    },
    letterSpacing: { heading: '-0.02em', body: '0', ui: '0' },
  },
};

export const typography = { contract, values };
