import { StyleProp, StyleSheet, ViewProps } from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { AppTheme } from '../../theme/types/app-theme.type';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { useContext } from 'react';
import { UIButtonContext } from './ui-tabs-item.context';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface UITabsIconProps extends Props {
  style?: StyleProp<ViewProps>;
  icon: IconProp;
}

const UITabsIcon = ({
  style,
  size,
  ...props
}: UITabsIconProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { variant } = useContext(UIButtonContext);

  return (
    <FontAwesomeIcon
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={[styles.base, styles[variant] as any, style]}
      size={size || 20}
      {...props}
    ></FontAwesomeIcon>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      color: theme['color-content'],
    },
    active: {
      color: theme['primary-100'],
    },
    inactive: {
      color: theme['base-content'],
    },
  });

export default UITabsIcon;
