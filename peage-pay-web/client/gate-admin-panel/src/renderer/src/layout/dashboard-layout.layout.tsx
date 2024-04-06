import { faHome, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PeagePayAdminLogo } from '@peage-pay-web/assets';
import { NavbarDropdown } from '@peage-pay-web/auth';
import { AdminDashboardLayout, MenuItem } from '@peage-pay-web/ui';
import { GateAdminInfoConext } from '@renderer/context/gate-admin-info.context';
import { useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const DashboardLayout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { gateAdmin } = useContext(GateAdminInfoConext);

  return (
    <AdminDashboardLayout usage={'desktop'}>
      <AdminDashboardLayout.Sidebar>
        <AdminDashboardLayout.Sidebar.Main
          logoTitle="PeagePay Admin"
          logo={PeagePayAdminLogo}
          title="Gate Admin"
        >
          <NavbarDropdown></NavbarDropdown>
          <AdminDashboardLayout.TollInfo
            toll={gateAdmin.toll!}
          ></AdminDashboardLayout.TollInfo>
          <MenuItem
            onClick={() => navigate('/dashboard')}
            variant={
              location.pathname === '/dashboard' ? 'primary' : 'base-200'
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Home</MenuItem.Text>
          </MenuItem>
          <MenuItem
            onClick={() => navigate('/dashboard/scan')}
            variant={
              location.pathname === '/dashboard/scan' ? 'primary' : 'base-200'
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faQrcode}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Scan</MenuItem.Text>
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
