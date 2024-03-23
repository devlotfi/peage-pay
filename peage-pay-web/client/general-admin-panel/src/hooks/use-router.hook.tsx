import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@peage-pay-web/ui";
import {
  SendPasswordResetEmailPage,
  SignInPage,
  SignUpPage,
  useAuthGuard,
} from "@peage-pay-web/auth";
import { lazy } from "react";
import HighwayLayout from "../layout/highway.layout";
import TollNetworkLayout from "../layout/toll-network.layout";
import SubscriptionLayout from "../layout/subscription.layout";
import TollLayout from "../layout/toll.layout";
import AddGlobalWeeklyPricePage from "../pages/price/add/add-global-weekly-price.page";
import AddGlobalMonthlyPricePage from "../pages/price/add/add-global-monthly-price.page";
import AddGlobalYearlyPricePage from "../pages/price/add/add-global-yearly-price.page";
import AddGlobalCustomPricePage from "../pages/price/add/add-global-custom-price.page";
import DailyPriceGlobalListPage from "../pages/price/list/daily-price-global-list.page";
import WeeklyPriceGlobalListPage from "../pages/price/list/weekly-price-global-list.page";
import MonthlyPriceGlobalListPage from "../pages/price/list/monthly-price-global-list.page";
import YearlyPriceGlobalListPage from "../pages/price/list/yearly-price-global-list.page";
import CustomPriceGlobalListPage from "../pages/price/list/custom-price-global-list.page";
import AddGlobalDailyPricePage from "../pages/price/add/add-global-daily-price.page";

const DashboardLayout = lazy(() => import("../layout/dashboard-layout.layout"));
const AddPriceLayout = lazy(() => import("../layout/add-price.layout"));
const PriceListLayout = lazy(() => import("../layout/price-list.layout"));

const AddHighwayPage = lazy(() => import("../pages/highway/add-highway.page"));
const HighwayListPage = lazy(
  () => import("../pages/highway/highway-list.page")
);
const EditHighwayPage = lazy(
  () => import("../pages/highway/edit-highway.page")
);
const SectionListPage = lazy(
  () => import("../pages/section/section-list.page")
);
const AddSectionPage = lazy(() => import("../pages/section/add-section.page"));
const SubscriptionListPage = lazy(
  () => import("../pages/subscription/subscription-list.page")
);
const AddSubscriptionPage = lazy(
  () => import("../pages/subscription/add-subscription.page")
);
const EditSubscriptionPage = lazy(
  () => import("../pages/subscription/edit-subscription.page")
);
const TollListPage = lazy(() => import("../pages/toll/toll-list.page"));
const AddTollPage = lazy(() => import("../pages/toll/add-toll.page"));
const EditTollPage = lazy(() => import("../pages/toll/edit-toll.page"));
const BaseUserListPage = lazy(
  () => import("../pages/base-user/base-user-list.page")
);
const TollNetworkListPage = lazy(
  () => import("../pages/toll-network/toll-network-list.page")
);
const AddTollNetworkPage = lazy(
  () => import("../pages/toll-network/add-toll-network.page")
);
const EditTollNetworkPage = lazy(
  () => import("../pages/toll-network/edit-toll-network.page")
);
const TollNetworkGraphPage = lazy(
  () => import("../pages/toll-network/toll-network-graph.page")
);

