import {
  faAngleDown,
  faAngleLeft,
  faAt,
  faBars,
  faCaretDown,
  faCaretLeft,
  faKey,
  faUser,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Breadcrumbs,
  Button,
  Checkbox,
  Dropdown,
  Heading,
  MenuDropdown,
  MenuItem,
  TextInput,
  Tooltip,
} from '@peage-pay/web-shared';
import { PeagePayAdminLogo } from '@peage-pay/assets';
import { AdminDashboardLayout } from '@peage-pay/admin-web-shared';

export function Layout() {
  const toggleTheme = () => {
    const htmlTag = document.querySelector('html');

    if (htmlTag) {
      if (htmlTag?.dataset.theme === 'DARK') {
        htmlTag.dataset.theme = 'LIGHT';
      } else {
        htmlTag.dataset.theme = 'DARK';
      }
    }
  };

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
          <AdminDashboardLayout.Navbar.LeftContent>
            <Button variant={'base-200'} onClick={toggleTheme}>
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Sign in</Button.Content>
            </Button>
          </AdminDashboardLayout.Navbar.LeftContent>
          <AdminDashboardLayout.Navbar.RightContent>
            <h1>lol</h1>
          </AdminDashboardLayout.Navbar.RightContent>
        </AdminDashboardLayout.Navbar>
        <AdminDashboardLayout.Content className="p-[1rem]">
          <TextInput variant={'edge-100'} className="w-full mb-[1.5rem]">
            <TextInput.Main>
              <TextInput.Label>E-mail</TextInput.Label>
              <TextInput.Icon position={'left'}>
                <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
              </TextInput.Icon>
              <TextInput.Field
                name="lol"
                type="datetime-local"
              ></TextInput.Field>
              <TextInput.Icon position={'right'}>
                <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
              </TextInput.Icon>
            </TextInput.Main>
          </TextInput>
        </AdminDashboardLayout.Content>
      </AdminDashboardLayout.Main>
    </AdminDashboardLayout>
  );
}

export default Layout;
