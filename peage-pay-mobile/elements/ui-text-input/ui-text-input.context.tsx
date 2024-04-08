import { createContext } from "react";

export type Variants =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "edge-100"
  | "edge-200";

interface UITextInpuContext {
  variant: Variants;
  focused: boolean;
  setFocused: (value: boolean) => void;
}

const initialValue: UITextInpuContext = {
  variant: "primary",
  focused: false,
  setFocused: () => {},
};

export const UITextInputContext = createContext(initialValue);
