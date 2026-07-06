import NavBar from '@moscowcss/ui/components/NavBar';
import { setupNavBar } from '../../../packages/ui/src/components/NavBar/NavBar.client';

export default {
  title: 'Components/NavBar',
  component: NavBar,
};

export const Default = {
  args: {
    telegramHref: 'https://t.me/moscowcss',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    canvasElement.querySelectorAll<HTMLElement>('[data-navbar]').forEach(setupNavBar);
  },
};
