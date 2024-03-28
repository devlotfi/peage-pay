import { StyleProp, StyleSheet, View, ViewProps } from "react-native";
import { useAppTheme } from "../../../theme/hooks/use-app-theme.hook";
import { AppTheme } from "../../../theme/types/app-theme.type";

type Position = "left" | "right";

interface UITextInputIconContainerProps extends ViewProps {
  style?: StyleProp<ViewProps>;
  position?: Position;
}

const UITextInputIconContainer = ({
  style,
  position,
  ...props
}: UITextInputIconContainerProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={[styles.base, styles[position], style]} {...props}></View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      color: theme["color-content"],
      paddingHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
    },

    left: {
      paddingRight: 0,
    },
    right: {
      paddingRight: 0,
    },
  });

export default UITextInputIconContainer;
