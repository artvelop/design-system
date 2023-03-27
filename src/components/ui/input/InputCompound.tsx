import React, { createContext, PropsWithChildren } from 'react';
import { Input } from './Input';
import { Label } from './Label';

export interface InputContextProps {
  id?: string;
  value: string;
  type: React.HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputContext = createContext<InputContextProps>({
  id: '',
  value: '',
  type: 'text',
  onChange: () => {},
});

export const InputCompound = ({ id, value, type, onChange, children }: PropsWithChildren<InputContextProps>) => {
  const contextValue = { id, value, type, onChange };

  return <InputContext.Provider value={contextValue}>{children}</InputContext.Provider>;
};

InputCompound.Input = Input;
InputCompound.Label = Label;
