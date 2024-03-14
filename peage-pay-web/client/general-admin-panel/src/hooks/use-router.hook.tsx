import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import DashboardLayout from '../layout/dashboard-layout.component';
import { useAuthGuard } from '@peage-pay-web/auth';
import AddHighwayPage from '../pages/highway/add-highway.page';
import HighwayListPage from '../pages/highway/highway-list.page';
import EditHighwayPage from '../pages/highway/edit-highway.page';
import GraphTollDistanceListPage from '../pages/graph-toll-distance/graph-toll-distance-list.page';
import AddGraphTollDistancePage from '../pages/graph-toll-distance/add-graph-toll-distance.page';
import SubscriptionListPage from '../pages/subscription/subscription-list.page';
import AddSubscriptionPage from '../pages/subscription/add-subscription.page';
import EditSubscriptionPage from '../pages/subscription/edit-subscription.page';
import TollListPage from '../pages/toll/toll-list.page';
import AddTollPage from '../pages/toll/add-toll.page';
import EditTollPage from '../pages/toll/edit-toll.page';
import BaseUserListPage from '../pages/user/base-user-list.page';
import EditUserPage from '../pages/user/edit-user.page';
import TollNetworkListPage from '../pages/toll-network/toll-network-list.page';
import AddTollNetworkPage from '../pages/toll-network/add-toll-network.page';
import EditTollNetworkPage from '../pages/toll-network/edit-toll-network.page';
import TollNetworkGraphPage from '../pages/toll-network/toll-network-graph.page';

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
          path: '/dashboard/graph-toll-distance/list/:tollId',
          element: <GraphTollDistanceListPage></GraphTollDistanceListPage>,
        },
        {
          path: '/dashboard/graph-toll-distance/add/:tollId',
          element: <AddGraphTollDistancePage></AddGraphTollDistancePage>,
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
          path: '/dashboard/toll-network/list',
          element: <TollNetworkListPage></TollNetworkListPage>,
        },
        {
          path: '/dashboard/toll-network/add',
          element: <AddTollNetworkPage></AddTollNetworkPage>,
        },
        {
          path: '/dashboard/toll-network/edit/:tollNetworkId',
          element: <EditTollNetworkPage></EditTollNetworkPage>,
        },
        {
          path: '/dashboard/toll-network/graph/:tollNetworkId',
          element: <TollNetworkGraphPage></TollNetworkGraphPage>,
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
          path: '/dashboard/toll/list/:tollNetworkId',
          element: <TollListPage></TollListPage>,
        },
        {
          path: '/dashboard/toll/add/:tollNetworkId',
          element: <AddTollPage></AddTollPage>,
        },
        {
          path: '/dashboard/toll/edit/:tollId',
          element: <EditTollPage></EditTollPage>,
        },

        {
          path: '/dashboard/user/list',
          element: <BaseUserListPage></BaseUserListPage>,
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
