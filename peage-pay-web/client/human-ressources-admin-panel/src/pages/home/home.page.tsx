import { useQuery } from '@apollo/client';
import { faRoad, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { AdminDashboardLayout, AdminPanelHome } from '@peage-pay-web/ui';
import { HUMAN_RESSOURCES_ADMIN_STATISTICS } from '../../graphql/queries';

const HomePage = () => {
  const { loading, error, data } = useQuery(HUMAN_RESSOURCES_ADMIN_STATISTICS, {
    fetchPolicy: 'network-only',
  });

  return (
    <AdminDashboardLayout.Loading loading={loading}>
      <AdminDashboardLayout.Error error={error}>
        <AdminPanelHome message="Welcome to the general administration panel">
          <AdminPanelHome.Grid>
            <AdminPanelHome.Stat
              icon={faRoad}
              name="Users"
              value={data?.humanRessourcesAdminStatistics.userCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faUserGear}
              name="Toll Admins"
              value={data?.humanRessourcesAdminStatistics.tollAdminCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faUserGear}
              name="Gate Admins"
              value={data?.humanRessourcesAdminStatistics.gateAdminCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faUserGear}
              name="Moderators"
              value={data?.humanRessourcesAdminStatistics.moderatorCount!}
            ></AdminPanelHome.Stat>
          </AdminPanelHome.Grid>
        </AdminPanelHome>
      </AdminDashboardLayout.Error>
    </AdminDashboardLayout.Loading>
  );
};

export default HomePage;
