import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { AppTheme } from '../../theme/types/app-theme.type';
import { RefObject } from 'react';

interface UITextInputFieldProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  fieldRef?: RefObject<TextInput>;
}

const UITextInputField = ({
  children,
  style,
  fieldRef,
  ...props
}: UITextInputFieldProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <TextInput
      ref={fieldRef}
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
