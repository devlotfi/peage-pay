import { useQuery } from '@apollo/client';
import { faRoad, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { AdminDashboardLayout, AdminPanelHome } from '@peage-pay-web/ui';
import { HUMAN_RESSOURCES_ADMIN_STATISTICS } from '../../graphql/queries';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(HUMAN_RESSOURCES_ADMIN_STATISTICS, {
    fetchPolicy: 'network-only',
  });

  return (
    <AdminDashboardLayout.Loading loading={loading}>
      <AdminDashboardLayout.Error error={error}>
        <AdminPanelHome message={t('WELCOME_MESSAGE')}>
          <AdminPanelHome.Grid>
            <AdminPanelHome.Stat
              icon={faRoad}
              name={t('USERS')}
              value={data?.humanRessourcesAdminStatistics.userCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faUserGear}
              name={t('TOLL_ADMIN_LIST')}
              value={data?.humanRessourcesAdminStatistics.tollAdminCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faUserGear}
              name={t('GATE_ADMIN_LIST')}
              value={data?.humanRessourcesAdminStatistics.gateAdminCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faUserGear}
              name={t('MODERATOR_LIST')}
              value={data?.humanRessourcesAdminStatistics.moderatorCount!}
            ></AdminPanelHome.Stat>
          </AdminPanelHome.Grid>
        </AdminPanelHome>
      </AdminDashboardLayout.Error>
    </AdminDashboardLayout.Loading>
  );
};

export default HomePage;
