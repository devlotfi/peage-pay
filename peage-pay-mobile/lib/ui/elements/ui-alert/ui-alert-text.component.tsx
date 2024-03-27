import { StyleProp, StyleSheet, TextProps, TextStyle } from "react-native";
import { useAppTheme } from "../../../theme/hooks/use-app-theme.hook";
import { AppTheme } from "../../../theme/types/app-theme.type";
import UIText from "../ui-text/ui-text.component";

interface UIAlertTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const UIAlertText = ({
  children,
  style,
  ...props
}: UIAlertTextProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <UIText style={[styles.base, style]} {...props}>
      {children}
    </UIText>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      fontSize: 17,
      color: theme["color-content"],
    },
  });

export default UIAlertText;
