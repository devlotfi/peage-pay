import { StyleProp, StyleSheet, ViewProps } from 'react-native';
import { useAppTheme } from '../../../theme/hooks/use-app-theme.hook';
import { AppTheme } from '../../../theme/types/app-theme.type';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { useContext } from 'react';
import { UITextInputContext } from './ui-text-input.context';

interface UITextInputIconProps extends Props {
  style?: StyleProp<ViewProps>;
  icon: IconProp;
}

const UITextInputIcon = ({
  style,
  size,
  ...props
}: UITextInputIconProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { variant } = useContext(UITextInputContext);

  return (
    <FontAwesomeIcon
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={[styles.base, styles[variant] as any, style]}
      size={size || 23}
      {...props}
    ></FontAwesomeIcon>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      color: theme['color-content'],
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

export default UITextInputIcon;
