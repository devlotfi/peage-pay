import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../elements/heading/heading.component';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { AdminPanel } from '@peage-pay-web/assets';
import { PropsWithChildren } from 'react';
import AdminPanelHomeStat from './admin-panel-home-stat.component';
import AdminPanelHomeGrid from './admin-panel-home-grid.component';
import { useTranslation } from 'react-i18next';

interface AdminPanelHomeProps {
  message: string;
}

const AdminPanelHome = ({
  message,
  children,
}: PropsWithChildren<AdminPanelHomeProps>) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <img
          className="h-[9rem] mt-[2rem]"
          src={AdminPanel}
          alt="admin-panel"
        />
        <div className="flex font-bold text-[17pt] max-w-[20rem] my-[2rem] text-center">
          {message}
        </div>
      </div>

      <div className="flex flex-col">
        <Heading className="text-[20pt] ml-[1rem] my-[1rem]">
          <Heading.Icon position={'left'}>
            <FontAwesomeIcon icon={faChartColumn}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>{t('STATISTICS')}</Heading.Text>
        </Heading>

        {children}
      </div>
    </div>
  );
};
AdminPanelHome.Stat = AdminPanelHomeStat;
AdminPanelHome.Grid = AdminPanelHomeGrid;

export default AdminPanelHome;
