import { createContext } from 'react';

interface MenuDropdownContext {
  variant: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const initialValue: MenuDropdownContext = {
  variant: 'base-100',
  open: false,
  setOpen: () => {
    return;
  },
};

export const MenuDropdownContext = createContext(initialValue);
