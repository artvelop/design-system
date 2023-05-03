import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { PropsWithChildren, useContext } from 'react';
import { InputContext } from './Index';

export const Container = ({ children }: PropsWithChildren) => {
  const { inputRef } = useContext(InputContext);

  const focusInput = () => inputRef.current.focus();
  const handleClickWrapper = () => focusInput();

  return <InputContainer onClick={handleClickWrapper}>{children}</InputContainer>;
};

const InputContainer = styled.div`
  ${({ theme }) => {
    const { palette } = theme;

    return css`
      display: flex;
      padding: 12px;
      border-radius: 4px;
      gap: 4px;
      outline: none;
      border: none;
      border: 2px solid ${palette.color.gray3};
      background-color: ${palette.white};
      cursor: text;
      :hover {
        border: 2px solid ${palette.color.gray4};
      }
    `;
  }}
`;
