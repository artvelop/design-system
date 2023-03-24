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

export type TypographyProperty = {
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  textTransform?: string;
};

export const typography: Record<TypographyVariant, TypographyProperty> = {
  h1: {
    fontWeight: '700',
    fontSize: '30px',
    lineHeight: '36px',
  },
  h2: {
    fontWeight: '700',
    fontSize: '25px',
    lineHeight: '32px',
  },
  h3: {
    fontWeight: '700',
    fontSize: '21px',
    lineHeight: '30px',
  },
  h4: {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',
  },
  h5: {
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '20px',
  },
  h6: {
    fontSize: '15px',
    lineHeight: '20px',
  },
  body1: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  body2: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  button: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
  },
  caption: {
    fontSize: '13px',
    textTransform: 'uppercase',
    lineHeight: '20px',
  },
  subtitle1: {
    fontSize: '14px',
  },
  subtitle2: {
    fontWeight: '400',
    fontSize: '15px',
  },
  overline: {
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
} as const;
