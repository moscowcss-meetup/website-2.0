import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { media } from '../breakpoints';
import { vars } from '../contract';
import { typography } from '../typography';

// Шрифты от темы не зависят — базовые (mobile-first) значения задаём один раз.
createGlobalTheme(':root', vars.font, typography.values.font);

// Адаптивная типографика: на брейкпоинтах меняем ТОЛЬКО переменные размеров.
// Шорткаты (vars.font.shorthand.*) ссылаются на них, поэтому обновляются сами.
const { size } = vars.font;
globalStyle(':root', {
  '@media': {
    [media.tablet]: {
      vars: { [size.h1]: '2.25rem', [size.h2]: '1.75rem' },
    },
    [media.laptop]: {
      vars: { [size.h1]: '2.75rem', [size.h2]: '2rem', [size.h3]: '1.5rem' },
    },
    [media.desktop]: {
      vars: {
        [size.h1]: '3.25rem',
        [size.h2]: '2.25rem',
        [size.h3]: '1.625rem',
        [size.body]: '1.125rem',
      },
    },
  },
});
