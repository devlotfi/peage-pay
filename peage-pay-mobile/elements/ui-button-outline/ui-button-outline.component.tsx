import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import UIButtonContent from './ui-button-outline-content.component';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIButtonIcon from './ui-button-outline-icon.component';
import {
  IconPosition,
  UIButtonOutlineContext,
  Variants,
} from './ui-button-outline.context';

interface UIButtonOutlineProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  variant?: Variants;
  iconPosition?: IconPosition;
}

const UIButtonOutline = ({
  children,
  style,
  variant = 'primary',
  iconPosition = 'left',
  ...props
}: UIButtonOutlineProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <UIButtonOutlineContext.Provider value={{ variant, iconPosition }}>
      <Pressable
        style={({ pressed }) => [
          styles.base,
          styles[variant],
          style,
          pressed && styles.pressed,
        ]}
        {...props}
      >
        {children}
      </Pressable>
    </UIButtonOutlineContext.Provider>
  );
};
UIButtonOutline.Content = UIButtonContent;
UIButtonOutline.Icon = UIButtonIcon;

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      minHeight: 50,
      paddingHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
      flexDirection: 'row',
      borderWidth: 1,
    },
    primary: {
      borderColor: theme['primary-100'],
    },
    success: {
      borderColor: theme['success-100'],
    },
    error: {
      borderColor: theme['error-100'],
    },
    warning: {
      borderColor: theme['warning-100'],
    },
    'edge-100': {
      borderColor: theme['edge-100'],
    },
    'edge-200': {
      borderColor: theme['edge-200'],
    },
    pressed: {
      backgroundColor: theme['base-200'],
    },
  });

export default UIButtonOutline;
