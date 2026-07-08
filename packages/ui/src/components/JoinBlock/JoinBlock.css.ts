import { style } from '@vanilla-extract/css';
import { vars } from '@moscowcss/design-system';

export const root = style({
  backgroundColor: vars.color.blackBg,
  paddingTop: vars.size.cardPaddingBlock,
  paddingBottom: vars.size.cardSliderArrow,
  gap: vars.size.cardPaddingBlock,
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
});
export const title = style({
  marginBottom: vars.size.cardPaddingBlock,
});
export const row = style({
  justifyContent: vars.justifyContent.center,
});

export const orgLink = style({
  color: vars.color.info,
  textDecoration: 'underline',
  selectors: {
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus-visible': {
      outline: `${vars.border.width.thin} ${vars.border.style.solid} ${vars.color.focus}`,
      outlineOffset: vars.spacing.xs,
    },
  },
});