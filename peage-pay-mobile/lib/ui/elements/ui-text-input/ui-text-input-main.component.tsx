import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { AppTheme } from '../../../theme/types/app-theme.type';
import { useAppTheme } from '../../../theme/hooks/use-app-theme.hook';
import { useContext } from 'react';
import { UITextInputContext } from './ui-text-input.context';

type Variants =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'edge-100'
  | 'edge-200';

interface UITextInputMainProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  variant?: Variants;
}

const UITextInputMain = ({
  children,
  style,
  ...props
}: UITextInputMainProps): JSX.Element => {
  const { theme } = useAppTheme();
  const { variant, focused } = useContext(UITextInputContext);
  const styles = makeStyles(theme);

  return (
    <View
      style={[styles.base, styles[variant], focused && styles.focus, style]}
      {...props}
    >
      {children}
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      position: 'relative',
      minHeight: 50,
      borderRadius: 7,
      flexDirection: 'row',
      borderWidth: 1,
      width: '100%',
      height: '100%',
      backgroundColor: theme['base-100'],
    },

    focus: {
      borderColor: theme['primary-100'],
    },

    primary: {
      borderColor: theme['primary-100'],
    },
    success: {
      borderColor: theme['success-100'],
    },
    error: {
      borderColor: theme['error-100'],
    },
    warning: {
      borderColor: theme['warning-100'],
    },
    'edge-100': {
      borderColor: theme['edge-100'],
    },
    'edge-200': {
      borderColor: theme['edge-200'],
    },
  });

export default UITextInputMain;
