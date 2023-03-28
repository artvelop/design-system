import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ButtonSize, ButtonSizeProperty, ButtonVariant } from '@core/theme/button';
import { PaletteType } from '@core/theme/palette';

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: PaletteType;
}

export const Button = ({ variant, size, color, children }: PropsWithChildren<Props>) => {
  return (
    <ButtonContainer variant={variant} size={size} color={color}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<Props>`
  ${({ theme, variant = 'text', size = 'small', color = 'primary' }) => {
    const buttonSize: ButtonSizeProperty = theme.button.size[size];
    const buttonColor = theme.palette[color];
    const buttonVaraint = theme.button.variant[variant](buttonColor);

    return css`
      cursor: pointer;
      padding: ${buttonSize.padding};
      ${buttonVaraint}
    `;
  }}
`;
