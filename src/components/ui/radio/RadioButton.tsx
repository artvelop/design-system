import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Typography } from '../typography/Typography';

interface Props<T extends string>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'checked'> {
  onChangeState: Dispatch<SetStateAction<T>>;
  selectOption: string;
  label: string;
}

export const RadioButton = <T extends string>(props: Props<T>) => {
  const { onChangeState, selectOption, label } = props;

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeState(event.target.value as T);
  };

  const checked = props.value === selectOption;

  return (
    <Label>
      <RadioControl type="radio" onChange={handleChangeValue} checked={checked} {...props} />
      <Typography>{label}</Typography>
    </Label>
  );
};

const Label = styled.label`
  gap: 8px;
`;

const RadioControl = styled.input``;
