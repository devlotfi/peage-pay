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
import { UIHeadingContext } from "./ui-heading.component";

type Position = "left" | "right";

interface UIHeadingIconProps extends Props {
  style?: StyleProp<ViewProps>;
  icon: IconProp;
  position?: Position;
}

const UIHeadingIcon = ({
  style,
  position,
  ...props
}: UIHeadingIconProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { variant, size } = useContext(UIHeadingContext);

  return (
    <FontAwesomeIcon
      style={[styles.base, styles[position], styles[variant] as any, style]}
      size={size}
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
      marginRight: 15,
    },
    right: {
      marginLeft: 15,
    },

    primary: {
      color: theme["primary-100"],
    },
    success: {
      color: theme["success-100"],
    },
    error: {
      color: theme["error-100"],
    },
    warning: {
      color: theme["warning-100"],
    },
  });

export default UIHeadingIcon;