const useRouter = () => {
  const { authGuard, notAuthGuard } = useAuthGuard();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/sign-in"}></Navigate>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/sign-in",
      element: notAuthGuard(
        <SignInPage title="Genral administration"></SignInPage>
      ),
    },
    {
      path: "/sign-up",
      element: notAuthGuard(
        <SignUpPage title="Genral administration"></SignUpPage>
      ),
    },
    {
      path: "/send-password-reset-email",
      element: notAuthGuard(
        <SendPasswordResetEmailPage></SendPasswordResetEmailPage>
      ),
    },
    {
      path: "/dashboard",
      element: authGuard(<DashboardLayout></DashboardLayout>),
      children: [
        {
          path: "/dashboard",
          element: <h1>home</h1>,
        },

        {
          path: "/dashboard/section/list/:tollId",
          element: <SectionListPage></SectionListPage>,
        },
        {
          path: "/dashboard/section/add/:tollId",
          element: <AddSectionPage></AddSectionPage>,
        },
        {
          path: "/dashboard/section/edit/:tollId",
          element: <AddSectionPage></AddSectionPage>,
        },

        {
          path: "/dashboard/highway",
          element: <HighwayLayout></HighwayLayout>,
          children: [
            {
              path: "/dashboard/highway/list",
              element: <HighwayListPage></HighwayListPage>,
            },
            {
              path: "/dashboard/highway/add",
              element: <AddHighwayPage></AddHighwayPage>,
            },
            {
              path: "/dashboard/highway/edit/:highwayId",
              element: <EditHighwayPage></EditHighwayPage>,
            },
          ],
        },

        {
          path: "/dashboard/toll-network",
          element: <TollNetworkLayout></TollNetworkLayout>,
          children: [
            {
              path: "/dashboard/toll-network/list",
              element: <TollNetworkListPage></TollNetworkListPage>,
            },
            {
              path: "/dashboard/toll-network/add",
              element: <AddTollNetworkPage></AddTollNetworkPage>,
            },
            {
              path: "/dashboard/toll-network/edit/:tollNetworkId",
              element: <EditTollNetworkPage></EditTollNetworkPage>,
            },
            {
              path: "/dashboard/toll-network/graph/:tollNetworkId",
              element: <TollNetworkGraphPage></TollNetworkGraphPage>,
            },
          ],
        },

        {
          path: "/dashboard/subscription",
          element: <SubscriptionLayout></SubscriptionLayout>,
          children: [
            {
              path: "/dashboard/subscription/list",
              element: <SubscriptionListPage></SubscriptionListPage>,
            },
            {
              path: "/dashboard/subscription/add",
              element: <AddSubscriptionPage></AddSubscriptionPage>,
            },
            {
              path: "/dashboard/subscription/edit/:subscriptionId",
              element: <EditSubscriptionPage></EditSubscriptionPage>,
            },
          ],
        },

        {
          path: "/dashboard/toll",
          element: <TollLayout></TollLayout>,
          children: [
            {
              path: "/dashboard/toll/list/:tollNetworkId",
              element: <TollListPage></TollListPage>,
            },
            {
              path: "/dashboard/toll/add/:tollNetworkId",
              element: <AddTollPage></AddTollPage>,
            },
            {
              path: "/dashboard/toll/edit/:tollNetworkId/:tollId",
              element: <EditTollPage></EditTollPage>,
            },
          ],
        },

        {
          path: "/dashboard/user/list",
          element: <BaseUserListPage></BaseUserListPage>,
        },

        {
          path: "/dashboard/price/add",
          element: <AddPriceLayout></AddPriceLayout>,
          children: [
            {
              path: "/dashboard/price/add/daily",
              element: <AddGlobalDailyPricePage></AddGlobalDailyPricePage>,
            },
            {
              path: "/dashboard/price/add/weekly",
              element: <AddGlobalWeeklyPricePage></AddGlobalWeeklyPricePage>,
            },
            {
              path: "/dashboard/price/add/monthly",
              element: <AddGlobalMonthlyPricePage></AddGlobalMonthlyPricePage>,
            },
            {
              path: "/dashboard/price/add/yearly",
              element: <AddGlobalYearlyPricePage></AddGlobalYearlyPricePage>,
            },
            {
              path: "/dashboard/price/add/custom",
              element: <AddGlobalCustomPricePage></AddGlobalCustomPricePage>,
            },
          ],
        },

        {
          path: "/dashboard/price/list",
          element: <PriceListLayout></PriceListLayout>,
          children: [
            {
              path: "/dashboard/price/list/daily",
              element: <DailyPriceGlobalListPage></DailyPriceGlobalListPage>,
            },
            {
              path: "/dashboard/price/list/weekly",
              element: <WeeklyPriceGlobalListPage></WeeklyPriceGlobalListPage>,
            },
            {
              path: "/dashboard/price/list/monthly",
              element: (
                <MonthlyPriceGlobalListPage></MonthlyPriceGlobalListPage>
              ),
            },
            {
              path: "/dashboard/price/list/yearly",
              element: <YearlyPriceGlobalListPage></YearlyPriceGlobalListPage>,
            },
            {
              path: "/dashboard/price/list/custom",
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
