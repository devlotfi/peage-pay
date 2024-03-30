import { StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';
import { useAppTheme } from '../../../theme/hooks/use-app-theme.hook';
import { AppTheme } from '../../../theme/types/app-theme.type';
import UIText from '../ui-text/ui-text.component';
import { useContext } from 'react';
import { UIButtonOutlineContext } from './ui-button-outline.context';

interface UIButtonTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const UIButtonText = ({
  children,
  style,
  ...props
}: UIButtonTextProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { variant } = useContext(UIButtonOutlineContext);

  return (
    <UIText style={[styles.base, styles[variant], style]} {...props}>
      {children}
    </UIText>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      fontSize: 17,
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

export default UIButtonText;
