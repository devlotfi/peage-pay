import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@peage-pay-web/ui";
import {
  SendPasswordResetEmailPage,
  SignInPage,
  SignUpPage,
  useAuthGuard,
} from "@peage-pay-web/auth";
import DashboardLayout from "../layout/dashboard-layout.layout";

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
      ],
    },
  ]);

  return { router };
};

export default useRouter;
