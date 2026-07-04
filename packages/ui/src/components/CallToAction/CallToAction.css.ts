import { style } from '@vanilla-extract/css';
import { vars } from '@moscowcss/design-system';

// Форма кнопки из макета (temp/Кнопка Регистрация.svg): вытянутый шестиугольник
// со срезанными углами. Проценты — доли ширины/высоты bounding box макета
// (729×183.242), поэтому форма тянется за контентом. Одна и та же форма на
// подложке и на кольце фокуса — чтобы кольцо точно повторяло силуэт.
const shape =
  'polygon(29.33% 0, 70.89% 0, 100% 29.11%, 100% 71.11%, 71.11% 100%, 28.89% 100%, 0 71.11%, 0 28.89%)';

export const root = style({
  position: 'relative',
  isolation: 'isolate',
  display: 'inline-flex',
  padding: 0,
  border: 'none',
  background: 'none',
  color: 'inherit',
  cursor: 'pointer',
  selectors: {
    '&:focus-visible': {
      outline: 'none',
    },
    // Кольцо фокуса и «зазор» перед ним — два слоя одной формы за подложкой.
    // clip-path режет только сам псевдоэлемент (root не обрезан), поэтому они
    // могут выступать за пределы кнопки.
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      clipPath: shape,
      opacity: 0,
      transition: 'opacity 120ms ease',
      pointerEvents: 'none',
    },
    // Нижний слой — кольцо цвета brand, выступает на (зазор + толщина кольца).
    '&::before': {
      inset: `calc(${vars.spacing.xs} * -2)`,
      zIndex: 1,
      background: vars.color.focus,
    },
    // Средний слой — цвет фона, перекрывает внутреннюю часть кольца и создаёт
    // «расстояние» между кнопкой и кольцом.
    '&::after': {
      inset: `calc(${vars.spacing.xs} * -1)`,
      zIndex: 2,
      background: vars.color.background,
    },
    '&:focus-visible::before, &:focus-visible::after': {
      opacity: 1,
    },
  },
});

// Видимая грань кнопки — верхний слой над кольцом.
export const face = style({
  position: 'relative',
  zIndex: 3,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  clipPath: shape,
  // Просторные внутренние отступы из макета: текст с запасом отходит от срезанных
  // углов. По горизонтали запас крупнее — двойная верхняя ступень шкалы.
  paddingBlock: vars.padding.xl,
  paddingInline: `calc(${vars.padding.xxl} * 2)`,
  background: vars.color.action,
  color: vars.color.onAction,
  // Крупный жирный display (Montserrat Bold) — как в макете; он же задаёт кнопке
  // вытянутую пропорцию, при которой срезы углов ложатся под углом из макета.
  font: vars.font.shorthand.h1,
  letterSpacing: vars.font.letterSpacing.heading,
  textAlign: 'center',
});
