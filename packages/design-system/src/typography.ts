// Токены шрифтов (font-shorthand) — это именно ТОКЕНЫ, а не подключение шрифтов.
// Сами @font-face и файлы живут в пакете @moscowcss/fonts; имена семейств здесь
// обязаны совпадать с font-family оттуда.
const contract = {
  font: {
    body: null,
    caption: null,
    heading: null,
  },
} as const;

const light = {
  font: {
    body: '400 16px/1.5 "Inter", system-ui, sans-serif',
    caption: '400 12px/1.4 "Inter", system-ui, sans-serif',
    heading: '700 24px/1.2 "Inter", system-ui, sans-serif',
  },
};

const dark: typeof light = {
  font: { ...light.font },
};

export const typography = { contract, light, dark };
