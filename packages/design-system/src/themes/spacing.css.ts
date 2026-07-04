import { createGlobalTheme } from '@vanilla-extract/css';
import { vars } from '../contract';
import { spacing } from '../spacing';

// Отступы и радиусы от темы не зависят — задаём один раз на :root.
// Адаптив, когда понадобится, живёт здесь: переопределяем нужные vars на
// брейкпоинтах через globalStyle(':root', { '@media': … }), как в типографике.
createGlobalTheme(':root', vars.padding, spacing.values.padding);
createGlobalTheme(':root', vars.radius, spacing.values.radius);
