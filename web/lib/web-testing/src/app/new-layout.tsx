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
import {
  AdminPanelLayout,
  Navbar,
  Sidebar,
} from '@peage-pay/admin-panel-shared';

export function Layout() {
  const toggleTheme = () => {
    const htmlTag = document.querySelector('html');

    if (htmlTag) {
      if (htmlTag?.dataset.theme === 'dark') {
        htmlTag.dataset.theme = 'light';
      } else {
        htmlTag.dataset.theme = 'dark';
      }
    }
  };

  return (
    <AdminPanelLayout>
      <Sidebar>
        <Sidebar.Main>
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
        </Sidebar.Main>
        <Sidebar.Overlay></Sidebar.Overlay>
      </Sidebar>
      <AdminPanelLayout.Main>
        <Navbar>
          <Navbar.LeftContent>
            <Button variant={'base-200'} onClick={toggleTheme}>
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Sign in</Button.Content>
            </Button>
          </Navbar.LeftContent>
          <Navbar.RightContent>
            <h1>lol</h1>
          </Navbar.RightContent>
        </Navbar>
        <AdminPanelLayout.Content className="p-[1rem]">
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
        </AdminPanelLayout.Content>
      </AdminPanelLayout.Main>
    </AdminPanelLayout>
  );
}

export default Layout;
