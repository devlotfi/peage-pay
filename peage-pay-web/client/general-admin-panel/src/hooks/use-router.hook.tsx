import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import {
  SendPasswordResetEmailPage,
  SignInPage,
  SignUpPage,
  useAuthGuard,
} from '@peage-pay-web/auth';
import { lazy } from 'react';

const DashboardLayout = lazy(
  () => import('../layout/dashboard-layout.component'),
);
const PriceLayout = lazy(() => import('../layout/price-layout.component'));

const AddHighwayPage = lazy(() => import('../pages/highway/add-highway.page'));
const HighwayListPage = lazy(
  () => import('../pages/highway/highway-list.page'),
);
const EditHighwayPage = lazy(
  () => import('../pages/highway/edit-highway.page'),
);
const SectionListPage = lazy(
  () => import('../pages/section/section-list.page'),
);
const AddSectionPage = lazy(() => import('../pages/section/add-section.page'));
const SubscriptionListPage = lazy(
  () => import('../pages/subscription/subscription-list.page'),
);
const AddSubscriptionPage = lazy(
  () => import('../pages/subscription/add-subscription.page'),
);
const EditSubscriptionPage = lazy(
  () => import('../pages/subscription/edit-subscription.page'),
);
const TollListPage = lazy(() => import('../pages/toll/toll-list.page'));
const AddTollPage = lazy(() => import('../pages/toll/add-toll.page'));
const EditTollPage = lazy(() => import('../pages/toll/edit-toll.page'));
const BaseUserListPage = lazy(
  () => import('../pages/user/base-user-list.page'),
);
const EditUserPage = lazy(() => import('../pages/user/edit-user.page'));
const TollNetworkListPage = lazy(
  () => import('../pages/toll-network/toll-network-list.page'),
);
const AddTollNetworkPage = lazy(
  () => import('../pages/toll-network/add-toll-network.page'),
);
const EditTollNetworkPage = lazy(
  () => import('../pages/toll-network/edit-toll-network.page'),
);
const TollNetworkGraphPage = lazy(
  () => import('../pages/toll-network/toll-network-graph.page'),
);

const useRouter = () => {
  const { authGuard } = useAuthGuard();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={'/sign-in'}></Navigate>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: '/sign-in',
      element: <SignInPage title="Genral administration"></SignInPage>,
    },
    {
      path: '/sign-up',
      element: <SignUpPage title="Genral administration"></SignUpPage>,
    },
    {
      path: '/send-password-reset-email',
      element: <SendPasswordResetEmailPage></SendPasswordResetEmailPage>,
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
          path: '/dashboard/section/list/:tollId',
          element: <SectionListPage></SectionListPage>,
        },
        {
          path: '/dashboard/section/add/:tollId',
          element: <AddSectionPage></AddSectionPage>,
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

        {
          path: '/dashboard/price',
          element: <PriceLayout></PriceLayout>,
          children: [
            {
              path: '/dashboard/price/daily/add',
              element: <h1>lol</h1>,
            },
            {
              path: '/dashboard/price/daily/list',
              element: <h1>lol</h1>,
            },

            {
              path: '/dashboard/price/weekly/add',
              element: <h1>lol</h1>,
            },
            {
              path: '/dashboard/price/weekly/list',
              element: <h1>lol</h1>,
            },

            {
              path: '/dashboard/price/monthly/add',
              element: <h1>lol</h1>,
            },
            {
              path: '/dashboard/price/monthly/list',
              element: <h1>lol</h1>,
            },

            {
              path: '/dashboard/price/yearly/add',
              element: <h1>lol</h1>,
            },
            {
              path: '/dashboard/price/yearly/list',
              element: <h1>lol</h1>,
            },

            {
              path: '/dashboard/price/custom/add',
              element: <h1>lol</h1>,
            },
            {
              path: '/dashboard/price/custom/list',
              element: <h1>lol</h1>,
            },
          ],
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
