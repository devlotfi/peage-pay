import { createContext } from 'react';

interface dropdownContext {
  variant: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const initialValue: dropdownContext = {
  variant: 'base-100',
  open: false,
  setOpen: () => {
    return;
  },
};

export const DropdownContext = createContext(initialValue);
