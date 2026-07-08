import { style } from '@vanilla-extract/css';
import { vars, media } from '@moscowcss/design-system';

export const root = style({
  position: vars.position.sticky,
  top: vars.inset.zero,
  zIndex: vars.zIndex.navBar,
  display: vars.display.flex,
  alignItems: vars.alignItems.center,
  justifyContent: vars.justifyContent.spaceBetween,
  gap: vars.spacing.m,
  boxSizing: 'border-box',
  width: '100%',
  paddingBlock: vars.padding.s,
  paddingInline: vars.padding.xxl,
  background: vars.color.background,
  borderBottom: `${vars.border.width.thin} ${vars.border.style.solid} ${vars.color.divider}`,

  '@media': {
    [media.mobile]: {
      justifyContent: vars.justifyContent.spaceBetween,
      gap: 0,
      paddingBlock: vars.padding.m,
      paddingInline: vars.padding.l,
      borderBottom: `${vars.border.width.thin} ${vars.border.style.solid} ${vars.color.divider}`,
    },
  },
});

export const burger = style({
  display: vars.display.none,
  '@media': {
    [media.mobile]: {
      display: vars.display.block,
    },
  },
});

export const links = style({
  display: vars.display.flex,
  alignItems: vars.alignItems.center,
  gap: vars.spacing.xxl,
  margin: '0 auto',
  padding: 0,
  listStyle: 'none',
  '@media': {
    [media.mobile]: {
      display: vars.display.none,
    },
  },
});

export const link = style({
  color: vars.color.text,
  font: vars.font.shorthand.subtitle,
  letterSpacing: vars.font.letterSpacing.registration,
  textDecoration: 'none',
  textTransform: 'uppercase',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus-visible': {
      outline: `${vars.border.width.thin} ${vars.border.style.solid} ${vars.color.focus}`,
      outlineOffset: vars.spacing.xs,
    },
  },
});

export const overlay = style({
  position: vars.position.fixed,
  inset: vars.inset.zero,
  zIndex: vars.zIndex.navOverlay,
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  alignItems: vars.alignItems.stretch,
  paddingBlock: vars.padding.s,
  paddingInline: vars.padding['4xl'],
  background: vars.color.background,
  selectors: {
    '&[hidden]': {
      display: vars.display.none,
    },
  },
});

export const overlayClose = style({
  position: vars.position.absolute,
  top: vars.padding.m,
  left: vars.padding.l,
  boxSizing: 'border-box',
  display: vars.display.inlineFlex,
  alignItems: vars.alignItems.center,
  justifyContent: vars.justifyContent.center,
  width: vars.size.tgLinkButton,
  height: vars.size.tgLinkButton,
  padding: 0,
  border: `${vars.border.width.medium} ${vars.border.style.solid} ${vars.color.tgBorder}`,
  borderRadius: 0,
  background: vars.color.background,
  color: vars.color.tgBorder,
  cursor: 'pointer',
  selectors: {
    '&:focus-visible': {
      outline: `${vars.border.width.medium} ${vars.border.style.solid} ${vars.color.focus}`,
      outlineOffset: vars.spacing.xs,
    },
  },
  '@media': {
    [media.mobile]: {
      width: vars.size.tgLinkButtonCompact,
      height: vars.size.tgLinkButtonCompact,
    },
  },
});

export const overlayCloseIcon = style({
  width: vars.size.burgerIcon,
  height: 'auto',
  flexShrink: 0,
  '@media': {
    [media.mobile]: {
      width: vars.size.burgerIconCompact,
    },
  },
});

export const overlayLinks = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  alignItems: vars.alignItems.stretch,
  gap: vars.spacing.l,
  margin: 0,
  padding: 0,
  listStyle: 'none',
  '@media': {
    [media.mobile]: {
      marginTop: `calc(${vars.size.tgLinkButtonCompact} + ${vars.spacing.l})`,
      paddingInline: vars.padding['4xl'],
    },
  },
});

export const overlayLink = style([
  link,
  {
    display: vars.display.block,
    paddingBlock: vars.padding.m,
    paddingInline: vars.padding.s,
  },
]);
