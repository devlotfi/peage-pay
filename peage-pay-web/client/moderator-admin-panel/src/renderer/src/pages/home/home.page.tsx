import { useQuery } from '@apollo/client';
import { faIdBadge, faUser } from '@fortawesome/free-solid-svg-icons';
import { AdminDashboardLayout, AdminPanelHome } from '@peage-pay-web/ui';
import { MODERATOR_STATISTICS } from '@renderer/graphql/queries';

const HomePage = () => {
  const { loading, error, data } = useQuery(MODERATOR_STATISTICS, {
    fetchPolicy: 'network-only',
  });

  return (
    <AdminDashboardLayout.Loading loading={loading}>
      <AdminDashboardLayout.Error error={error}>
        <AdminPanelHome message="Welcome to the general administration panel">
          <AdminPanelHome.Grid className="2xl:grid-cols-2">
            <AdminPanelHome.Stat
              icon={faUser}
              name="Users"
              value={data?.moderatorStatistics.userCount as number}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faIdBadge}
              name="Rfid tags"
              value={data?.moderatorStatistics.rfidTagCount as number}
            ></AdminPanelHome.Stat>
          </AdminPanelHome.Grid>
        </AdminPanelHome>
      </AdminDashboardLayout.Error>
    </AdminDashboardLayout.Loading>
  );
};

export default HomePage;
