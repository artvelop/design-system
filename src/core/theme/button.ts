import { css } from '@emotion/react';
import { theme } from '.';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'text' | 'contained' | 'outlined';

export const button = {
  root: css`
    cursor: pointer;
  `,
  size: {
    small: css`
      padding: 4px 16px;
    `,
    medium: css`
      padding: 8px 16px;
    `,
    large: css`
      padding: 12px 16px;
    `,
  },
  variant: {
    text: (color: string) => css`
      border-radius: 4px;
      background-color: transparent;
      color: ${color};
      border: 1px solid transparent;
      :active {
      }
      :hover {
        opacity: 0.8;
      }
    `,
    contained: (color: string) => css`
      border-radius: 4px;
      background-color: ${color};
      color: ${theme.palette.white};
      border: 1px solid ${color};
      :active {
      }
      :hover {
        opacity: 0.5;
      }
    `,
    outlined: (color: string) => css`
      border-radius: 4px;
      background-color: transparent;
      color: ${color};
      border: 1px solid ${color};
      :active {
      }
      :hover {
        opacity: 0.5;
      }
    `,
  },
} as const;
