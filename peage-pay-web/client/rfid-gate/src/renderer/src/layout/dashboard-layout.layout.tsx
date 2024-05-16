import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PeagePayLogo } from '@peage-pay-web/assets';
import {
  AutomaticGateAuthContext,
  AutomaticGateNavbarDropdown,
} from '@peage-pay-web/automatic-gate-auth';
import { AdminDashboardLayout, MenuItem } from '@peage-pay-web/ui';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const DashboardLayout = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { automaticGateAuthData } = useContext(AutomaticGateAuthContext);

  return (
    <AdminDashboardLayout usage={'desktop'}>
      <AdminDashboardLayout.Sidebar>
        <AdminDashboardLayout.Sidebar.Main
          logoTitle="PeagePay Gate"
          logo={PeagePayLogo}
          title={t('APP_NAME')}
        >
          <AutomaticGateNavbarDropdown></AutomaticGateNavbarDropdown>
          {automaticGateAuthData?.automaticGate ? (
            <AdminDashboardLayout.AutomaticGateInfo
              automaticGate={automaticGateAuthData.automaticGate}
            ></AdminDashboardLayout.AutomaticGateInfo>
          ) : undefined}
          <MenuItem
            onClick={() => navigate('/dashboard')}
            variant={
              location.pathname === '/dashboard' ? 'primary' : 'base-200'
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faTowerBroadcast}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Rfid reader</MenuItem.Text>
          </MenuItem>
        </AdminDashboardLayout.Sidebar.Main>
        <AdminDashboardLayout.Sidebar.Overlay></AdminDashboardLayout.Sidebar.Overlay>
      </AdminDashboardLayout.Sidebar>
      <AdminDashboardLayout.Main>
        <AdminDashboardLayout.Navbar>
          <AdminDashboardLayout.Navbar.LeftContent></AdminDashboardLayout.Navbar.LeftContent>
          <AdminDashboardLayout.Navbar.RightContent></AdminDashboardLayout.Navbar.RightContent>
        </AdminDashboardLayout.Navbar>
        <AdminDashboardLayout.Content className="p-[1rem]">
          <Outlet></Outlet>
        </AdminDashboardLayout.Content>
      </AdminDashboardLayout.Main>
    </AdminDashboardLayout>
  );
};

export default DashboardLayout;
