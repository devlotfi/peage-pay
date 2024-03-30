import { StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';
import { useAppTheme } from '../../../theme/hooks/use-app-theme.hook';
import { AppTheme } from '../../../theme/types/app-theme.type';
import UIText from '../ui-text/ui-text.component';
import { useContext } from 'react';
import { UIButtonContext } from './ui-button.context';

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
  const { variant } = useContext(UIButtonContext);

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
      color: theme['color-content'],
    },
    success: {
      color: theme['color-content'],
    },
    error: {
      color: theme['color-content'],
    },
    warning: {
      color: theme['color-content'],
    },
    'base-100': {
      color: theme['base-content'],
    },
    'base-200': {
      color: theme['base-content'],
    },
  });

export default UIButtonText;
