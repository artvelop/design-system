import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ButtonSize, ButtonVariant } from '@core/theme/button';
import { PaletteType } from '@core/theme/palette';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: PaletteType;
}

export const Button = (props: PropsWithChildren<Props>) => {
  const { variant, size, color, children } = props;

  return (
    <ButtonContainer variant={variant} size={size} color={color} {...props}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<Props>`
  ${({ theme, variant = 'text', size = 'small', color = 'primary' }) => {
    const buttonSize = theme.button.size[size];
    const buttonColor = theme.palette[color];
    const buttonVaraint = theme.button.variant[variant](buttonColor);
    const buttonRootStyle = theme.button.root;

    return css`
      ${buttonRootStyle}
      ${buttonSize}
      ${buttonVaraint}
    `;
  }}
`;
