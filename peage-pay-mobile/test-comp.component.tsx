import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import UIButton from "./lib/ui/elements/ui-button/ui-button.component";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AppThemeContext } from "./lib/theme/context/app-theme.context";
import { AppTheme } from "./lib/theme/types/app-theme.type";
import { AppThemesEnum } from "./lib/theme/types/app-themes-enum.type";
import { useContext } from "react";
import UIText from "./lib/ui/elements/ui-text/ui-text.component";
import UIButtonOutline from "./lib/ui/elements/ui-button-outline/ui-button-outline.component";
import UIHeading from "./lib/ui/elements/ui-heading/ui-heading.component";
import UIAlert from "./lib/ui/elements/ui-alert/ui-alert.component";
import UILink from "./lib/ui/elements/ui-link/ui-links.component";

export default function TestComp() {
  const { theme, setTheme } = useContext(AppThemeContext);
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setTheme(AppThemesEnum.LIGHT)}
        style={{
          height: 50,
          width: 100,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme["base-200"],
        }}
      >
        <Text style={{ fontFamily: "FugazOne_400Regular" }}>Light</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setTheme(AppThemesEnum.DARK);
        }}
        style={{
          height: 50,
          width: 100,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme["base-200"],
        }}
      >
        <UIText>Dark</UIText>
      </Pressable>
      <View style={{ alignItems: "flex-start" }}>
        <UIButton variant="base-200">
          <UIButton.Icon icon={faUser} position="left"></UIButton.Icon>
          <UIButton.Text>lol</UIButton.Text>
        </UIButton>
        <UIButtonOutline variant="primary">
          <UIButtonOutline.Icon
            icon={faUser}
            position="left"
          ></UIButtonOutline.Icon>
          <UIButtonOutline.Text>lol</UIButtonOutline.Text>
        </UIButtonOutline>
        <UIHeading size={50} variant="success">
          <UIHeading.Icon icon={faUser} position="left"></UIHeading.Icon>
          <UIHeading.Text>lol</UIHeading.Text>
        </UIHeading>
        <View style={{ width: "100%", padding: 10 }}>
          <UIAlert style={{ width: "100%" }} variant="error">
            <UIAlert.Icon icon={faUser} position="left"></UIAlert.Icon>
            <UIAlert.Text>lol</UIAlert.Text>
          </UIAlert>
          <UILink>lol</UILink>
          <TextInput placeholder="lol"></TextInput>
        </View>
      </View>
    </View>
  );
}

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme["base-100"],
    },
  });
