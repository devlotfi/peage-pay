import {
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  ViewProps,
} from "react-native";
import { useAppTheme } from "../../../theme/hooks/use-app-theme.hook";
import { AppTheme } from "../../../theme/types/app-theme.type";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, Props } from "@fortawesome/react-native-fontawesome";
import { useContext } from "react";
import { UIButtonContext } from "./ui-button.component";

type Position = "left" | "right";

interface UIButtonIconProps extends Props {
  style?: StyleProp<ViewProps>;
  icon: IconProp;
  position?: Position;
}

const UIButtonIcon = ({
  style,
  position,
  size,
  ...props
}: UIButtonIconProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { variant } = useContext(UIButtonContext);

  return (
    <FontAwesomeIcon
      style={[styles.base, styles[position], styles[variant] as any, style]}
      size={size || 19}
      {...props}
    ></FontAwesomeIcon>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    base: {
      color: theme["color-content"],
    },

    left: {
      marginRight: 10,
    },
    right: {
      marginLeft: 10,
    },

    primary: {
      color: theme["color-content"],
    },
    success: {
      color: theme["color-content"],
    },
    error: {
      color: theme["color-content"],
    },
    warning: {
      color: theme["color-content"],
    },
    "base-100": {
      color: theme["base-content"],
    },
    "base-200": {
      color: theme["base-content"],
    },
  });

export default UIButtonIcon;
