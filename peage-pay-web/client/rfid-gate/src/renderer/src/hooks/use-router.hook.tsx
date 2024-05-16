import { Navigate, createHashRouter } from 'react-router-dom';
import { ErrorPage } from '@peage-pay-web/ui';
import DashboardLayout from '@renderer/layout/dashboard-layout.layout';
import RfidGatePage from '@renderer/pages/rfid-gate.page';
import {
  SignInAutomaticGatePage,
  useAutomaticGateAuthGuard,
} from '@peage-pay-web/automatic-gate-auth';
import { SerialPortProvider } from '@peage-pay-web/serial-port';
import { useTranslation } from 'react-i18next';

const useRouter = () => {
  const { t } = useTranslation();
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
          title={t('APP_NAME')}
        ></SignInAutomaticGatePage>,
      ),
    },
    {
      path: '/dashboard',
      element: authGuard(
        <SerialPortProvider>
          <DashboardLayout></DashboardLayout>
        </SerialPortProvider>,
      ),
      children: [
        {
          path: '/dashboard',
          element: <RfidGatePage></RfidGatePage>,
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
