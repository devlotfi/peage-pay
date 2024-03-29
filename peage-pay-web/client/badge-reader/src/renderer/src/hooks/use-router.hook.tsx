import { Navigate, createHashRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import {
  SendPasswordResetEmailPage,
  SignInPage,
  SignUpPage,
  useAuthGuard,
} from '@peage-pay-web/auth';
import DashboardLayout from '@renderer/layout/dashboard-layout.layout';
import BadgeScannerPage from '@renderer/pages/badge-scanner.page';

const useRouter = (): any => {
  const { authGuard, notAuthGuard } = useAuthGuard();

  const router = createHashRouter([
    {
      path: '/',
      element: <Navigate to={'/sign-in'}></Navigate>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: '/sign-in',
      element: notAuthGuard(
        <SignInPage
          title="Genral administration"
          googleExternalSignInUrl={`${import.meta.env.RENDERER_VITE_AUTH_COMMON_CLIENT_URL}/badge-reader/google`}
        ></SignInPage>,
      ),
    },
    {
      path: '/sign-up',
      element: notAuthGuard(
        <SignUpPage title="Genral administration"></SignUpPage>,
      ),
    },
    {
      path: '/send-password-reset-email',
      element: notAuthGuard(
        <SendPasswordResetEmailPage></SendPasswordResetEmailPage>,
      ),
    },
    {
      path: '/dashboard',
      element: authGuard(<DashboardLayout></DashboardLayout>),
      children: [
        {
          path: '/dashboard',
          element: <BadgeScannerPage></BadgeScannerPage>,
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
