import React, { PropsWithChildren } from 'react';
import { createContext } from 'react';
import { Container } from './Container';
import { Tab } from './Tab';

export interface TabContextType {
  value: string;
  onChange: (value: any) => void;
}

export type TabCompoundProps = TabContextType;

export const TabContext = createContext<TabContextType>({} as TabContextType);

export const TabCompound = ({ value, onChange, children }: PropsWithChildren<TabCompoundProps>) => {
  const contextValue = { value, onChange };

  return <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>;
};

TabCompound.Container = Container;
TabCompound.Tab = Tab;
