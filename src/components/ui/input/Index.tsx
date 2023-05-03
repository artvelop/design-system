import React, { createContext, PropsWithChildren } from 'react';
import { MutableRefObject } from 'react';
import { useRef } from 'react';
import { Container } from './Container';
import { Input } from './Input';
import { Label } from './Label';

export interface InputContextType {
  id?: string;
  value: string;
  type: React.HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  inputRef: MutableRefObject<HTMLInputElement>;
}

export type InputCompoundProps = Omit<InputContextType, 'inputRef'>;

export const InputContext = createContext<InputContextType>({} as InputContextType);

export const InputCompound = ({ id, value, type, onChange, children }: PropsWithChildren<InputCompoundProps>) => {
  const inputRef = useRef({} as HTMLInputElement);
  const contextValue = { id, value, type, onChange, inputRef };

  return <InputContext.Provider value={contextValue}>{children}</InputContext.Provider>;
};

InputCompound.Input = Input;
InputCompound.Label = Label;
InputCompound.Container = Container;
