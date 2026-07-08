import { globalStyle, style } from '@vanilla-extract/css';
import { dimensions, vars, media } from '@moscowcss/design-system';

export const section = style({
  position: vars.position.relative,
  paddingBlock: `${vars.padding['4xl']} ${vars.padding['4xl']}`,
  paddingInline: vars.padding.xxl,
  color: vars.color.text,
  background: vars.color.background,
  overflow: 'hidden',
  selectors: {
    '&::before': {
      content: '""',
      position: vars.position.absolute,
      inset: vars.inset.zero,
      opacity: 0.08,
      backgroundImage: `radial-gradient(circle at 15% 20%, ${vars.color.divider} 0, transparent 40%),
        radial-gradient(circle at 85% 75%, ${vars.color.divider} 0, transparent 35%)`,
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
  gap: vars.spacing['4xl'],
  width: '100%',
  maxWidth: '80rem',
  marginInline: 'auto',
});

export const intro = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.xxl,
  width: '100%',
});

export const introHead = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  alignItems: vars.alignItems.center,
  gap: vars.spacing.l,
  textAlign: 'center',
});

export const star = style({
  display: vars.display.block,
  width: '8rem',
  height: 'auto',
  color: vars.color.focus,
  '@media': {
    [media.desktop]: {
      width: dimensions.heroLogo.width,
      height: dimensions.heroLogo.height,
    },
  },
});

export const title = style({
  margin: 0,
  font: vars.font.shorthand.heroTitle,
  letterSpacing: vars.font.letterSpacing.figmaHeroTitle,
  textTransform: 'uppercase',
  '@media': {
    [media.laptop]: {
      whiteSpace: 'nowrap',
    },
  },
});

export const modes = style({
  display: vars.display.flex,
  flexWrap: 'wrap',
  gap: vars.spacing.s,
  alignItems: vars.alignItems.center,
  justifyContent: 'flex-start',
  width: '100%',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  font: vars.font.shorthand.heroLightLabel,
  letterSpacing: vars.font.letterSpacing.figmaWide,
});

export const modeItem = style({
  display: vars.display.flex,
  gap: vars.spacing.s,
  alignItems: vars.alignItems.center,
  selectors: {
    '& + &::before': {
      content: "'/'",
    },
  },
});

export const footer = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.xxl,
  width: '100%',
  '@media': {
    [media.laptop]: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: vars.justifyContent.spaceBetween,
      gap: vars.spacing.xxl,
    },
  },
});

export const details = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.m,
  alignSelf: 'flex-start',
  width: '100%',
  maxWidth: '100%',
  textAlign: 'left',
});

export const infoLine = style({
  margin: 0,
  font: vars.font.shorthand.heroInfoLine,
  letterSpacing: vars.font.letterSpacing.figmaWide,
});

export const meetupLine = style([
  infoLine,
  {
    textTransform: 'uppercase',
  },
]);

export const passportNote = style([
  infoLine,
  {
    color: vars.color.focus,
  },
]);

export const ctaColumn = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.m,
  alignItems: 'flex-start',
  width: '100%',
  '@media': {
    [media.laptop]: {
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      width: 'auto',
    },
  },
});

export const ctaButton = style({});

globalStyle(`${ctaButton} span`, {
  boxSizing: 'border-box',
  display: vars.display.inlineFlex,
  alignItems: vars.alignItems.center,
  justifyContent: vars.justifyContent.center,
  width: '100%',
  maxWidth: dimensions.heroCtaButton.width,
  height: dimensions.heroCtaButton.height,
  paddingBlock: 0,
  paddingInline: vars.padding.l,
  font: vars.font.shorthand.heroCtaLabel,
  letterSpacing: vars.font.letterSpacing.registration,
  textAlign: 'center',
  '@media': {
    [media.laptop]: {
      width: dimensions.heroCtaButton.width,
    },
  },
});

export const onlineNote = style({
  margin: 0,
  font: vars.font.shorthand.heroLightLabel,
  letterSpacing: vars.font.letterSpacing.figmaWide,
  textAlign: 'left',
  '@media': {
    [media.laptop]: {
      alignSelf: 'flex-end',
      maxWidth: 'none',
      whiteSpace: 'nowrap',
      textAlign: 'right',
    },
  },
});
