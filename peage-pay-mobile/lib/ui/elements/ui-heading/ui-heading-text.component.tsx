import {
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";
import { useAppTheme } from "../../../theme/hooks/use-app-theme.hook";
import UIText from "../ui-text/ui-text.component";
import { useContext } from "react";
import { UIHeadingContext } from "./ui-heading.component";

interface UIHeadingTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const UIHeadingText = ({
  children,
  style,
  ...props
}: UIHeadingTextProps): JSX.Element => {
  const { size } = useContext(UIHeadingContext);
  const styles = makeStyles(size);

  return (
    <UIText style={[styles.base, style]} {...props}>
      {children}
    </UIText>
  );
};

const makeStyles = (size: number) =>
  StyleSheet.create({
    base: {
      fontSize: size,
    },
  });

export default UIHeadingText;
