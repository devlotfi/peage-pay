import { StyleProp, StyleSheet, ViewProps } from 'react-native';
import { useAppTheme } from '../../../theme/hooks/use-app-theme.hook';
import { AppTheme } from '../../../theme/types/app-theme.type';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { useContext } from 'react';
import { UIButtonOutlineContext } from './ui-button-outline.context';

type Position = 'left' | 'right';

interface UIButtonIconProps extends Props {
  style?: StyleProp<ViewProps>;
  icon: IconProp;
  position?: Position;
}

const UIButtonIcon = ({
  style,
  position,
  size,
  ...props
}: UIButtonIconProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { variant } = useContext(UIButtonOutlineContext);

  return (
    <FontAwesomeIcon
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={[styles.base, styles[position], styles[variant] as any, style]}
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

export default UIButtonIcon;
