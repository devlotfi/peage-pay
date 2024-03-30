import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import UIButtonText from './ui-button-text.component';
import { AppTheme } from '../../../theme/types/app-theme.type';
import { useAppTheme } from '../../../theme/hooks/use-app-theme.hook';
import UIButtonIcon from './ui-button-icon.component';
import { UIButtonContext } from './ui-button.context';

type Variants =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'base-100'
  | 'base-200';

interface UIButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  variant?: Variants;
}

const UIButton = ({
  children,
  style,
  variant = 'primary',
  ...props
}: UIButtonProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme, variant);

  return (
    <UIButtonContext.Provider value={{ variant }}>
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
    </UIButtonContext.Provider>
  );
};
UIButton.Text = UIButtonText;
UIButton.Icon = UIButtonIcon;

const makeStyles = (theme: AppTheme, variant: Variants) =>
  StyleSheet.create({
    base: {
      minHeight: 50,
      paddingHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
      flexDirection: 'row',
    },
    primary: {
      backgroundColor: theme['primary-100'],
    },
    success: {
      backgroundColor: theme['success-100'],
    },
    error: {
      backgroundColor: theme['error-100'],
    },
    warning: {
      backgroundColor: theme['warning-100'],
    },
    'base-100': {
      backgroundColor: theme['base-100'],
    },
    'base-200': {
      backgroundColor: theme['base-200'],
    },
    pressed: {
      backgroundColor:
        variant === 'primary'
          ? theme['primary-200']
          : variant === 'success'
          ? theme['success-100']
          : variant === 'error'
          ? theme['error-200']
          : variant === 'warning'
          ? theme['warning-200']
          : variant === 'base-100'
          ? theme['base-200']
          : variant === 'base-200'
          ? theme['base-100']
          : undefined,
    },
  });

export default UIButton;
