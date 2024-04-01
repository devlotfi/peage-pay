import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import {
  SendPasswordResetEmailPage,
  SignInPage,
  SignUpPage,
  useAuthGuard,
} from '@peage-pay-web/auth';
import AddLocalWeeklyPricePage from '../pages/price/add/add-local-weekly-price.page';
import AddLocalMonthlyPricePage from '../pages/price/add/add-local-monthly-price.page';
import AddLocalYearlyPricePage from '../pages/price/add/add-local-yearly-price.page';
import AddLocalCustomPricePage from '../pages/price/add/add-local-custom-price.page';
import DailyPriceLocalListPage from '../pages/price/list/daily-price-local-list.page';
import WeeklyPriceLocalListPage from '../pages/price/list/weekly-price-local-list.page';
import MonthlyPriceLocalListPage from '../pages/price/list/monthly-price-local-list.page';
import YearlyPriceLocalListPage from '../pages/price/list/yearly-price-local-list.page';
import CustomPriceGlobalListPage from '../pages/price/list/custom-price-local-list.page';
import AddLocalDailyPricePage from '../pages/price/add/add-local-daily-price.page';
import PriceListLayout from '../layout/price-list.layout';
import AddPriceLayout from '../layout/add-price.layout';
import DashboardLayout from '../layout/dashboard-layout.layout';
import EditTollPage from '../pages/toll/edit-toll.page';
import AutomaticGateListPage from '../pages/automatic-gate/automatic-gate-list.page';
import AddAutomaticGatePage from '../pages/automatic-gate/add-automatic-gate.page';
import EditAutomaticGatePage from '../pages/automatic-gate/edit-automatic-gate.page';
import AutomaticGateLayout from '../layout/automatic-gate.layout';

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
        <SignInPage title="Toll administration"></SignInPage>,
      ),
    },
    {
      path: '/sign-up',
      element: notAuthGuard(
        <SignUpPage title="Toll administration"></SignUpPage>,
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
          path: '/dashboard/toll/edit',
          element: <EditTollPage></EditTollPage>,
        },

        {
          path: '/dashboard/automatic-gate',
          element: <AutomaticGateLayout></AutomaticGateLayout>,
          children: [
            {
              path: '/dashboard/automatic-gate/list',
              element: <AutomaticGateListPage></AutomaticGateListPage>,
            },
            {
              path: '/dashboard/automatic-gate/add',
              element: <AddAutomaticGatePage></AddAutomaticGatePage>,
            },
            {
              path: '/dashboard/automatic-gate/edit/:automaticGateId',
              element: <EditAutomaticGatePage></EditAutomaticGatePage>,
            },
          ],
        },

        {
          path: '/dashboard/price/add',
          element: <AddPriceLayout></AddPriceLayout>,
          children: [
            {
              path: '/dashboard/price/add/daily',
              element: <AddLocalDailyPricePage></AddLocalDailyPricePage>,
            },
            {
              path: '/dashboard/price/add/weekly',
              element: <AddLocalWeeklyPricePage></AddLocalWeeklyPricePage>,
            },
            {
              path: '/dashboard/price/add/monthly',
              element: <AddLocalMonthlyPricePage></AddLocalMonthlyPricePage>,
            },
            {
              path: '/dashboard/price/add/yearly',
              element: <AddLocalYearlyPricePage></AddLocalYearlyPricePage>,
            },
            {
              path: '/dashboard/price/add/custom',
              element: <AddLocalCustomPricePage></AddLocalCustomPricePage>,
            },
          ],
        },

        {
          path: '/dashboard/price/list',
          element: <PriceListLayout></PriceListLayout>,
          children: [
            {
              path: '/dashboard/price/list/daily',
              element: <DailyPriceLocalListPage></DailyPriceLocalListPage>,
            },
            {
              path: '/dashboard/price/list/weekly',
              element: <WeeklyPriceLocalListPage></WeeklyPriceLocalListPage>,
            },
            {
              path: '/dashboard/price/list/monthly',
              element: <MonthlyPriceLocalListPage></MonthlyPriceLocalListPage>,
            },
            {
              path: '/dashboard/price/list/yearly',
              element: <YearlyPriceLocalListPage></YearlyPriceLocalListPage>,
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
