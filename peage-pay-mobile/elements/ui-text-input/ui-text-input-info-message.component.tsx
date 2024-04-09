import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { UITextInputContext, Variants } from './ui-text-input.context';
import { useContext } from 'react';

interface UITextInputInfoMessageProps extends TextProps {
  style?: StyleProp<TextStyle>;
  variant?: Variants;
}

const UITextInputInfoMessage = ({
  children,
  style,
  ...props
}: UITextInputInfoMessageProps): JSX.Element => {
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
      fontSize: 13,
      paddingHorizontal: 5,
      marginLeft: 10,
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

export default UITextInputInfoMessage;
