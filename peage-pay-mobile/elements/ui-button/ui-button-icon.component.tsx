import { StyleProp, StyleSheet, ViewProps } from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { AppTheme } from '../../theme/types/app-theme.type';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { useContext } from 'react';
import { UIButtonContext } from './ui-button.context';

interface UIButtonIconProps extends Props {
  style?: StyleProp<ViewProps>;
  icon: IconProp;
}

const UIButtonIcon = ({
  style,
  size,
  ...props
}: UIButtonIconProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { variant, iconPosition } = useContext(UIButtonContext);

  return (
    <FontAwesomeIcon
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={[styles.base, styles[iconPosition], styles[variant] as any, style]}
      size={size || 19}
      {...props}
    ></FontAwesomeIcon>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      color: theme['color-content'],
    },

    left: {
      marginRight: 10,
    },
    right: {
      marginLeft: 10,
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

export default UIButtonIcon;
