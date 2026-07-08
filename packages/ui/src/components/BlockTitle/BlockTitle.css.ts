import { style } from '@vanilla-extract/css';
import { media, vars } from '@moscowcss/design-system';

export const blockTitle = style({
  padding: `${vars.padding.xl} ${vars.padding.xxxl} ${vars.padding.l} ${vars.padding.xxxl}`,
  color: vars.color.text,
  font: vars.font.shorthand.blockTitle,
  border: `${vars.border.width.thick} ${vars.border.style.dashed} ${vars.color.border}`,
  width: 'fit-content', // куда логически добавить эту переменную?
  '@media': {
    [media.mobile]: {
      font: vars.font.shorthand.subtitle,
    }
  }
});

export const blockTitleWhite = style({
  color: vars.color.white,
  border: `${vars.border.width.thick} ${vars.border.style.dashed} ${vars.color.white}`,

});
