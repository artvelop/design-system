import { button } from './button';
import { palette } from './palette';
import { typography } from './typography';

export const theme = {
  palette,
  typography,
  button,
};

export type Theme = typeof theme;
