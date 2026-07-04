import { fontFamily as ff, fontWeight as fw } from './fonts';

// Шорткаты ссылаются на переменные размера как `var(--font-size-*)` строкой, а не
// через `vars`, — иначе была бы циклическая зависимость с contract.ts. Имя
// переменной задаёт маппер контракта (path.join('-'), §5). Благодаря этой ссылке
// шорткат сам подхватывает новый размер, когда его меняют на брейкпоинте
// (адаптив задаётся в themes/typography.css.ts).
// websiteTitle — крупный заголовок сайта: семантически h2, но с отдельным
// дизайном, поэтому у него собственный размер и шорткат, а не роль h2.
const size = (
  k: 'blockTitle' | 'websiteTitle' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'ui',
) => `var(--font-size-${k})`;

const contract = {
  font: {
    size: { blockTitle: null, websiteTitle: null, h1: null, h2: null, h3: null, h4: null, body: null, caption: null, ui: null },
    shorthand: { blockTitle: null, websiteTitle: null, h1: null, h2: null, h3: null, h4: null, body: null, caption: null, ui: null },
    letterSpacing: { heading: null, body: null, ui: null },
  },
} as const;

// Базовые (mobile-first) значения. От темы не зависят (тема — только цвет).
// Заголовки — display (Montserrat), текст — sans (Inter), UI — mono (JetBrains Mono).
const values = {
  font: {
    size: {
      blockTitle: '2.75rem',
      websiteTitle: '2.5rem',
      h1: '2rem',
      h2: '1.5rem',
      h3: '1.25rem',
      h4: '1.125rem',
      body: '1rem',
      caption: '0.875rem',
      ui: '0.875rem',
    },
    shorthand: {
       // что за индекс /1.1
      blockTitle: `${fw.display.regular} ${size('blockTitle')}/1.1 ${ff.display}`,
      websiteTitle: `${fw.display.bold} ${size('websiteTitle')}/1.05 ${ff.display}`,
      h1: `${fw.display.bold} ${size('h1')}/1.1 ${ff.display}`,
      h2: `${fw.display.semiBold} ${size('h2')}/1.2 ${ff.display}`,
      h3: `${fw.display.semiBold} ${size('h3')}/1.3 ${ff.display}`,
      h4: `${fw.display.semiBold} ${size('h4')}/1.4 ${ff.display}`,
      body: `${fw.sans.medium} ${size('body')}/1.6 ${ff.sans}`,
      caption: `${fw.sans.medium} ${size('caption')}/1.5 ${ff.sans}`,
      ui: `${fw.mono.medium} ${size('ui')}/1 ${ff.mono}`,
    },
    letterSpacing: { heading: '-0.02em', body: '0', ui: '0' },
  },
};

export const typography = { contract, values };