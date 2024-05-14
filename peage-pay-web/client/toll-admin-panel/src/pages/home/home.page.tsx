import { useQuery } from '@apollo/client';
import {
  faIdBadge,
  faPrint,
  faQrcode,
  faRoadBarrier,
} from '@fortawesome/free-solid-svg-icons';
import { AdminDashboardLayout, AdminPanelHome } from '@peage-pay-web/ui';
import { TOLL_ADMIN_STATISTICS } from '../../graphql/queries';

const HomePage = () => {
  const { loading, error, data } = useQuery(TOLL_ADMIN_STATISTICS, {
    fetchPolicy: 'network-only',
  });

  return (
    <AdminDashboardLayout.Loading loading={loading}>
      <AdminDashboardLayout.Error error={error}>
        <AdminPanelHome message="Welcome to the general administration panel">
          <AdminPanelHome.Grid>
            <AdminPanelHome.Stat
              icon={faRoadBarrier}
              name="Automatic gates"
              value={data?.tollAdminStatistics.automaticGateCount as number}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faPrint}
              name="Ticket printer"
              value={data?.tollAdminStatistics.ticketPrinterCount as number}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faIdBadge}
              name="Rfid reader"
              value={data?.tollAdminStatistics.rfidReaderCount as number}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faQrcode}
              name="QR code reader"
              value={data?.tollAdminStatistics.qrCodeReaderCount as number}
            ></AdminPanelHome.Stat>
          </AdminPanelHome.Grid>
        </AdminPanelHome>
      </AdminDashboardLayout.Error>
    </AdminDashboardLayout.Loading>
  );
};

export default HomePage;
