import { Navigate, createBrowserRouter } from 'react-router-dom';
import useAuthGuard from './use-auth-guard.hook';
import DashboardLayout from '../layout/dashboard-layout.component';

const useRouter = () => {
  const { authGuard, notAuthGuard } = useAuthGuard();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={'/sign-in'}></Navigate>,
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
