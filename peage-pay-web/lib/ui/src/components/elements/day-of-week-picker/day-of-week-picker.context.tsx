import { createContext } from 'react';

interface DayOfWeekPickerContext {
  variant: string;
}

const initialValue: DayOfWeekPickerContext = {
  variant: 'edge-100',
};

export const DayOfWeekPickerContext = createContext(initialValue);
