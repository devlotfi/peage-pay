import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import DashboardLayout from '../layout/dashboard-layout.component';
import { useAuthGuard } from '@peage-pay-web/auth';
import AddHighwayPage from '../pages/highway/add-highway.page';
import HighwayListPage from '../pages/highway/highway-list.page';
import EditHighwayPage from '../pages/highway/edit-highway.page';
import AdjacentTollDistanceListPage from '../pages/adjacent-toll-distance/adjacent-toll-distance-list.page';
import AddAdjacentTollDistancePage from '../pages/adjacent-toll-distance/add-adjacent-toll-distance.page';
import SubscriptionListPage from '../pages/subscription/subscription-list.page';
import AddSubscriptionPage from '../pages/subscription/add-subscription.page';
import EditSubscriptionPage from '../pages/subscription/edit-subscription.page';
import TollListPage from '../pages/toll/toll-list.page';
import AddTollPage from '../pages/toll/add-toll.page';
import EditTollPage from '../pages/toll/edit-toll.page';
import UserListPage from '../pages/user/user-list.page';
import EditUserPage from '../pages/user/edit-user.page';

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
      async lazy() {
        const { SignInPage } = await import('@peage-pay-web/auth');
        return {
          element: notAuthGuard(
            <SignInPage title="General admin"></SignInPage>,
          ),
        };
      },
    },
    {
      path: '/sign-up',
      async lazy() {
        const { SignUpPage } = await import('@peage-pay-web/auth');
        return {
          element: notAuthGuard(
            <SignUpPage title="General admin"></SignUpPage>,
          ),
        };
      },
    },
    {
      path: '/send-password-reset-email',
      async lazy() {
        const { SendPasswordResetEmailPage } = await import(
          '@peage-pay-web/auth'
        );
        return {
          element: notAuthGuard(
            <SendPasswordResetEmailPage></SendPasswordResetEmailPage>,
          ),
        };
      },
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
          path: '/dashboard/adjacent-toll-distance/list',
          element: (
            <AdjacentTollDistanceListPage></AdjacentTollDistanceListPage>
          ),
        },
        {
          path: '/dashboard/adjacent-toll-distance/add',
          element: <AddAdjacentTollDistancePage></AddAdjacentTollDistancePage>,
        },

        {
          path: '/dashboard/highway/list',
          element: <HighwayListPage></HighwayListPage>,
        },
        {
          path: '/dashboard/highway/add',
          element: <AddHighwayPage></AddHighwayPage>,
        },
        {
          path: '/dashboard/highway/edit/:highwayId',
          element: <EditHighwayPage></EditHighwayPage>,
        },

        {
          path: '/dashboard/subscription/list',
          element: <SubscriptionListPage></SubscriptionListPage>,
        },
        {
          path: '/dashboard/subscription/add',
          element: <AddSubscriptionPage></AddSubscriptionPage>,
        },
        {
          path: '/dashboard/subscription/edit/:subscriptionId',
          element: <EditSubscriptionPage></EditSubscriptionPage>,
        },

        {
          path: '/dashboard/toll/list',
          element: <TollListPage></TollListPage>,
        },
        {
          path: '/dashboard/toll/add',
          element: <AddTollPage></AddTollPage>,
        },
        {
          path: '/dashboard/toll/edit/:tollId',
          element: <EditTollPage></EditTollPage>,
        },

        {
          path: '/dashboard/user/list',
          element: <UserListPage></UserListPage>,
        },
        {
          path: '/dashboard/user/edit/:userId',
          element: <EditUserPage></EditUserPage>,
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
