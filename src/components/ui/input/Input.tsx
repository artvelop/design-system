import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useContext } from 'react';
import { InputContext } from './InputCompound';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const Input = (props: Props) => {
  const { placeholder } = props;
  const { id, value, type, onChange, inputRef } = useContext(InputContext);

  return (
    <InputField
      ref={inputRef}
      placeholder={placeholder}
      id={id}
      value={value}
      type={type}
      onChange={onChange}
      {...props}
    />
  );
};

const InputField = styled.input`
  ${({ theme }) => {
    const { palette } = theme;

    return css`
      display: flex;
      border-radius: 4px;
      outline: none;
      border: none;
      color: ${palette.color.gray7};
      ::placeholder {
        color: ${palette.color.gray4};
      }
    `;
  }}
`;
