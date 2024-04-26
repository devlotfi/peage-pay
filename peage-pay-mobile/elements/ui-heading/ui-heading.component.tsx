import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import UIHeadingText from './ui-heading-text.component';
import UIHeadingIcon from './ui-heading-icon.component';
import { UIHeadingContext } from './ui-heading.context';

type Variants = 'primary' | 'success' | 'error' | 'warning';

interface UIHeadingProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  variant?: Variants;
  size?: number;
}

const UIHeading = ({
  children,
  style,
  variant = 'primary',
  size = 19,
  ...props
}: UIHeadingProps): JSX.Element => {
  const styles = makeStyles();

  return (
    <UIHeadingContext.Provider value={{ variant, size }}>
      <View style={[styles.base, styles[variant], style]} {...props}>
        {children}
      </View>
    </UIHeadingContext.Provider>
  );
};
UIHeading.Text = UIHeadingText;
UIHeading.Icon = UIHeadingIcon;

const makeStyles = () =>
  StyleSheet.create({
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
  });

export default UIHeading;
