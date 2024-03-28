import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import UIButtonText from "./ui-button-outline-text.component";
import { AppTheme } from "../../../theme/types/app-theme.type";
import { createContext } from "react";
import { useAppTheme } from "../../../theme/hooks/use-app-theme.hook";
import UIButtonIcon from "./ui-button-outline-icon.component";

type Variants =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "edge-100"
  | "edge-200";

interface UIButtonOutlineProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  variant?: Variants;
}

interface UIButtonOutlineContext {
  variant: Variants;
}

const initialValue: UIButtonOutlineContext = {
  variant: "primary",
};

export const UIButtonOutlineContext = createContext(initialValue);

const UIButtonOutline = ({
  children,
  style,
  variant = "primary",
  ...props
}: UIButtonOutlineProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme, variant);

  return (
    <UIButtonOutlineContext.Provider value={{ variant }}>
      <Pressable
        style={({ pressed }) => [
          styles.base,
          styles[variant],
          style,
          pressed && styles.pressed,
        ]}
        {...props}
      >
        {children}
      </Pressable>
    </UIButtonOutlineContext.Provider>
  );
};
UIButtonOutline.Text = UIButtonText;
UIButtonOutline.Icon = UIButtonIcon;

const makeStyles = (theme: AppTheme, variant: Variants) =>
  StyleSheet.create({
    base: {
      minHeight: 50,
      paddingHorizontal: 15,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
      flexDirection: "row",
      borderWidth: 1,
    },
    primary: {
      borderColor: theme["primary-100"],
    },
    success: {
      borderColor: theme["success-100"],
    },
    error: {
      borderColor: theme["error-100"],
    },
    warning: {
      borderColor: theme["warning-100"],
    },
    "edge-100": {
      borderColor: theme["edge-100"],
    },
    "edge-200": {
      borderColor: theme["edge-200"],
    },
    pressed: {
      backgroundColor: theme["base-200"],
    },
  });

export default UIButtonOutline;
