import { faKey, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Google } from '@peage-pay-web/assets';
import { Button, LoaderDots, TextInput } from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { RefreshTokenMode } from '../../__generated__/graphql';
import { useMutation } from '@apollo/client';
import { AuthContext } from '../..';
import { SIGN_IN_WITH_GOOGLE } from '../../graphql/mutations';
import * as yup from 'yup';

const signInWithGoogleExternalValidationSchema = yup.object({
  accessToken: yup.string().required(),
});

interface SignInWithGoogleExternalValues {
  accessToken: string;
}

const initialValues: SignInWithGoogleExternalValues = {
  accessToken: '',
};

interface SignInWithGoogleFormExternalProps {
  url: string;
}

const SignInWithGoogleFormExternal = ({
  url,
}: SignInWithGoogleFormExternalProps): JSX.Element => {
  const [browserOpened, setBrowserOpened] = useState<boolean>(false);
  const { setAccessToken, setAuthData } = useContext(AuthContext);

  const [signInWithGoogle, { loading }] = useMutation(SIGN_IN_WITH_GOOGLE, {
    onCompleted(data) {
      setAuthData({
        // @ts-ignore
        baseUser: data.signInWithGoogle.baseUser,
        userRoles: data.signInWithGoogle.roles,
      });
      setAccessToken(data.signInWithGoogle.accessToken);
    },
    onError(error) {
      console.log(error);
    },
  });

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      validationSchema: signInWithGoogleExternalValidationSchema,
      initialValues,
      onSubmit(values) {
        signInWithGoogle({
          variables: {
            refreshTokenMode: RefreshTokenMode.Cookie,
            signInWithGoogleInput: {
              token: values.accessToken,
            },
          },
        });
      },
    });

  const openBrowser = () => {
    setBrowserOpened(true);
    window.open(url);
  };

  if (browserOpened) {
    return (
      <form onSubmit={handleSubmit} className="mt-[2rem]">
        <TextInput
          variant={
            errors.accessToken && touched.accessToken ? 'error' : 'edge-100'
          }
          className="w-full mb-[1.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>Token</TextInput.Label>
            <TextInput.Icon position={'left'}>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="accessToken"
              type="text"
              placeholder="Enter token"
              value={values.accessToken}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextInput.Field>
          </TextInput.Main>
          {errors.accessToken && touched.accessToken ? (
            <TextInput.InfoMessage>{errors.accessToken}</TextInput.InfoMessage>
          ) : null}
        </TextInput>

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
  }

  return (
    <Button
      onClick={openBrowser}
      className="w-full mt-[2rem]"
      variant={'base-200'}
    >
      <Button.Icon position={'left'}>
        <img src={Google} alt="" />
      </Button.Icon>
      <Button.Content>Sign in with google</Button.Content>
    </Button>
  );
};

export default SignInWithGoogleFormExternal;
