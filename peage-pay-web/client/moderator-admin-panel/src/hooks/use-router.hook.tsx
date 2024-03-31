import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import {
  SendPasswordResetEmailPage,
  SignInPage,
  SignUpPage,
  useAuthGuard,
} from '@peage-pay-web/auth';
import BaseUserListPage from '../pages/base-user/base-user-list.page';
import DashboardLayout from '../layout/dashboard-layout.layout';
import RfidTagLayout from '../layout/rfid-tag.layout';
import AddRfidTagPage from '../pages/rfid-tag/add-rfid-tag.page';
import RfisTagListPage from '../pages/rfid-tag/rfid-tag-list.page';

const useRouter = () => {
  const { authGuard, notAuthGuard } = useAuthGuard();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={'/sign-in'}></Navigate>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: '/sign-in',
      element: notAuthGuard(
        <SignInPage title="System moderation"></SignInPage>,
      ),
    },
    {
      path: '/sign-up',
      element: notAuthGuard(
        <SignUpPage title="System moderation"></SignUpPage>,
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
