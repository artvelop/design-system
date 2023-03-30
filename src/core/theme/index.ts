import { button } from './button';
import { palette } from './palette';
import { tab } from './tab';
import { typography } from './typography';

export const theme = {
  palette,
  typography,
  button,
  tab,
};

export type Theme = typeof theme;
