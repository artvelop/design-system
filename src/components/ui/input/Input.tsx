import React from 'react';
import { useContext } from 'react';
import { InputContext } from './InputCompound';

export const Input = () => {
  const { id, value, type, onChange } = useContext(InputContext);

  return <input id={id} value={value} type={type} onChange={onChange} />;
};
