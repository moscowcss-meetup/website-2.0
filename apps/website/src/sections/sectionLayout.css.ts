import { style } from '@vanilla-extract/css';
import { breakpoints, vars, media } from '@moscowcss/design-system';

export const sectionPadding = style({
  paddingBlock: vars.padding['4xl'],
  paddingInline: vars.padding.xxl,
  '@media': {
    [media.mobile]: {
      paddingInline: vars.padding.l,
    },
  },
});

export const inner = style({
  position: vars.position.relative,
  zIndex: 1,
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.xxl,
  width: '100%',
  maxWidth: breakpoints.desktop,
  marginInline: 'auto',
});
