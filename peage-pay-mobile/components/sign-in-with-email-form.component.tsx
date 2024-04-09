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
import { AuthErrors, RefreshTokenMode } from '../__generated__/graphql';
import { useMutation } from '@apollo/client';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { SIGN_IN_WITH_EMAIL } from '../graphql/mutations';
import UIAlert from '../elements/ui-alert/ui-alert.component';
import UILink from '../elements/ui-link/ui-links.component';
import VerificationRequestPendingModal from './verification-request-pending-modal.component';
import { AccessTokenContext } from '../context/access-token.context';
import { UserAuthUtils } from '../utils/utils';
import { useAppTheme } from '../hooks/use-app-theme.hook';

const signInWithEmailValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

interface SignInWithEmailValues {
  email: string;
  password: string;
}

const initialValues: SignInWithEmailValues = {
  email: '',
  password: '',
};

const SignInWithEmailForm = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles();
  const { setAccessToken } = useContext(AccessTokenContext);
  const { setAuthData } = useContext(AuthContext);
  const [
    showVerificationRequestPendingModal,
    setShowVerificationRequestPendingModal,
  ] = useState<boolean>(false);

  const [signInWithEmail, { loading, error }] = useMutation(
    SIGN_IN_WITH_EMAIL,
    {
      async onCompleted(data) {
        await UserAuthUtils.setRefreshToken(data.signInWithEmail.refreshToken);
        setAccessToken(data.signInWithEmail.accessToken);

        setAuthData({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          baseUser: data.signInWithEmail.baseUser,
          userRoles: data.signInWithEmail.roles,
        });
      },
      onError(error) {
        console.log(error);

        switch (error.message) {
          case AuthErrors.VerificationRequestPending:
            setShowVerificationRequestPendingModal(true);
            break;
        }
      },
    },
  );
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      validationSchema: signInWithEmailValidationSchema,
      initialValues,
      onSubmit(values) {
        console.log(values);

        signInWithEmail({
          variables: {
            signInWithEmailInput: {
              email: values.email,
              password: values.password,
            },
            refreshTokenMode: RefreshTokenMode.PlainText,
          },
        });
      },
    });

  return (
    <>
      <VerificationRequestPendingModal
        animationType="fade"
        transparent={true}
        visible={showVerificationRequestPendingModal}
        onClose={() => setShowVerificationRequestPendingModal(false)}
      ></VerificationRequestPendingModal>

      <UIHeading style={styles.title} size={25}>
        <UIHeading.Icon position="left" icon={faSignIn}></UIHeading.Icon>
        <UIHeading.Text>Sign In</UIHeading.Text>
      </UIHeading>

      <UITextInput
        variant={errors.email && touched.email ? 'error' : 'edge-100'}
        style={styles.input}
      >
        <UITextInput.Main>
          <UITextInput.Label>E-mail</UITextInput.Label>
          <UITextInput.IconContainer position="left">
            <UITextInput.Icon icon={faAt}></UITextInput.Icon>
          </UITextInput.IconContainer>
          <UITextInput.Field
            placeholder="Enter e-mail"
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
          <UITextInput.Label>Password</UITextInput.Label>
          <UITextInput.IconContainer position="left">
            <UITextInput.Icon icon={faKey}></UITextInput.Icon>
          </UITextInput.IconContainer>
          <UITextInput.Field
            placeholder="Enter password"
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

      {error ? (
        <UIAlert style={styles.alert} variant="error">
          <UIAlert.Icon position="left" icon={faInfoCircle}></UIAlert.Icon>
          <UIAlert.Content>{error.message}</UIAlert.Content>
        </UIAlert>
      ) : undefined}

      <UILink>Reset password</UILink>
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
            <UIButton.Content>Sign In</UIButton.Content>
            <UIButton.Icon icon={faSignIn}></UIButton.Icon>
          </>
        )}
      </UIButton>
    </>
  );
};

const makeStyles = () =>
  StyleSheet.create({
    title: {
      marginLeft: 10,
    },
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

export default SignInWithEmailForm;
