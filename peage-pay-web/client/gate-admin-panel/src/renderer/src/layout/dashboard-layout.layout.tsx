import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AutomaticGateAuthContext,
  AutomaticGateNavbarDropdown,
} from '@peage-pay-web/automatic-gate-auth';
import { AdminDashboardLayout, MenuItem } from '@peage-pay-web/ui';
import { useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const DashboardLayout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { automaticGateAuthData } = useContext(AutomaticGateAuthContext);

  return (
    <AdminDashboardLayout>
      <AdminDashboardLayout.Sidebar>
        <AdminDashboardLayout.Sidebar.Main title="Ticket printer">
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
              <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Ticket printer</MenuItem.Text>
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
