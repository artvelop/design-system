export type PaletteType = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'black' | 'white';

export const palette = {
  primary: '#1F7CD2',
  secondary: '#6E759F',
  success: '#44D600',
  warning: '#FFA319',
  error: '#FF1943',
  info: '#33C2FF',
  black: '#000000',
  white: '#ffffff',
  color: {
    gray1: '#FAFAFA',
    gray2: '#FAFAFA',
    gray3: '#DBDBDB',
    gray4: '#CBCBCB',
    gray5: '#A6A6A6',
    gray6: '#656565',
    gray7: '#424242',
    gray8: '#303030',
    gray9: '#181818',
  },
} as const;
