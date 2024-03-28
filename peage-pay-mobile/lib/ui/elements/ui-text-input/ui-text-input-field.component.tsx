import {
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useAppTheme } from "../../../theme/hooks/use-app-theme.hook";
import { AppTheme } from "../../../theme/types/app-theme.type";
import { useContext } from "react";
import { UITextInputContext } from "./text-input.context";

interface UITextInputFieldProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
}

const UITextInputField = ({
  children,
  style,
  ...props
}: UITextInputFieldProps): JSX.Element => {
  const { theme } = useAppTheme();
  const { setFocused } = useContext(UITextInputContext);
  const styles = makeStyles(theme);

  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={[styles.base, style]}
      {...props}
    >
      {children}
    </TextInput>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      borderRadius: 7,
      fontSize: 17,
      width: "100%",
      height: "100%",
      paddingHorizontal: 10,
      color: theme["base-content"],
    },
  });

export default UITextInputField;
