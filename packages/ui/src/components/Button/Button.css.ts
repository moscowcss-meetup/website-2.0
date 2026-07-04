import { style } from '@vanilla-extract/css';
import { vars, media } from '@moscowcss/design-system';

export const button = style({
  padding: vars.padding.medium,
  borderRadius: vars.radius.medium,
  background: vars.color.success,
  color: vars.color.background,
  font: vars.font.body,
  border: 'none',
  cursor: 'pointer',
  '@media': {
    [media.tablet]: {
      padding: vars.padding.large,
    },
  },
});
