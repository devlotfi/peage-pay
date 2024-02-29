import { useMutation } from '@apollo/client';
import { faAt, faKey, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Link, LoaderDots, TextInput } from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { SIGN_IN_WITH_EMAIL } from '../graphql/mutations';
import {
  AuthErrors,
  RefreshTokenMode,
  UserErrors,
} from '../../__generated__/graphql';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const signInWithEmailValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

interface Values {
  email: string;
  password: string;
}

const initialValues: Values = {
  email: '',
  password: '',
};

const SignInWithEmailForm = (): JSX.Element => {
  const { setAuthData, setAccessToken } = useContext(AuthContext);
  const [signInWithEmail, { loading }] = useMutation(SIGN_IN_WITH_EMAIL, {
    onCompleted(data, clientOptions) {
      setAuthData({ baseUser: data.signInWithEmail.baseUser });
      setAccessToken(data.signInWithEmail.accessToken);
    },
    onError(error, clientOptions) {
      switch (error.message) {
        case UserErrors.UserNotFound:
          setFieldError('email', 'auth:errors.USER_NOT_FOUND');
          break;
        case AuthErrors.InvalidEmailOrPassword:
          setFieldError('email', 'auth:errors.INVALID_EMAIL_OR_PASSWORD');
          break;
        case AuthErrors.SignInWithEmaIlAttemptsExceeded:
          setFieldError('email', 'auth:errors.SIGN_IN_ATTEMPTS_EXCEEDED');
          break;
      }
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldError,
  } = useFormik({
    validationSchema: signInWithEmailValidationSchema,
    initialValues,
    onSubmit(values, formikHelpers) {
      signInWithEmail({
        variables: {
          signInWithEmailInput: {
            email: values.email,
            password: values.password,
          },
          refreshTokenMode: RefreshTokenMode.Cookie,
        },
      });
    },
  });

  return (
    <form onSubmit={handleSubmit} className="mt-[2rem]">
      <TextInput
        variant={errors.email && touched.email ? 'error' : 'edge-100'}
        className="w-full mb-[1.5rem]"
      >
        <TextInput.Main>
          <TextInput.Label>E-mail</TextInput.Label>
          <TextInput.Icon position={'left'}>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </TextInput.Icon>
          <TextInput.Field
            name="email"
            type="email"
            placeholder="Enter e-mail"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextInput.Field>
        </TextInput.Main>
        {errors.email && touched.email ? (
          <TextInput.InfoMessage>{errors.email}</TextInput.InfoMessage>
        ) : null}
      </TextInput>
      <TextInput
        variant={errors.password && touched.password ? 'error' : 'edge-100'}
        className="w-full mb-[1.5rem]"
      >
        <TextInput.Main>
          <TextInput.Label>Password</TextInput.Label>
          <TextInput.Icon position={'left'}>
            <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
          </TextInput.Icon>
          <TextInput.Field
            name="password"
            type="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextInput.Field>
        </TextInput.Main>
        {errors.password && touched.password ? (
          <TextInput.InfoMessage>{errors.password}</TextInput.InfoMessage>
        ) : null}
      </TextInput>
      <Link className="mb-[1rem]">Reset password</Link>

      <Button className="w-full" variant={'primary'} type="submit">
        {loading ? (
          <Button.Content>
            <LoaderDots dotProps={{ variant: 'color-content' }}></LoaderDots>
          </Button.Content>
        ) : (
          <>
            <Button.Icon position={'left'}>
              <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>Sign in</Button.Content>
          </>
        )}
      </Button>
    </form>
  );
};

export default SignInWithEmailForm;
