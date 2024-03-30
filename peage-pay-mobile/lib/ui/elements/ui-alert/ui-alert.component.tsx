import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import UIAlertText from './ui-alert-text.component';
import { AppTheme } from '../../../theme/types/app-theme.type';
import { useAppTheme } from '../../../theme/hooks/use-app-theme.hook';
import UIAlertIcon from './ui-alert-icon.component';

type Variants = 'primary' | 'success' | 'error' | 'warning';

interface UIAlertProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  variant?: Variants;
}

const UIAlert = ({
  children,
  style,
  variant = 'primary',
  ...props
}: UIAlertProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={[styles.base, styles[variant], style]} {...props}>
      {children}
    </View>
  );
};
UIAlert.Text = UIAlertText;
UIAlert.Icon = UIAlertIcon;

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      padding: 15,
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },

    primary: {
      backgroundColor: theme['primary-100'],
    },
    success: {
      backgroundColor: theme['success-100'],
    },
    error: {
      backgroundColor: theme['error-100'],
    },
    warning: {
      backgroundColor: theme['warning-100'],
    },
  });

export default UIAlert;
