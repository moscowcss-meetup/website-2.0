import { style } from '@vanilla-extract/css';
import { vars, media } from '@moscowcss/design-system';

export const section = style({
  position: vars.position.relative,
  paddingBlock: vars.padding['4xl'],
  paddingInline: vars.padding.xxl,
  color: vars.color.text,
  background: vars.color.blackBg,
  overflow: 'hidden',
  selectors: {
    '&::before': {
      content: '""',
      position: vars.position.absolute,
      inset: vars.inset.zero,
      opacity: 0.08,
      backgroundImage: `radial-gradient(circle at 20% 30%, ${vars.color.divider} 0, transparent 45%),
        radial-gradient(circle at 80% 70%, ${vars.color.divider} 0, transparent 40%)`,
      pointerEvents: 'none',
    },
  },
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
  maxWidth: '80rem',
  marginInline: 'auto',
});

export const header = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.l,
  '@media': {
    [media.laptop]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: vars.justifyContent.spaceBetween,
      gap: vars.spacing.xxl,
    },
  },
});
