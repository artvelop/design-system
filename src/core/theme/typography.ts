import { css, SerializedStyles } from '@emotion/react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'subtitle1'
  | 'subtitle2'
  | 'overline';

export const typography: Record<TypographyVariant, SerializedStyles> = {
  h1: css`
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
  `,
  h2: css`
    font-weight: 700;
    font-size: 25px;
    line-height: 32px;
  `,
  h3: css`
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
  `,
  h4: css`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  `,
  h5: css`
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  `,
  h6: css`
    font-size: 15px;
    line-height: 20px;
  `,
  body1: css`
    font-size: 14px;
    line-height: 20px;
  `,
  body2: css`
    font-size: 14px;
    line-height: 20px;
  `,
  button: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  caption: css`
    font-size: 13px;
    text-transform: uppercase;
    line-height: 20px;
  `,
  subtitle1: css`
    font-size: 14px;
  `,
  subtitle2: css`
    font-weight: 400;
    font-size: 15px;
  `,
  overline: css`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
  `,
} as const;
