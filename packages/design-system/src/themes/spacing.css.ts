import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { media } from '../breakpoints';
import { vars } from '../contract';
import { spacing } from '../spacing';

// Отступы, промежутки и радиусы от темы не зависят — задаём один раз на :root.
createGlobalTheme(':root', vars.padding, spacing.values.padding);
createGlobalTheme(':root', vars.spacing, spacing.values.spacing);
createGlobalTheme(':root', vars.radius, spacing.values.radius);

// Адаптив: на широких экранах увеличиваем средние/крупные ступени. Меняем ТОЛЬКО
// нужные vars — компоненты, ссылающиеся на них, подхватывают новые значения сами.
// Мелкие ступени (xs/s/xl) держим постоянными.
const pd = vars.padding;
const sp = vars.spacing;
globalStyle(':root', {
  '@media': {
    [media.desktop]: {
      vars: {
        [pd.m]: '16px',
        [pd.l]: '24px',
        [pd.xxl]: '32px',
        [sp.m]: '16px',
        [sp.l]: '24px',
        [sp.xxl]: '32px',
      },
    },
    [media.desktopLarge]: {
      vars: { [pd.xxl]: '40px', [sp.xxl]: '40px' },
    },
  },
});
