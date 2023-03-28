import { theme } from '.';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'text' | 'contained' | 'outlined';

export type ButtonSizeProperty = {
  padding?: string;
};

export const button = {
  size: {
    small: {
      padding: '4px 16px',
    },
    medium: {
      padding: '8px 16px',
    },
    large: {
      padding: '12px 16px',
    },
  },
  variant: {
    text: (color: string) => {
      return `
        border-radius: 4px;
        background-color: transparent;
        color: ${color};
        border: 1px solid transparent;
        :active {}
        :hover {
          opacity: 0.8;
        }
      `;
    },
    contained: (color: string) => {
      return `
        border-radius: 4px;
        background-color: ${color};
        color: ${theme.palette.white};
        border: 1px solid ${color};
        :active {}
        :hover {
          opacity: 0.5;
        }
      `;
    },
    outlined: (color: string) => {
      return `
        border-radius: 4px;
        background-color: transparent;
        color: ${color};
        border: 1px solid ${color};
        :active {}
        :hover {
          opacity: 0.5;
        }
      `;
    },
  },
} as const;
