import styled from '@emotion/styled';
import React from 'react';
import { Typography } from '../typography/Typography';

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const CheckBox = (props: Props) => {
  const { label = '' } = props;

  return (
    <Label>
      <InputCheck type="checkbox" {...props} />
      <Typography>{label}</Typography>
    </Label>
  );
};

const Label = styled.label`
  gap: 8px;
`;
const InputCheck = styled.input``;
