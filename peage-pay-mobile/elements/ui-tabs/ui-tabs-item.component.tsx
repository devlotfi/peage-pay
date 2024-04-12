import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { UIButtonContext, Variants } from './ui-tabs-item.context';

interface UITabsItemProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  variant?: Variants;
}

const UITabsItem = ({
  children,
  style,
  variant = 'inactive',
  ...props
}: UITabsItemProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <UIButtonContext.Provider value={{ variant }}>
      <Pressable style={[styles.base, styles[variant], style]} {...props}>
        {children}
      </Pressable>
    </UIButtonContext.Provider>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      minHeight: 50,
      paddingHorizontal: 15,
      marginHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
      flex: 1,
      flexDirection: 'row',
    },
    active: {
      backgroundColor: theme['base-100'],
    },
    inactive: {
      backgroundColor: theme['base-200'],
    },
  });

export default UITabsItem;
