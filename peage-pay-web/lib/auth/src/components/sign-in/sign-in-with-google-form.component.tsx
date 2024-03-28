import { useMutation } from '@apollo/client';
import { Google } from '@peage-pay-web/assets';
import { Button, LoaderDots } from '@peage-pay-web/ui';
import { useGoogleLogin } from '@react-oauth/google';
import { SIGN_IN_WITH_GOOGLE } from '../../graphql/mutations';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import { RefreshTokenMode } from '../../__generated__/graphql';

const SignInWithGoogleForm = (): JSX.Element => {
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
  const googleLogin = useGoogleLogin({
    onSuccess(tokenResponse) {
      signInWithGoogle({
        variables: {
          refreshTokenMode: RefreshTokenMode.Cookie,
          signInWithGoogleInput: {
            token: tokenResponse.access_token,
          },
        },
      });
    },
  });

  return (
    <Button
      onClick={() => googleLogin()}
      className="w-full mt-[2rem]"
      variant={'base-200'}
    >
      {loading ? (
        <LoaderDots dotProps={{ variant: 'primary' }}></LoaderDots>
      ) : (
        <>
          <Button.Icon position={'left'}>
            <img src={Google} alt="" />
          </Button.Icon>
          <Button.Content>Sign in with google</Button.Content>
        </>
      )}
    </Button>
  );
};

export default SignInWithGoogleForm;
