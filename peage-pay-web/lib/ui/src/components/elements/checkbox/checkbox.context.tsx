import { createContext } from 'react';

interface CheckboxContext {
  variant: string;
  checked: boolean;
  setChecked: (value: boolean) => void;
}

const initialValue: CheckboxContext = {
  variant: 'primary',
  checked: false,
  setChecked: () => {
    return;
  },
};

export const CheckboxContext = createContext(initialValue);
