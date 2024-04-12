import { StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { AppTheme } from '../../theme/types/app-theme.type';
import UIText from '../ui-text/ui-text.component';
import { useContext } from 'react';
import { UIButtonContext } from './ui-tabs-item.context';

interface UITabsContentProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const UITabsContent = ({
  children,
  style,
  ...props
}: UITabsContentProps): JSX.Element => {
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
      fontSize: 15,
      flex: 1,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    active: {
      color: theme['primary-100'],
    },
    inactive: {
      color: theme['base-content'],
    },
  });

export default UITabsContent;
