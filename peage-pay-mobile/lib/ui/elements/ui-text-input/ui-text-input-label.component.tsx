import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import { AppTheme } from '../../../theme/types/app-theme.type';
import { useAppTheme } from '../../../theme/hooks/use-app-theme.hook';
import { UITextInputContext } from './ui-text-input.context';
import { useContext } from 'react';

type Variants =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'edge-100'
  | 'edge-200';

interface UITextInputLabelProps extends TextProps {
  style?: StyleProp<TextStyle>;
  variant?: Variants;
}

const UITextInputLabel = ({
  children,
  style,
  ...props
}: UITextInputLabelProps): JSX.Element => {
  const { theme } = useAppTheme();
  const { variant } = useContext(UITextInputContext);
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
      fontSize: 15,
      position: 'absolute',
      top: -15,
      left: 13,
      backgroundColor: theme['base-100'],
      paddingHorizontal: 5,
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
    'edge-100': {
      color: theme['edge-100'],
    },
    'edge-200': {
      color: theme['edge-200'],
    },
  });

export default UITextInputLabel;
