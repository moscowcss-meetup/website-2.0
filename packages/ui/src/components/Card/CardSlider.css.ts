import { globalStyle, style } from '@vanilla-extract/css';
import { media, vars } from '@moscowcss/design-system';

export const root = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.l,
  width: '100%',
});

export const nav = style({
  display: vars.display.flex,
  justifyContent: vars.justifyContent.flexStart,
  gap: vars.spacing.m,
});

export const navButton = style({
  display: vars.display.inlineFlex,
  alignItems: vars.alignItems.center,
  justifyContent: vars.justifyContent.center,
  padding: 0,
  border: 'none',
  background: 'transparent',
  color: vars.color.text,
  cursor: 'pointer',
  selectors: {
    '&:disabled, &.swiper-button-disabled': {
      opacity: '0.35',
      cursor: 'not-allowed',
    },
    '&:focus-visible': {
      outline: `${vars.border.width.medium} ${vars.border.style.solid} ${vars.color.focus}`,
      outlineOffset: vars.spacing.xs,
    },
  },
});

export const navButtonPrev = style({
  transform: 'scaleX(-1)',
});

export const navButtonIcon = style({
  width: vars.size.cardSliderArrow,
  height: 'auto',
  flexShrink: 0,
});

export const swiper = style({
  width: '100%',
  overflow: 'hidden',
});

globalStyle(`${swiper} .swiper-wrapper`, {
  display: 'flex',
  alignItems: vars.alignItems.stretch,
});

export const slide = style({
  boxSizing: 'border-box',
  display: vars.display.flex,
  flexShrink: 0,
  width: '100%',
  height: 'auto',
  '@media': {
    [media.laptop]: {
      width: vars.size.cardWidthLaptop,
    },
  },
});

globalStyle(`${slide} > *`, {
  flex: '1 1 auto',
  width: '100%',
  maxWidth: '100%',
  minWidth: 0,
  height: '100%',
});
