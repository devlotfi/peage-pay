import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import DashboardLayout from '../layout/dashboard-layout.component';
import React, { useContext } from 'react';
import { AuthContext } from '@peage-pay-web/auth';

const useRouter = () => {
  const { authGuard, notAuthGuard } = useContext(AuthContext);

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
          element: notAuthGuard(<SignInPage></SignInPage>),
        };
      },
    },
    {
      path: '/verify',
      async lazy() {
        const { VerifyEmailPage } = await import('@peage-pay-web/auth');
        return {
          element: notAuthGuard(<VerifyEmailPage></VerifyEmailPage>),
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
      ],
    },
  ]);

  return { router };
};

export default useRouter;
