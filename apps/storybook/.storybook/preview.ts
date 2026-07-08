import type { Decorator } from 'storybook/internal/csf';
import '@moscowcss/fonts';
// Один раз подключаем слой дизайн-токенов, чтобы у каждой истории были
// :root CSS-переменные, которые используют стили vanilla-extract компонентов.
import '@moscowcss/design-system';
// Глобальный отступ канваса — чтобы выступающие детали историй не обрезались.
import './preview.css';
import { setupNavBar } from '../../../packages/ui/src/components/NavBar/NavBar.client';

// Astro-компонентные <script> в renderMode 'server' не попадают в канвас — инициализируем вручную.
const initNavBars: Decorator = (Story, { canvasElement }) => {
  const tryInit = () => {
    const navs = canvasElement.querySelectorAll<HTMLElement>('[data-navbar]');
    if (navs.length === 0) return false;
    navs.forEach(setupNavBar);
    return true;
  };

  const observer = new MutationObserver(() => {
    if (tryInit()) observer.disconnect();
  });

  observer.observe(canvasElement, { childList: true, subtree: true });
  tryInit();

  return Story();
};

const preview = {
  decorators: [initNavBars],
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
