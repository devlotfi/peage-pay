import { ActivityIndicator, StyleSheet } from 'react-native';
import UIHeading from '../elements/ui-heading/ui-heading.component';
import {
  faAt,
  faInfoCircle,
  faKey,
  faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import UITextInput from '../elements/ui-text-input/ui-text-input.component';
import UIButton from '../elements/ui-button/ui-button.component';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { AuthErrors } from '../__generated__/graphql';
import { useMutation } from '@apollo/client';
import { SIGN_UP_WITH_EMAIL } from '../graphql/mutations';
import UIAlert from '../elements/ui-alert/ui-alert.component';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { useTranslation } from 'react-i18next';

const signUpWithEmailValidationSchema = yup.object({
  firstName: yup.string().max(50).required(),
  lastName: yup.string().max(50).required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).max(512).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
});

interface SignUpWithEmailValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: SignUpWithEmailValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpWithEmailForm = (): JSX.Element => {
  const styles = makeStyles();
  const { theme } = useAppTheme();
  const { t } = useTranslation();

  const [signUpWithEmail, { loading, error }] = useMutation(
    SIGN_UP_WITH_EMAIL,
    {
      onCompleted() {
        //verifyEmailModalRef.current?.showModal();
      },
      onError(error) {
        switch (error.message) {
          case AuthErrors.VerificationRequestPending:
            //verifyEmailModalRef.current?.showModal();
            break;
        }
      },
    },
  );
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      validationSchema: signUpWithEmailValidationSchema,
      initialValues,
      onSubmit(values) {
        console.log(values);

        signUpWithEmail({
          variables: {
            signUpWithEmailInput: {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            },
          },
        });
      },
    });

  return (
    <>
      <UIHeading size={25}>
        <UIHeading.Icon position="left" icon={faSignIn}></UIHeading.Icon>
        <UIHeading.Text>{t('SIGN_UP')}</UIHeading.Text>
      </UIHeading>

      <UITextInput
        variant={errors.firstName && touched.firstName ? 'error' : 'edge-100'}
        style={styles.input}
      >
        <UITextInput.Main>
          <UITextInput.Label>{t('FIRST_NAME')}</UITextInput.Label>
          <UITextInput.IconContainer position="left">
            <UITextInput.Icon icon={faAt}></UITextInput.Icon>
          </UITextInput.IconContainer>
          <UITextInput.Field
            placeholder={t('FIRST_NAME')}
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
          ></UITextInput.Field>
        </UITextInput.Main>
        {errors.firstName && touched.firstName ? (
          <UITextInput.InfoMessage>{errors.firstName}</UITextInput.InfoMessage>
        ) : undefined}
      </UITextInput>
      <UITextInput
        variant={errors.lastName && touched.lastName ? 'error' : 'edge-100'}
        style={styles.input}
      >
        <UITextInput.Main>
          <UITextInput.Label>{t('LAST_NAME')}</UITextInput.Label>
          <UITextInput.IconContainer position="left">
            <UITextInput.Icon icon={faAt}></UITextInput.Icon>
          </UITextInput.IconContainer>
          <UITextInput.Field
            placeholder={t('LAST_NAME')}
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
          ></UITextInput.Field>
        </UITextInput.Main>
        {errors.lastName && touched.lastName ? (
          <UITextInput.InfoMessage>{errors.lastName}</UITextInput.InfoMessage>
        ) : undefined}
      </UITextInput>
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
            keyboardType="email-address"
            autoCapitalize="none"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
          ></UITextInput.Field>
        </UITextInput.Main>
        {errors.email && touched.email ? (
          <UITextInput.InfoMessage>{errors.email}</UITextInput.InfoMessage>
        ) : undefined}
      </UITextInput>
      <UITextInput
        variant={errors.password && touched.password ? 'error' : 'edge-100'}
        style={styles.input}
      >
        <UITextInput.Main>
          <UITextInput.Label>{t('PASSWORD')}</UITextInput.Label>
          <UITextInput.IconContainer position="left">
            <UITextInput.Icon icon={faKey}></UITextInput.Icon>
          </UITextInput.IconContainer>
          <UITextInput.Field
            placeholder={t('PASSWORD')}
            secureTextEntry
            autoCapitalize="none"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
          ></UITextInput.Field>
        </UITextInput.Main>
        {errors.password && touched.password ? (
          <UITextInput.InfoMessage>{errors.password}</UITextInput.InfoMessage>
        ) : undefined}
      </UITextInput>
      <UITextInput
        variant={
          errors.confirmPassword && touched.confirmPassword
            ? 'error'
            : 'edge-100'
        }
        style={styles.input}
      >
        <UITextInput.Main>
          <UITextInput.Label>{t('CONFIRM_PASSWORD')}</UITextInput.Label>
          <UITextInput.IconContainer position="left">
            <UITextInput.Icon icon={faKey}></UITextInput.Icon>
          </UITextInput.IconContainer>
          <UITextInput.Field
            placeholder={t('CONFIRM_PASSWORD')}
            secureTextEntry
            autoCapitalize="none"
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
          ></UITextInput.Field>
        </UITextInput.Main>
        {errors.confirmPassword && touched.confirmPassword ? (
          <UITextInput.InfoMessage>
            {errors.confirmPassword}
          </UITextInput.InfoMessage>
        ) : undefined}
      </UITextInput>

      {error ? (
        <UIAlert style={styles.alert} variant="error">
          <UIAlert.Icon position="left" icon={faInfoCircle}></UIAlert.Icon>
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
            <UIButton.Content>{t('SIGN_UP')}</UIButton.Content>
            <UIButton.Icon icon={faSignIn}></UIButton.Icon>
          </>
        )}
      </UIButton>
    </>
  );
};

const makeStyles = () =>
  StyleSheet.create({
    input: {
      width: '100%',
      marginTop: 20,
    },
    alert: {
      marginTop: 10,
    },
    button: {
      marginTop: 20,
    },
  });

export default SignUpWithEmailForm;
