import React, { PropsWithChildren } from 'react';
import { useContext } from 'react';
import { InputContext } from './InputCompound';

export const Label = ({ children }: PropsWithChildren) => {
  const { id } = useContext(InputContext);

  return <label htmlFor={id}>{children}</label>;
};
