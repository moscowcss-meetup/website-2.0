import { createGlobalTheme } from '@vanilla-extract/css';
import { palette } from './palette';
import { vars } from './contract';

// LIGHT theme -> applied to :root.
createGlobalTheme(':root', vars, {
  color: {
    background: palette.white,
    text: palette.ink,
    success: palette.green,
    danger: palette.red,
    info: palette.blue,
    warning: palette.yellow,
  },
  padding: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  radius: {
    small: '4px',
    medium: '8px',
  },
  font: {
    body: '400 16px/1.5 "Inter", system-ui, sans-serif',
    caption: '400 12px/1.4 "Inter", system-ui, sans-serif',
    heading: '700 24px/1.2 "Inter", system-ui, sans-serif',
  },
});

// DARK theme -> applied to [data-theme="dark"].
// For now it DUPLICATES light exactly. Later, only change the values below;
// the contract and every component stay untouched.
createGlobalTheme('[data-theme="dark"]', vars, {
  color: {
    background: palette.white,
    text: palette.ink,
    success: palette.green,
    danger: palette.red,
    info: palette.blue,
    warning: palette.yellow,
  },
  padding: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  radius: {
    small: '4px',
    medium: '8px',
  },
  font: {
    body: '400 16px/1.5 "Inter", system-ui, sans-serif',
    caption: '400 12px/1.4 "Inter", system-ui, sans-serif',
    heading: '700 24px/1.2 "Inter", system-ui, sans-serif',
  },
});
