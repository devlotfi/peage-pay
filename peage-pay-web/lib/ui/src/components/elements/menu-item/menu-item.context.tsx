import { createContext } from 'react';

interface MenuItemContext {
  variant: string;
}

const initialValue: MenuItemContext = {
  variant: 'base-100',
};

export const MenuItemContext = createContext(initialValue);
