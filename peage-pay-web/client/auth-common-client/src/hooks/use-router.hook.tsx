import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import {
  GoogleOAuthWrapper,
  ResetPasswordPage,
  SignInWithGoogleExternalPage,
  VerifyEmailPage,
} from '@peage-pay-web/auth';

const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>auth</h1>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: '/verify',
      element: <VerifyEmailPage></VerifyEmailPage>,
    },
    {
      path: '/reset',
      element: <ResetPasswordPage></ResetPasswordPage>,
    },
    {
      path: '/badge-reader/google',
      element: (
        <GoogleOAuthWrapper>
          <SignInWithGoogleExternalPage></SignInWithGoogleExternalPage>
        </GoogleOAuthWrapper>
      ),
    },
  ]);

  return { router };
};

export default useRouter;
