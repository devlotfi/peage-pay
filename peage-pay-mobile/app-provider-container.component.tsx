import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { AppTheme } from "./lib/theme/types/app-theme.type";
import { useAppTheme } from "./lib/theme/hooks/use-app-theme.hook";
import {
  useFonts as useFontsNoto,
  NotoSans_500Medium,
} from "@expo-google-fonts/noto-sans";
import {
  useFonts as useFontsFugaz,
  FugazOne_400Regular,
} from "@expo-google-fonts/fugaz-one";
import { StatusBar } from "expo-status-bar";
import { AppThemesEnum } from "./lib/theme/types/app-themes-enum.type";

const AppProviderContainer = ({ children }: PropsWithChildren) => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const [loadedNoto] = useFontsNoto({ NotoSans_500Medium });
  const [loadedFugaz] = useFontsFugaz({ FugazOne_400Regular });

  return (
    <View style={styles.container}>
      {children}
      <StatusBar
        translucent={false}
        backgroundColor={theme["base-100"]}
        style={theme.type === AppThemesEnum.LIGHT ? "dark" : "light"}
      ></StatusBar>
    </View>
  );
};
export default AppProviderContainer;

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme["base-100"],
    },
  });
