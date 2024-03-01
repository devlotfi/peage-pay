import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout } from '@peage-pay-web/admin-ui';
import { NavbarDropdown } from '@peage-pay-web/auth';
import { MenuItem } from '@peage-pay-web/ui';
import { Outlet } from 'react-router-dom';

const DashboardLayout = (): JSX.Element => {
  return (
    <AdminDashboardLayout>
      <AdminDashboardLayout.Sidebar>
        <AdminDashboardLayout.Sidebar.Main>
          <MenuItem className="w-full mb-[0.5rem]" variant={'primary'}>
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Test</MenuItem.Text>
          </MenuItem>
          <MenuItem className="w-full mb-[0.5rem]" variant={'base-200'}>
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Test</MenuItem.Text>
          </MenuItem>
          <MenuItem className="w-full mb-[0.5rem]" variant={'base-200'}>
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Test</MenuItem.Text>
          </MenuItem>
        </AdminDashboardLayout.Sidebar.Main>
        <AdminDashboardLayout.Sidebar.Overlay></AdminDashboardLayout.Sidebar.Overlay>
      </AdminDashboardLayout.Sidebar>
      <AdminDashboardLayout.Main>
        <AdminDashboardLayout.Navbar>
          <AdminDashboardLayout.Navbar.LeftContent></AdminDashboardLayout.Navbar.LeftContent>
          <AdminDashboardLayout.Navbar.RightContent>
            <NavbarDropdown></NavbarDropdown>
          </AdminDashboardLayout.Navbar.RightContent>
        </AdminDashboardLayout.Navbar>
        <AdminDashboardLayout.Content className="p-[1rem]">
          <Outlet></Outlet>
        </AdminDashboardLayout.Content>
      </AdminDashboardLayout.Main>
    </AdminDashboardLayout>
  );
};

export default DashboardLayout;
