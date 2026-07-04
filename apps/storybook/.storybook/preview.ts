import '@moscowcss/fonts';
// Один раз подключаем слой дизайн-токенов, чтобы у каждой истории были
// :root CSS-переменные, которые используют стили vanilla-extract компонентов.
import '@moscowcss/design-system';
// Глобальный отступ канваса — чтобы выступающие детали историй не обрезались.
import './preview.css';

const preview = {
  // Автодок для каждого компонента без ручного тега на каждой истории.
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#ffffff' },
        dark: { name: 'Dark', value: '#0f172a' },
      },
    },
  },
};

export default preview;
