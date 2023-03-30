import { css } from '@emotion/react';
import { theme } from '.';

export const tab = {
  root: css`
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
  `,
  select: {
    true: () => css`
      background-color: ${theme.palette.primary};
      color: ${theme.palette.white};
    `,
    false: () => css`
      background-color: transparent;
      color: ${theme.palette.color.gray6};
    `,
  },
} as const;
