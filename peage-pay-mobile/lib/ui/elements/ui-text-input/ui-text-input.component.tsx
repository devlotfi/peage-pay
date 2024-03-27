import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import UIButtonText from "./ui-text-input-text.component";
import { AppTheme } from "../../../theme/types/app-theme.type";
import { createContext } from "react";
import { useAppTheme } from "../../../theme/hooks/use-app-theme.hook";
import UIButtonIcon from "./ui-text-input-icon.component";

type Variants =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "edge-100"
  | "edge-200";

interface UITextInputProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  variant?: Variants;
}

interface UITextInpuContext {
  variant: Variants;
}

const initialValue: UITextInpuContext = {
  variant: "primary",
};

export const UITextInputContext = createContext(initialValue);

const UITextInput = ({
  children,
  style,
  variant = "primary",
  ...props
}: UITextInputProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles();

  return (
    <UITextInputContext.Provider value={{ variant }}>
      <View style={[styles.base, styles[variant], style]} {...props}>
        {children}
      </View>
    </UITextInputContext.Provider>
  );
};
UITextInput.Text = UIButtonText;
UITextInput.Icon = UIButtonIcon;

const makeStyles = () =>
  StyleSheet.create({
    base: {
      minHeight: 50,
      paddingHorizontal: 15,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
      flexDirection: "row",
    },
  });

export default UITextInput;
