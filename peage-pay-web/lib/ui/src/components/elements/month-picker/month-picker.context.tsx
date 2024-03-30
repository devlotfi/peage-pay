import { createContext } from 'react';

interface MonthPickerContext {
  variant: string;
}

const initialValue: MonthPickerContext = {
  variant: 'edge-100',
};

export const MonthPickerContext = createContext(initialValue);
