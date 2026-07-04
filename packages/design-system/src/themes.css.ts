import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { vars } from './contract';
import { media } from './breakpoints';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

// Тема отвечает ТОЛЬКО за цвет. Отступы, радиусы и типографика от темы не
// зависят — задаём их один раз на :root.
createGlobalTheme(':root', vars.padding, spacing.values.padding);
createGlobalTheme(':root', vars.radius, spacing.values.radius);
createGlobalTheme(':root', vars.font, typography.values.font);

// Цвет: светлая — база на :root; тёмная включается по системной теме и по
// data-theme="dark", а data-theme="light" принудительно возвращает светлую.
type ColorKey = keyof typeof vars.color;
const colorVars = (values: Record<ColorKey, string>): Record<string, string> =>
  Object.fromEntries((Object.keys(values) as ColorKey[]).map((k) => [vars.color[k], values[k]]));

createGlobalTheme(':root', vars.color, colors.light.color);
globalStyle(':root', {
  '@media': { '(prefers-color-scheme: dark)': { vars: colorVars(colors.dark.color) } },
});
globalStyle(':root[data-theme="dark"]', { vars: colorVars(colors.dark.color) });
globalStyle(':root[data-theme="light"]', { vars: colorVars(colors.light.color) });

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
