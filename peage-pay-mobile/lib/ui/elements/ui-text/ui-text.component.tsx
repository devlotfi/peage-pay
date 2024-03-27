import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";
import { useAppTheme } from "../../../theme/hooks/use-app-theme.hook";
import { AppTheme } from "../../../theme/types/app-theme.type";

interface UITextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const UIText = ({ children, style, ...props }: UITextProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <Text style={[styles.base, style]} {...props}>
      {children}
    </Text>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      fontFamily: "NotoSans_500Medium",
      color: theme["base-content"],
    },
  });

export default UIText;
