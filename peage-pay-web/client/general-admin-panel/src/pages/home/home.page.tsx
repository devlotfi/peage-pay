import { useQuery } from '@apollo/client';
import {
  faCircleNodes,
  faFileSignature,
  faRoad,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { AdminDashboardLayout, AdminPanelHome } from '@peage-pay-web/ui';
import { GENERAL_ADMIN_STATISTICS } from '../../graphql/queries';

const HomePage = () => {
  const { loading, error, data } = useQuery(GENERAL_ADMIN_STATISTICS, {
    fetchPolicy: 'network-only',
  });

  return (
    <AdminDashboardLayout.Loading loading={loading}>
      <AdminDashboardLayout.Error error={error}>
        <AdminPanelHome message="Welcome to the general administration panel">
          <AdminPanelHome.Grid>
            <AdminPanelHome.Stat
              icon={faRoad}
              name="Highways"
              value={data?.generalAdminStatistics.highwayCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faCircleNodes}
              name="Toll Networks"
              value={data?.generalAdminStatistics.tollNetworksCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faFileSignature}
              name="Subscriptions"
              value={data?.generalAdminStatistics.subscriptionsCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faUser}
              name="Human ressources admins"
              value={data?.generalAdminStatistics.humanRessourcesAdminCount!}
            ></AdminPanelHome.Stat>
          </AdminPanelHome.Grid>
        </AdminPanelHome>
      </AdminDashboardLayout.Error>
    </AdminDashboardLayout.Loading>
  );
};

export default HomePage;
