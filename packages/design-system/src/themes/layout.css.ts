import { createGlobalTheme } from '@vanilla-extract/css';
import { vars } from '../contract';
import { layout } from '../layout';

createGlobalTheme(':root', vars.display, layout.values.display);
createGlobalTheme(':root', vars.position, layout.values.position);
createGlobalTheme(':root', vars.alignItems, layout.values.alignItems);
createGlobalTheme(':root', vars.justifyContent, layout.values.justifyContent);
createGlobalTheme(':root', vars.flexDirection, layout.values.flexDirection);
createGlobalTheme(':root', vars.inset, layout.values.inset);
