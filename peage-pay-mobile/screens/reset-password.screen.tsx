import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import type { StackScreenProps } from '@react-navigation/stack';
import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import UIButton from '../elements/ui-button/ui-button.component';
import { MainStackNavigatorParamList } from '../navigators/router';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { SEND_PASSWORD_RESET_EMAIL } from '../graphql/mutations';
import { useFormik } from 'formik';
import UIAlert from '../elements/ui-alert/ui-alert.component';
import UITextInput from '../elements/ui-text-input/ui-text-input.component';
import {
  faAt,
  faBackward,
  faCheck,
  faEnvelope,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import UIHeading from '../elements/ui-heading/ui-heading.component';
import UIButtonOutline from '../elements/ui-button-outline/ui-button-outline.component';

const sendPasswordResetEmailValidationSchema = yup.object({
  email: yup.string().email().required(),
});

interface SendPasswordResetEmailValues {
  email: string;
}

const initialValues: SendPasswordResetEmailValues = {
  email: '',
};

type Props = StackScreenProps<MainStackNavigatorParamList, 'SignIn'>;

const ResetPasswordScreen = ({ navigation }: Props): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { t } = useTranslation();

  const [sendPasswordResetEmail, { loading, data, error }] = useMutation(
    SEND_PASSWORD_RESET_EMAIL,
  );

  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    useFormik({
      validationSchema: sendPasswordResetEmailValidationSchema,
      initialValues,
      onSubmit(values) {
        sendPasswordResetEmail({
          variables: {
            sendPasswordResetEmailInput: {
              email: values.email,
            },
          },
        });
      },
    });

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
              <UIHeading size={25}>
                <UIHeading.Icon
                  position="left"
                  icon={faEnvelope}
                ></UIHeading.Icon>
                <UIHeading.Text>{t('RESET_PASSWORD')}</UIHeading.Text>
              </UIHeading>

              <UITextInput
                variant={errors.email && touched.email ? 'error' : 'edge-100'}
                style={styles.input}
              >
                <UITextInput.Main>
                  <UITextInput.Label>{t('EMAIL')}</UITextInput.Label>
                  <UITextInput.IconContainer position="left">
                    <UITextInput.Icon icon={faAt}></UITextInput.Icon>
                  </UITextInput.IconContainer>
                  <UITextInput.Field
                    placeholder={t('EMAIL')}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  ></UITextInput.Field>
                </UITextInput.Main>
                {errors.email && touched.email ? (
                  <UITextInput.InfoMessage>
                    {errors.email}
                  </UITextInput.InfoMessage>
                ) : undefined}
              </UITextInput>

              {data ? (
                <UIAlert variant={'success'} style={styles.alert}>
                  <UIAlert.Icon icon={faCheck} position={'left'}></UIAlert.Icon>
                  <UIAlert.Content>{t('OPERATION_SUCCESSFUL')}</UIAlert.Content>
                </UIAlert>
              ) : null}

              {error ? (
                <UIAlert style={styles.alert} variant="error">
                  <UIAlert.Icon
                    position="left"
                    icon={faInfoCircle}
                  ></UIAlert.Icon>
                  <UIAlert.Content>{t(error.message)}</UIAlert.Content>
                </UIAlert>
              ) : undefined}

              <UIButton
                style={styles.button}
                onPress={() => handleSubmit()}
                variant="primary"
                iconPosition="right"
              >
                {loading ? (
                  <ActivityIndicator
                    size={30}
                    color={theme['color-content']}
                  ></ActivityIndicator>
                ) : (
                  <>
                    <UIButton.Content>{t('SEND')}</UIButton.Content>
                    <UIButton.Icon icon={faEnvelope}></UIButton.Icon>
                  </>
                )}
              </UIButton>

              <UIButtonOutline
                onPress={() => navigation.push('SignIn')}
                style={styles.back}
                iconPosition="right"
              >
                <UIButtonOutline.Content>Back</UIButtonOutline.Content>
                <UIButtonOutline.Icon icon={faBackward}></UIButtonOutline.Icon>
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
    input: {
      width: '100%',
      marginTop: 20,
    },
    button: {
      marginTop: 20,
    },
    alert: {
      marginTop: 10,
    },
    back: {
      marginTop: 10,
    },
  });

export default ResetPasswordScreen;
