import { TypographyProperty, TypographyVariant } from '@core/theme/typography';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

interface Props {
  variant?: TypographyVariant;
  as?: React.ElementType;
  color?: string;
}

export const Typography = ({ variant = 'body1', as, children, color }: PropsWithChildren<Props>) => {
  return (
    <Content variant={variant} as={as} color={color}>
      {children}
    </Content>
  );
};

const Content = styled.span<Props>`
  ${({ theme, variant, color }) => {
    const props: TypographyProperty = theme.typography?.[variant ?? 'body1'] ?? {};

    return css`
      font-size: ${props.fontSize};
      font-weight: ${props.fontWeight};
      line-height: ${props.lineHeight};
      text-transform: ${props.textTransform};
      color: ${color ?? theme.palette.black};
    `;
  }}
`;
