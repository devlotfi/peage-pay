import {
  faHome,
  faList,
  faMoneyBill1Wave,
  faPlus,
  faRoadBarrier,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavbarDropdown } from '@peage-pay-web/auth';
import {
  AdminDashboardLayout,
  MenuDropdown,
  MenuItem,
} from '@peage-pay-web/ui';
import { useContext } from 'react';
import { Outlet, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { TollAdminInfoConext } from '../context/toll-admin-info.context';
import { PeagePayAdminLogo } from '@peage-pay-web/assets';

const DashboardLayout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tollAdmin } = useContext(TollAdminInfoConext);

  const addPriceMatch = useMatch('/dashboard/price/add/*');
  const priceListMatch = useMatch('/dashboard/price/list/*');

  return (
    <AdminDashboardLayout>
      <AdminDashboardLayout.Sidebar>
        <AdminDashboardLayout.Sidebar.Main
          logoTitle="PeagePay Admin"
          logo={PeagePayAdminLogo}
          title="Toll admin"
        >
          <NavbarDropdown></NavbarDropdown>
          <AdminDashboardLayout.TollInfo
            toll={tollAdmin.toll!}
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
            onClick={() => navigate('/dashboard/automatic-gate/list')}
            variant={
              location.pathname === '/dashboard/automatic-gate/list'
                ? 'primary'
                : 'base-200'
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faRoadBarrier}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Automatic gates</MenuItem.Text>
          </MenuItem>

          <MenuDropdown
            opened={true}
            mainElement={
              <MenuDropdown.Main className="mb-[0.5rem]">
                <MenuItem className="w-full" variant={'base-200'}>
                  <MenuItem.Icon>
                    <FontAwesomeIcon icon={faMoneyBill1Wave}></FontAwesomeIcon>
                  </MenuItem.Icon>
                  <MenuItem.Text>Global prices</MenuItem.Text>
                </MenuItem>
              </MenuDropdown.Main>
            }
          >
            <MenuItem
              onClick={() => navigate('/dashboard/price/list/daily')}
              variant={priceListMatch ? 'primary' : 'base-200'}
              className="w-full mb-[0.5rem]"
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>List</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => navigate('/dashboard/price/add/daily')}
              variant={addPriceMatch ? 'primary' : 'base-200'}
              className="w-full mb-[0.5rem]"
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Add</MenuItem.Text>
            </MenuItem>
          </MenuDropdown>
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
