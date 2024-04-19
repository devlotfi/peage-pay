import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { AppTheme } from '../../theme/types/app-theme.type';

interface UITextInputFieldProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
}

const UITextInputField = ({
  children,
  style,
  ...props
}: UITextInputFieldProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <TextInput
      style={[styles.base, style]}
      placeholderTextColor={theme['base-content']}
      {...props}
    >
      {children}
    </TextInput>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      borderRadius: 7,
      fontSize: 17,
      flex: 1,
      paddingHorizontal: 10,
      color: theme['base-content'],
    },
  });

export default UITextInputField;
