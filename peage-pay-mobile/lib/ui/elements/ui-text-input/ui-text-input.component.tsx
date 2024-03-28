import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import UITextInputField from "./ui-text-input-field.component";
import UITextInputIcon from "./ui-text-input-icon.component";
import UITextInputMain from "./ui-text-input-main.component";
import UITextInputLabel from "./ui-text-input-label.component";
import UITextInputIconContainer from "./ui-text-input-icon-container.component";
import { UITextInputContext, Variants } from "./text-input.context";
import { useState } from "react";

interface UITextInputProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  variant?: Variants;
}

const UITextInput = ({
  children,
  style,
  variant = "primary",
  ...props
}: UITextInputProps): JSX.Element => {
  const styles = makeStyles();
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <UITextInputContext.Provider value={{ variant, focused, setFocused }}>
      <View style={[styles.base, styles[variant], style]} {...props}>
        {children}
      </View>
      <Text>{focused}lol</Text>
    </UITextInputContext.Provider>
  );
};
UITextInput.Field = UITextInputField;
UITextInput.Icon = UITextInputIcon;
UITextInput.IconContainer = UITextInputIconContainer;
UITextInput.Main = UITextInputMain;
UITextInput.Label = UITextInputLabel;

const makeStyles = () =>
  StyleSheet.create({
    base: {
      minHeight: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
      flexDirection: "row",
    },
  });

export default UITextInput;
