import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import UITextInputField from './ui-text-input-field.component';
import UITextInputIcon from './ui-text-input-icon.component';
import UITextInputMain from './ui-text-input-main.component';
import UITextInputLabel from './ui-text-input-label.component';
import UITextInputIconContainer from './ui-text-input-icon-container.component';
import { UITextInputContext, Variants } from './ui-text-input.context';
import UITextInputInfoMessage from './ui-text-input-info-message.component';

interface UITextInputProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  variant?: Variants;
}

const UITextInput = ({
  children,
  style,
  variant = 'primary',
  ...props
}: UITextInputProps): JSX.Element => {
  const styles = makeStyles();

  return (
    <UITextInputContext.Provider value={{ variant }}>
      <View style={[styles.base, styles[variant], style]} {...props}>
        {children}
      </View>
    </UITextInputContext.Provider>
  );
};
UITextInput.Field = UITextInputField;
UITextInput.Icon = UITextInputIcon;
UITextInput.IconContainer = UITextInputIconContainer;
UITextInput.Main = UITextInputMain;
UITextInput.InfoMessage = UITextInputInfoMessage;
UITextInput.Label = UITextInputLabel;

const makeStyles = () =>
  StyleSheet.create({
    base: {
      borderRadius: 7,
    },
  });

export default UITextInput;
