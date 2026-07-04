import { palette } from './palette';

// Семантический слой цвета: токены названы по смыслу, значения берутся из палитры.
// Компоненты обращаются только к `vars.color.*`, а не к палитре напрямую.
const contract = {
  color: {
    background: null,
    text: null,
    success: null,
    danger: null,
    info: null,
    warning: null,
    // Акцентная кнопка (CTA): подложка, текст на ней и цвет кольца фокуса.
    action: null,
    onAction: null,
    actionHover: null,
    focus: null,
    border: null, // рамка
    tgBorder: null, // граница кнопки с сслыкой на телеграм
  },
} as const;

const light = {
  color: {
    background: palette.white,
    text: palette.ink,
    success: palette.green,
    danger: palette.red,
    info: palette.blue,
    warning: palette.yellow,
    action: palette.ink,
    onAction: palette.white,
    actionHover: palette.gray700,
    focus: palette.redDeep,
    border: palette.ink,
    tgBorder: palette.blue300,
  },
};

// Пока dark повторяет light — при вводе тёмной темы меняем ТОЛЬКО значения здесь.
const dark: typeof light = {
  color: { ...light.color },
};

export const colors = { contract, light, dark };
