import { createContext } from 'react';

interface TabsContext {
  variant: string;
}

const initialValue: TabsContext = {
  variant: 'base-100',
};

export const TabsContext = createContext(initialValue);
