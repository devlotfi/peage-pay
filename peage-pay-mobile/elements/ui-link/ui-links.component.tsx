import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';

type Variants = 'primary' | 'success' | 'error' | 'warning';

interface UILinkProps extends TextProps {
  style?: StyleProp<TextStyle>;
  variant?: Variants;
}

const UILink = ({
  children,
  style,
  variant = 'primary',
  ...props
}: UILinkProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <Text style={[styles.base, styles[variant], style]} {...props}>
      {children}
    </Text>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      fontSize: 19,
      textDecorationLine: 'underline',
    },

    primary: {
      color: theme['primary-100'],
    },
    success: {
      color: theme['success-100'],
    },
    error: {
      color: theme['error-100'],
    },
    warning: {
      color: theme['warning-100'],
    },
  });

export default UILink;
