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
    },
    primary: {
      borderColor: theme["primary-100"],
      borderWidth: 1,
    },
    success: {
      backgroundColor: theme["success-100"],
    },
    error: {
      backgroundColor: theme["error-100"],
    },
    warning: {
      backgroundColor: theme["warning-100"],
    },
    "base-100": {
      backgroundColor: theme["base-100"],
    },
    "base-200": {
      backgroundColor: theme["base-200"],
    },
    pressed: {
      backgroundColor: theme["base-200"],
    },
  });

export default UIButtonOutline;
