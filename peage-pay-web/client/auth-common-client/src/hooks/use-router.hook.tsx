import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';

const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>auth</h1>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: '/verify',
      async lazy() {
        const { VerifyEmailPage } = await import('@peage-pay-web/auth');
        return {
          element: <VerifyEmailPage></VerifyEmailPage>,
        };
      },
    },
    {
      path: '/reset',
      async lazy() {
        const { ResetPasswordPage } = await import('@peage-pay-web/auth');
        return {
          element: <ResetPasswordPage></ResetPasswordPage>,
        };
      },
    },
  ]);

  return { router };
};

export default useRouter;
