import { ScrollView, StyleSheet, View } from 'react-native';
import MinimalNavbar from '../layout/minimal-navbar.component';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import type { StackScreenProps } from '@react-navigation/stack';
import { MainRouterParamList } from '../routers/main.router';
import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import UIHeading from '../elements/ui-heading/ui-heading.component';
import {
  faAt,
  faFilePen,
  faKey,
  faSignIn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import UITextInput from '../elements/ui-text-input/ui-text-input.component';
import UIButton from '../elements/ui-button/ui-button.component';
import OrDivider from '../layout/or-divider.component';
import UIButtonOutline from '../elements/ui-button-outline/ui-button-outline.component';

type Props = StackScreenProps<MainRouterParamList, 'SignIn'>;

const SignInPage = ({ navigation }: Props): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.page}>
      <MinimalNavbar></MinimalNavbar>
      <ImageBackground
        style={styles.imageContainer}
        source={require('../assets/img/toll.png')}
      >
        <LinearGradient
          style={styles.gradient}
          colors={[theme['base-100'], 'transparent']}
        >
          <View style={{ flex: 1 }}></View>
          <View style={styles.formContainer}>
            <ScrollView>
              <UIHeading style={styles.title} size={25}>
                <UIHeading.Icon
                  position="left"
                  icon={faSignIn}
                ></UIHeading.Icon>
                <UIHeading.Text>Sign In</UIHeading.Text>
              </UIHeading>

              <UITextInput variant="edge-100" style={styles.input}>
                <UITextInput.Main>
                  <UITextInput.Label>First name</UITextInput.Label>
                  <UITextInput.IconContainer position="left">
                    <UITextInput.Icon icon={faUser}></UITextInput.Icon>
                  </UITextInput.IconContainer>
                  <UITextInput.Field placeholder="Enter first name"></UITextInput.Field>
                </UITextInput.Main>
              </UITextInput>
              <UITextInput variant="edge-100" style={styles.input}>
                <UITextInput.Main>
                  <UITextInput.Label>Last name</UITextInput.Label>
                  <UITextInput.IconContainer position="left">
                    <UITextInput.Icon icon={faUser}></UITextInput.Icon>
                  </UITextInput.IconContainer>
                  <UITextInput.Field placeholder="Enter last name"></UITextInput.Field>
                </UITextInput.Main>
              </UITextInput>
              <UITextInput variant="edge-100" style={styles.input}>
                <UITextInput.Main>
                  <UITextInput.Label>E-mail</UITextInput.Label>
                  <UITextInput.IconContainer position="left">
                    <UITextInput.Icon icon={faAt}></UITextInput.Icon>
                  </UITextInput.IconContainer>
                  <UITextInput.Field placeholder="Enter e-mail"></UITextInput.Field>
                </UITextInput.Main>
              </UITextInput>
              <UITextInput variant="edge-100" style={styles.input}>
                <UITextInput.Main>
                  <UITextInput.Label>Password</UITextInput.Label>
                  <UITextInput.IconContainer position="left">
                    <UITextInput.Icon icon={faKey}></UITextInput.Icon>
                  </UITextInput.IconContainer>
                  <UITextInput.Field placeholder="Enter password"></UITextInput.Field>
                </UITextInput.Main>
              </UITextInput>

              <UIButton
                style={styles.button}
                onPress={() => navigation.push('Start')}
                variant="primary"
                iconPosition="right"
              >
                <UIButton.Content>Sign up</UIButton.Content>
                <UIButton.Icon icon={faSignIn}></UIButton.Icon>
              </UIButton>

              <OrDivider></OrDivider>

              <UIButtonOutline
                onPress={() => navigation.push('SignIn')}
                variant="primary"
                iconPosition="right"
              >
                <UIButtonOutline.Content>Sign In</UIButtonOutline.Content>
                <UIButtonOutline.Icon icon={faFilePen}></UIButtonOutline.Icon>
              </UIButtonOutline>
            </ScrollView>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      backgroundColor: theme['base-100'],
      flex: 1,
    },
    gradient: {
      flex: 1,
    },
    imageContainer: {
      flex: 1,
    },
    formContainer: {
      backgroundColor: theme['base-100'],
      padding: 20,
      paddingTop: 30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    title: {
      marginLeft: 10,
    },
    input: {
      width: '100%',
      marginTop: 20,
    },
    button: {
      marginTop: 20,
    },
  });

export default SignInPage;
