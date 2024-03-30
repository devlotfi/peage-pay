import { createContext } from 'react';

interface HeadingContext {
  variant: string;
}

const initialValue: HeadingContext = {
  variant: 'primary',
};

export const HeadingContext = createContext(initialValue);
