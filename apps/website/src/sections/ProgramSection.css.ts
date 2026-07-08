import { style } from '@vanilla-extract/css';
import { vars, media } from '@moscowcss/design-system';

export const section = style({
  position: vars.position.relative,
  paddingBlock: vars.padding['4xl'],
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

export const hint = style({
  margin: 0,
  maxWidth: '36rem',
  color: vars.color.text,
  font: vars.font.shorthand.programDescription,
  letterSpacing: vars.font.letterSpacing.figmaWide,
});

export const list = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: 0,
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const row = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.l,
  paddingBlock: vars.padding.xxl,
  borderTop: `${vars.border.width.thin} ${vars.border.style.solid} ${vars.color.divider}`,
  '@media': {
    [media.laptop]: {
      display: 'grid',
      gridTemplateColumns: '12.5rem minmax(16rem, 26rem) minmax(24rem, 1fr)',
      columnGap: vars.spacing.xxl,
      alignItems: 'start',
    },
  },
});

export const portraitColumn = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.m,
  alignItems: vars.alignItems.center,
  width: 'fit-content',
});

export const time = style({
  margin: 0,
  font: vars.font.shorthand.programTime,
  letterSpacing: vars.font.letterSpacing.figmaWide,
  textAlign: 'center',
  textTransform: 'uppercase',
});

export const talkMain = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.m,
  minWidth: 0,
});

export const talkTitle = style({
  margin: 0,
  font: vars.font.shorthand.programTalkTitle,
  letterSpacing: vars.font.letterSpacing.figmaWide,
  textTransform: 'uppercase',
});

export const speakerName = style({
  margin: 0,
  font: vars.font.shorthand.programSpeakerName,
  letterSpacing: vars.font.letterSpacing.figmaWide,
});

export const speakerRole = style({
  margin: 0,
  color: vars.color.divider,
  font: vars.font.shorthand.programSpeakerRole,
  letterSpacing: vars.font.letterSpacing.figmaWide,
  textTransform: 'capitalize',
});

export const description = style({
  margin: 0,
  font: vars.font.shorthand.programDescription,
  letterSpacing: vars.font.letterSpacing.figmaWide,
});

export const activityRow = style({
  display: vars.display.flex,
  flexDirection: vars.flexDirection.column,
  gap: vars.spacing.m,
  paddingBlock: vars.padding.xxl,
  borderTop: `${vars.border.width.thin} ${vars.border.style.solid} ${vars.color.divider}`,
  '@media': {
    [media.laptop]: {
      display: 'grid',
      gridTemplateColumns: '12.5rem 1fr',
      columnGap: vars.spacing.xxl,
      alignItems: 'center',
    },
  },
});

export const activityTitle = style({
  margin: 0,
  font: vars.font.shorthand.programTalkTitle,
  letterSpacing: vars.font.letterSpacing.figmaWide,
  textTransform: 'uppercase',
});
