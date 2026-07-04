import { createGlobalTheme } from '@vanilla-extract/css';
import { vars } from './contract';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

const light = { ...colors.light, ...spacing.light, ...typography.light };
const dark = { ...colors.dark, ...spacing.dark, ...typography.dark };

createGlobalTheme(':root', vars, light);

// Тёмная тема пока дублирует светлую: позже меняем только значения групп
// (colors/spacing/typography), контракт и компоненты не трогаем.
createGlobalTheme('[data-theme="dark"]', vars, dark);
