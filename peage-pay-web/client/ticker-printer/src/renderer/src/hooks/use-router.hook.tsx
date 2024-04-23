import { Navigate, createHashRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import DashboardLayout from '@renderer/layout/dashboard-layout.layout';
import TicketPrinter from '@renderer/pages/ticket-printer.page';
import {
  SignInAutomaticGatePage,
  useAutomaticGateAuthGuard,
} from '@peage-pay-web/automatic-gate-auth';

const useRouter = () => {
  const { authGuard, notAuthGuard } = useAutomaticGateAuthGuard();

  const router = createHashRouter([
    {
      path: '/',
      element: <Navigate to={'/sign-in-automatic-gate'}></Navigate>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: '/sign-in-automatic-gate',
      element: notAuthGuard(
        <SignInAutomaticGatePage
          usage={'desktop'}
          title="Ticket printer"
        ></SignInAutomaticGatePage>,
      ),
    },
    {
      path: '/dashboard',
      element: authGuard(<DashboardLayout></DashboardLayout>),
      children: [
        {
          path: '/dashboard',
          element: <h1>lol</h1>,
        },
        {
          path: '/dashboard/print',
          element: <TicketPrinter></TicketPrinter>,
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
