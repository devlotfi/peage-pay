import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavbarDropdown } from '@peage-pay-web/auth';
import { AdminDashboardLayout, MenuItem } from '@peage-pay-web/ui';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const DashboardLayout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AdminDashboardLayout usage={'desktop'}>
      <AdminDashboardLayout.Sidebar>
        <AdminDashboardLayout.Sidebar.Main title="Moderator">
          <NavbarDropdown></NavbarDropdown>
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
            onClick={() => navigate('/dashboard/base-user/list')}
            variant={
              location.pathname === '/dashboard/base-user/list'
                ? 'primary'
                : 'base-200'
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Users</MenuItem.Text>
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
