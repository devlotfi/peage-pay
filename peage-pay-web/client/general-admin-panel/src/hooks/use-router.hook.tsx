import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import {
  SendPasswordResetEmailPage,
  SignInPage,
  SignUpPage,
  useAuthGuard,
} from '@peage-pay-web/auth';
import HighwayLayout from '../layout/highway.layout';
import TollNetworkLayout from '../layout/toll-network.layout';
import SubscriptionLayout from '../layout/subscription.layout';
import TollLayout from '../layout/toll.layout';
import AddGlobalWeeklyPricePage from '../pages/price/add/add-global-weekly-price.page';
import AddGlobalMonthlyPricePage from '../pages/price/add/add-global-monthly-price.page';
import AddGlobalYearlyPricePage from '../pages/price/add/add-global-yearly-price.page';
import AddGlobalCustomPricePage from '../pages/price/add/add-global-custom-price.page';
import DailyPriceGlobalListPage from '../pages/price/list/daily-price-global-list.page';
import WeeklyPriceGlobalListPage from '../pages/price/list/weekly-price-global-list.page';
import MonthlyPriceGlobalListPage from '../pages/price/list/monthly-price-global-list.page';
import YearlyPriceGlobalListPage from '../pages/price/list/yearly-price-global-list.page';
import CustomPriceGlobalListPage from '../pages/price/list/custom-price-global-list.page';
import AddGlobalDailyPricePage from '../pages/price/add/add-global-daily-price.page';
import EditSectionPage from '../pages/section/edit-section.page';
import SectionLayout from '../layout/section.layout';
import TollDistanceListPage from '../pages/toll-distance/toll-distance-list.page';
import EditDefaultPricePage from '../pages/price/add/edit-default-price.page';
import HomePage from '../pages/home/home.page';
import AddPriceLayout from '../layout/add-price.layout';
import DashboardLayout from '../layout/dashboard-layout.layout';
import PriceListLayout from '../layout/price-list.layout';
import BaseUserListPage from '../pages/base-user/base-user-list.page';
import AddHighwayPage from '../pages/highway/add-highway.page';
import EditHighwayPage from '../pages/highway/edit-highway.page';
import HighwayListPage from '../pages/highway/highway-list.page';
import AddSectionPage from '../pages/section/add-section.page';
import SectionListPage from '../pages/section/section-list.page';
import AddSubscriptionPage from '../pages/subscription/add-subscription.page';
import EditSubscriptionPage from '../pages/subscription/edit-subscription.page';
import SubscriptionListPage from '../pages/subscription/subscription-list.page';
import AddTollNetworkPage from '../pages/toll-network/add-toll-network.page';
import EditTollNetworkPage from '../pages/toll-network/edit-toll-network.page';
import TollNetworkGraphPage from '../pages/toll-network/toll-network-graph.page';
import TollNetworkListPage from '../pages/toll-network/toll-network-list.page';
import AddTollPage from '../pages/toll/add-toll.page';
import EditTollPage from '../pages/toll/edit-toll.page';
import TollListPage from '../pages/toll/toll-list.page';

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
        <SignInPage title="Genral administration"></SignInPage>,
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
          element: <HomePage></HomePage>,
        },

        {
          path: '/dashboard/toll',
          element: <SectionLayout></SectionLayout>,
          children: [
            {
              path: '/dashboard/toll/edit/:tollNetworkId/:tollId',
              element: <EditTollPage></EditTollPage>,
            },
          ],
        },

        {
          path: '/dashboard/section/edit/:fromTollId/:toTollId',
          element: <EditSectionPage></EditSectionPage>,
        },

        {
          path: '/dashboard/highway',
          element: <HighwayLayout></HighwayLayout>,
          children: [
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
          ],
        },

        {
          path: '/dashboard/toll-network',
          element: <TollNetworkLayout></TollNetworkLayout>,
          children: [
            {
              path: '/dashboard/toll-network/list',
              element: <TollNetworkListPage></TollNetworkListPage>,
            },
            {
              path: '/dashboard/toll-network/add',
              element: <AddTollNetworkPage></AddTollNetworkPage>,
            },
          ],
        },

        {
          path: '/dashboard/subscription',
          element: <SubscriptionLayout></SubscriptionLayout>,
          children: [
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
          ],
        },

        {
          path: '/dashboard/toll',
          element: <TollLayout></TollLayout>,
          children: [
            {
              path: '/dashboard/toll/list/:tollNetworkId',
              element: <TollListPage></TollListPage>,
            },
            {
              path: '/dashboard/toll/add/:tollNetworkId',
              element: <AddTollPage></AddTollPage>,
            },
            {
              path: '/dashboard/toll/edit/:tollNetworkId/:tollId',
              element: <EditTollPage></EditTollPage>,
            },
            {
              path: '/dashboard/toll/toll-network/edit/:tollNetworkId',
              element: <EditTollNetworkPage></EditTollNetworkPage>,
            },
            {
              path: '/dashboard/toll/toll-network/graph/:tollNetworkId',
              element: <TollNetworkGraphPage></TollNetworkGraphPage>,
            },
            {
              path: '/dashboard/toll/section/list/:tollNetworkId',
              element: <SectionListPage></SectionListPage>,
            },
            {
              path: '/dashboard/toll/section/add/:tollNetworkId',
              element: <AddSectionPage></AddSectionPage>,
            },
            {
              path: '/dashboard/toll/toll-distance/list/:tollNetworkId',
              element: <TollDistanceListPage></TollDistanceListPage>,
            },
          ],
        },

        {
          path: '/dashboard/base-user/list',
          element: <BaseUserListPage></BaseUserListPage>,
        },

        {
          path: '/dashboard/price/add',
          element: <AddPriceLayout></AddPriceLayout>,
          children: [
            {
              path: '/dashboard/price/add/default',
              element: <EditDefaultPricePage></EditDefaultPricePage>,
            },
            {
              path: '/dashboard/price/add/daily',
              element: <AddGlobalDailyPricePage></AddGlobalDailyPricePage>,
            },
            {
              path: '/dashboard/price/add/weekly',
              element: <AddGlobalWeeklyPricePage></AddGlobalWeeklyPricePage>,
            },
            {
              path: '/dashboard/price/add/monthly',
              element: <AddGlobalMonthlyPricePage></AddGlobalMonthlyPricePage>,
            },
            {
              path: '/dashboard/price/add/yearly',
              element: <AddGlobalYearlyPricePage></AddGlobalYearlyPricePage>,
            },
            {
              path: '/dashboard/price/add/custom',
              element: <AddGlobalCustomPricePage></AddGlobalCustomPricePage>,
            },
          ],
        },

        {
          path: '/dashboard/price/list',
          element: <PriceListLayout></PriceListLayout>,
          children: [
            {
              path: '/dashboard/price/list/daily',
              element: <DailyPriceGlobalListPage></DailyPriceGlobalListPage>,
            },
            {
              path: '/dashboard/price/list/weekly',
              element: <WeeklyPriceGlobalListPage></WeeklyPriceGlobalListPage>,
            },
            {
              path: '/dashboard/price/list/monthly',
              element: (
                <MonthlyPriceGlobalListPage></MonthlyPriceGlobalListPage>
              ),
            },
            {
              path: '/dashboard/price/list/yearly',
              element: <YearlyPriceGlobalListPage></YearlyPriceGlobalListPage>,
            },
            {
              path: '/dashboard/price/list/custom',
              element: <CustomPriceGlobalListPage></CustomPriceGlobalListPage>,
            },
          ],
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
