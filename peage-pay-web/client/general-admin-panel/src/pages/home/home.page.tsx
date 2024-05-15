import { useQuery } from '@apollo/client';
import {
  faCircleNodes,
  faFileSignature,
  faRoad,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { AdminDashboardLayout, AdminPanelHome } from '@peage-pay-web/ui';
import { GENERAL_ADMIN_STATISTICS } from '../../graphql/queries';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(GENERAL_ADMIN_STATISTICS, {
    fetchPolicy: 'network-only',
  });

  return (
    <AdminDashboardLayout.Loading loading={loading}>
      <AdminDashboardLayout.Error error={error}>
        <AdminPanelHome message={t('WELCOME_MESSAGE')}>
          <AdminPanelHome.Grid>
            <AdminPanelHome.Stat
              icon={faRoad}
              name={t('HIGHWAYS')}
              value={data?.generalAdminStatistics.highwayCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faCircleNodes}
              name={t('TOLL_NETWORKS')}
              value={data?.generalAdminStatistics.tollNetworksCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faFileSignature}
              name={t('SUBSCRIPTIONS')}
              value={data?.generalAdminStatistics.subscriptionsCount!}
            ></AdminPanelHome.Stat>
            <AdminPanelHome.Stat
              icon={faUser}
              name={t('HUMAN_RESSOURCES_ADMINS')}
              value={data?.generalAdminStatistics.humanRessourcesAdminCount!}
            ></AdminPanelHome.Stat>
          </AdminPanelHome.Grid>
        </AdminPanelHome>
      </AdminDashboardLayout.Error>
    </AdminDashboardLayout.Loading>
  );
};

export default HomePage;
