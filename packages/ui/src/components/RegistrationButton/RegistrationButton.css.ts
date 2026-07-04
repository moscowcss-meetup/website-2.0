import { style } from '@vanilla-extract/css';
import { vars } from '@moscowcss/design-system';

// Форма из макета (729×183.242): вытянутый восьмиугольник со срезанными углами.
const shape =
  'polygon(29.33% 0, 70.89% 0, 100% 29.11%, 100% 71.11%, 71.11% 100%, 28.89% 100%, 0 71.11%, 0 28.89%)';

export const registrationButton = style({
  position: vars.position.relative,
});

export const face = style({
  position: vars.position.relative,
  zIndex: vars.zIndex.content,
  display: vars.display.inlineFlex,
  alignItems: vars.alignItems.center,
  justifyContent: vars.justifyContent.center,
  width: '45rem',
  height: '11rem',
  clipPath: shape,
  background: vars.color.action,
  color: vars.color.onAction,
  font: vars.font.shorthand.registration,
  letterSpacing: vars.font.letterSpacing.registration,
  textAlign: 'center',
  selectors: {
    [`${registrationButton}:hover &`]: {
      textDecoration: 'underline',
    },
  },
});
