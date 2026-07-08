import { breakpoints } from '@moscowcss/design-system';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const INITIALIZED = 'data-card-slider-initialized';

function cssVarToPx(name: string): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (!raw) return 0;
  if (raw.endsWith('rem')) {
    const rootFont = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return parseFloat(raw) * rootFont;
  }
  if (raw.endsWith('px')) return parseFloat(raw);
  return parseFloat(raw) || 0;
}

function remToPx(rem: string): number {
  const rootFont = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return parseFloat(rem) * rootFont;
}

function laptopMinWidthPx(): number {
  return Math.round(remToPx(breakpoints.laptop));
}

export function setupCardSlider(root: HTMLElement) {
  if (root.hasAttribute(INITIALIZED)) return;
  root.setAttribute(INITIALIZED, '');

  const container = root.querySelector<HTMLElement>('[data-card-slider-container]');
  const prev = root.querySelector<HTMLButtonElement>('[data-card-slider-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-card-slider-next]');
  if (!container || !prev || !next) return;

  const spaceBetween = cssVarToPx('--spacing-l');
  const laptop = laptopMinWidthPx();

  const swiper = new Swiper(container, {
    modules: [Navigation],
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween,
    breakpoints: {
      [laptop]: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween,
      },
    },
    navigation: {
      prevEl: prev,
      nextEl: next,
      disabledClass: 'swiper-button-disabled',
    },
    watchOverflow: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    resizeObserver: true,
  });

  const refresh = () => {
    swiper.update();
  };

  swiper.on('init resize slideChange transitionEnd', refresh);
  refresh();
}
