import { StyleProp, StyleSheet, ViewProps } from "react-native";
import { useAppTheme } from "../../../theme/hooks/use-app-theme.hook";
import { AppTheme } from "../../../theme/types/app-theme.type";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, Props } from "@fortawesome/react-native-fontawesome";

type Position = "left" | "right";

interface UIAlertIconProps extends Props {
  style?: StyleProp<ViewProps>;
  icon: IconProp;
  position?: Position;
}

const UIAlertIcon = ({
  style,
  position,
  size,
  ...props
}: UIAlertIconProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <FontAwesomeIcon
      style={[styles.base as any, styles[position], style]}
      size={size || 25}
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
  });

export default UIAlertIcon;
