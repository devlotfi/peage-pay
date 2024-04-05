import { Navigate, createHashRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import {
  SendPasswordResetEmailPage,
  SignInPage,
  SignUpPage,
  useAuthGuard,
} from '@peage-pay-web/auth';
import DashboardLayout from '@renderer/layout/dashboard-layout.layout';
import RfidTagLayout from '@renderer/layout/rfid-tag.layout';
import BaseUserListPage from '@renderer/pages/base-user/base-user-list.page';
import RfisTagListPage from '@renderer/pages/rfid-tag/rfid-tag-list.page';
import AddRfidTagPage from '@renderer/pages/rfid-tag/add-rfid-tag.page';

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
          title="Moderator"
          googleExternalSignInUrl={`${import.meta.env.RENDERER_VITE_AUTH_COMMON_CLIENT_URL}/badge-reader/google`}
        ></SignInPage>,
      ),
    },
    {
      path: '/sign-up',
      element: notAuthGuard(<SignUpPage title="Moderator"></SignUpPage>),
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
          element: <h1>home</h1>,
        },

        {
          path: '/dashboard/base-user/list',
          element: <BaseUserListPage></BaseUserListPage>,
        },

        {
          path: '/dashboard/rfid-tag',
          element: <RfidTagLayout></RfidTagLayout>,
          children: [
            {
              path: '/dashboard/rfid-tag/add/:baseUserId',
              element: <AddRfidTagPage></AddRfidTagPage>,
            },
            {
              path: '/dashboard/rfid-tag/list/:baseUserId',
              element: <RfisTagListPage></RfisTagListPage>,
            },
          ],
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
