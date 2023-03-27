import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { useContext } from 'react';
import { InputContext } from './InputCompound';

export const Label = ({ children }: PropsWithChildren) => {
  const { id } = useContext(InputContext);

  return <InputLabel htmlFor={id}>{children}</InputLabel>;
};

const InputLabel = styled.label`
  ${({ theme }) => {
    const { palette } = theme;

    return css`
      color: ${palette.color.gray5};
      font-size: 14px;
    `;
  }}
`;
