import {
  faCircleNodes,
  faFileSignature,
  faHome,
  faList,
  faMoneyBill1Wave,
  faPlus,
  faRoad,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PeagePayAdminLogo } from '@peage-pay-web/assets';
import { NavbarDropdown } from '@peage-pay-web/auth';
import {
  AdminDashboardLayout,
  MenuDropdown,
  MenuItem,
} from '@peage-pay-web/ui';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useMatch, useNavigate } from 'react-router-dom';

const DashboardLayout = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const addPriceMatch = useMatch('/dashboard/price/add/*');
  const priceListMatch = useMatch('/dashboard/price/list/*');

  return (
    <AdminDashboardLayout>
      <AdminDashboardLayout.Sidebar>
        <AdminDashboardLayout.Sidebar.Main
          logoTitle="PeagePay Admin"
          logo={PeagePayAdminLogo}
          title={t('APP_NAME')}
        >
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
            <MenuItem.Text>{t('HOME')}</MenuItem.Text>
          </MenuItem>
          <MenuItem
            onClick={() => navigate('/dashboard/highway/list')}
            variant={
              location.pathname === '/dashboard/highway/list'
                ? 'primary'
                : 'base-200'
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faRoad}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>{t('HIGHWAYS')}</MenuItem.Text>
          </MenuItem>
          <MenuItem
            onClick={() => navigate('/dashboard/subscription/list')}
            variant={
              location.pathname === '/dashboard/subscription/list'
                ? 'primary'
                : 'base-200'
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faFileSignature}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>{t('SUBSCRIPTIONS')}</MenuItem.Text>
          </MenuItem>
          <MenuItem
            onClick={() => navigate('/dashboard/toll-network/list')}
            variant={
              location.pathname === '/dashboard/toll-network/list'
                ? 'primary'
                : 'base-200'
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faCircleNodes}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>{t('TOLL_NETWORKS')}</MenuItem.Text>
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
            <MenuItem.Text>{t('USERS')}</MenuItem.Text>
          </MenuItem>

          <MenuDropdown
            opened={true}
            mainElement={
              <MenuDropdown.Main className="mb-[0.5rem]">
                <MenuItem className="w-full" variant={'base-200'}>
                  <MenuItem.Icon>
                    <FontAwesomeIcon icon={faMoneyBill1Wave}></FontAwesomeIcon>
                  </MenuItem.Icon>
                  <MenuItem.Text>{t('GLOBAL_PRICES')}</MenuItem.Text>
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
              <MenuItem.Text>{t('LIST')}</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => navigate('/dashboard/price/add/daily')}
              variant={addPriceMatch ? 'primary' : 'base-200'}
              className="w-full mb-[0.5rem]"
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('ADD')}</MenuItem.Text>
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
