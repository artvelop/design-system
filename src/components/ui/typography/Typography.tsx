import { PaletteType } from '@core/theme/palette';
import { TypographyVariant } from '@core/theme/typography';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

interface Props {
  variant?: TypographyVariant;
  as?: React.ElementType;
  color?: PaletteType;
  align?: 'center' | 'right' | 'left';
}

export const Typography = ({ variant, as, children, color, align }: PropsWithChildren<Props>) => {
  return (
    <Content variant={variant} as={as} color={color} align={align}>
      {children}
    </Content>
  );
};

const Content = styled.span<Props>`
  ${({ theme, variant = 'body1', color = 'black', align = 'left' }) => {
    const variantStyle = theme.typography[variant];

    return css`
      ${variantStyle}
      color: ${theme.palette[color]};
      text-align: ${align};
    `;
  }}
`;
