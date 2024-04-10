import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { AppTheme } from '../../theme/types/app-theme.type';

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
      fontFamily: 'Inter',
      color: theme['base-content'],
      includeFontPadding: false,
    },
  });

export default UIText;
