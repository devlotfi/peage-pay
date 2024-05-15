import { useQuery } from '@apollo/client';
import {
  faIdBadge,
  faPrint,
  faQrcode,
  faRoadBarrier,
} from '@fortawesome/free-solid-svg-icons';
import { AdminDashboardLayout, AdminPanelHome } from '@peage-pay-web/ui';
import { TOLL_ADMIN_STATISTICS } from '../../graphql/queries';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(TOLL_ADMIN_STATISTICS, {
    fetchPolicy: 'network-only',
  });

  return (
    <AdminDashboardLayout.Loading loading={loading}>
      <AdminDashboardLayout.Error error={error}>
        <AdminPanelHome message={t('WELCOME_MESSAGE')}>
          <AdminPanelHome.Grid>
            <AdminPanelHome.Stat
              icon={faRoadBarrier}
              name={t('AUTOMATIC_GATES')}
              value={data?.tollAdminStatistics.automaticGateCount as number}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faPrint}
              name={t('TICKET_PRINTERS')}
              value={data?.tollAdminStatistics.ticketPrinterCount as number}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faIdBadge}
              name={t('RFID_READERS')}
              value={data?.tollAdminStatistics.rfidReaderCount as number}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faQrcode}
              name={t('QR_CODE_READER')}
              value={data?.tollAdminStatistics.qrCodeReaderCount as number}
            ></AdminPanelHome.Stat>
          </AdminPanelHome.Grid>
        </AdminPanelHome>
      </AdminDashboardLayout.Error>
    </AdminDashboardLayout.Loading>
  );
};

export default HomePage;
