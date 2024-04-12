import { ScrollView, StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import type { StackScreenProps } from '@react-navigation/stack';
import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import OrDivider from '../layout/or-divider.component';
import UIButtonOutline from '../elements/ui-button-outline/ui-button-outline.component';
import { MainStackNavigatorParamList } from '../navigators/router';
import SignUpWithEmailForm from '../components/sign-up-with-email-form.component';
import { useTranslation } from 'react-i18next';

type Props = StackScreenProps<MainStackNavigatorParamList, 'SignIn'>;

const SignInPage = ({ navigation }: Props): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { t } = useTranslation();

  return (
    <View style={styles.page}>
      <ImageBackground
        style={styles.imageContainer}
        source={require('../assets/img/toll-bg.png')}
      >
        <LinearGradient
          style={styles.gradient}
          colors={[theme['base-100'], 'transparent']}
        >
          <View style={{ flex: 1 }}></View>
          <View style={styles.formContainer}>
            <ScrollView>
              <SignUpWithEmailForm></SignUpWithEmailForm>

              <OrDivider></OrDivider>

              <UIButtonOutline
                onPress={() => navigation.push('SignIn')}
                variant="primary"
                iconPosition="right"
              >
                <UIButtonOutline.Content>
                  {t('SIGN_IN')}
                </UIButtonOutline.Content>
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
