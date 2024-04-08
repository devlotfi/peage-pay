import { StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { AppTheme } from '../../theme/types/app-theme.type';
import UIText from '../ui-text/ui-text.component';
import { useContext } from 'react';
import { UIButtonContext } from './ui-button.context';

interface UIButtonContentProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const UIButtonContent = ({
  children,
  style,
  ...props
}: UIButtonContentProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { variant, iconPosition } = useContext(UIButtonContext);

  return (
    <UIText
      style={[styles.base, styles[variant], styles[iconPosition], style]}
      {...props}
    >
      {children}
    </UIText>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      fontSize: 15,
      flex: 1,
      textAlign: 'center',
    },

    left: {
      textAlign: 'right',
    },
    right: {
      textAlign: 'left',
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

export default UIButtonContent;
