import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@peage-pay-web/ui";
import {
  SendPasswordResetEmailPage,
  SignInPage,
  SignUpPage,
  useAuthGuard,
} from "@peage-pay-web/auth";
import DashboardLayout from "../layout/dashboard-layout.layout";
import BaseUserListPage from "../pages/base-user/base-user-list.page";
import TollAdminListPage from "../pages/toll-admin/toll-admin-list.page";
import GateAdminListPage from "../pages/gate-admin/gate-admin-list.page";
import ModeratorListPage from "../pages/moderator/moderator-list.page";
import EditTollAdmin from "../pages/toll-admin/edit-toll-admin.page";
import EditGateAdminPage from "../pages/gate-admin/edit-gate-admin.page";

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
        <SignInPage title="Human ressources administration"></SignInPage>
      ),
    },
    {
      path: "/sign-up",
      element: notAuthGuard(
        <SignUpPage title="Human ressources administration"></SignUpPage>
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
          path: "/dashboard/base-user/list",
          element: <BaseUserListPage></BaseUserListPage>,
        },
        {
          path: "/dashboard/toll-admin/list",
          element: <TollAdminListPage></TollAdminListPage>,
        },
        {
          path: "/dashboard/toll-admin/edit/:baseUserId",
          element: <EditTollAdmin></EditTollAdmin>,
        },
        {
          path: "/dashboard/gate-admin/list",
          element: <GateAdminListPage></GateAdminListPage>,
        },
        {
          path: "/dashboard/gate-admin/edit/:baseUserId",
          element: <EditGateAdminPage></EditGateAdminPage>,
        },
        {
          path: "/dashboard/moderator/list",
          element: <ModeratorListPage></ModeratorListPage>,
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
