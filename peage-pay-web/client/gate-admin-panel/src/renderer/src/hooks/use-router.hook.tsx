import { Navigate, createHashRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import {
  SendPasswordResetEmailPage,
  SignInPage,
  SignUpPage,
  useAuthGuard,
} from '@peage-pay-web/auth';
import DashboardLayout from '@renderer/layout/dashboard-layout.layout';
import ScanTicketPage from '@renderer/pages/scan-ticket.page';

const useRouter = () => {
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
          usage={'desktop'}
          title="Gate Admin"
          googleExternalSignInUrl={`${import.meta.env.RENDERER_VITE_AUTH_COMMON_CLIENT_URL}/badge-reader/google`}
        ></SignInPage>,
      ),
    },
    {
      path: '/sign-up',
      element: notAuthGuard(
        <SignUpPage usage={'desktop'} title="Gate Admin"></SignUpPage>,
      ),
    },
    {
      path: '/send-password-reset-email',
      element: notAuthGuard(
        <SendPasswordResetEmailPage
          usage={'desktop'}
        ></SendPasswordResetEmailPage>,
      ),
    },
    {
      path: '/dashboard',
      element: authGuard(<DashboardLayout></DashboardLayout>),
      children: [
        {
          path: '/dashboard',
          element: <h1>home</h1>,
        },
        {
          path: '/dashboard/scan',
          element: <ScanTicketPage></ScanTicketPage>,
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
