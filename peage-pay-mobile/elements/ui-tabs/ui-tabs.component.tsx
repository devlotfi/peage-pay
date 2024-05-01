import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import UITabsContent from './ui-tabs-content.component';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UITabsIcon from './ui-tabs-icon.component';
import UITabsItem from './ui-tabs-item.component';

interface UITabsProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
}

const UITabs = ({ children, style, ...props }: UITabsProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <Pressable style={[styles.base, style]} {...props}>
      {children}
    </Pressable>
  );
};
UITabs.Item = UITabsItem;
UITabs.Content = UITabsContent;
UITabs.Icon = UITabsIcon;

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      flexDirection: 'row',
      paddingVertical: 5,
      borderBottomColor: theme['edge-100'],
      borderBottomWidth: 1,
    },
  });

export default UITabs;
