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
      <div className="flex flex-col w-full pb-[0.5rem] pr-[0.5rem] pl-[0.5rem] lg:pl-0 lg:pb-[1rem] lg:pr-[1rem] overflow-hidden">
        <Navbar>
          <Navbar.LeftContent>
            <Button variant={'base-100'} onClick={toggleTheme}>
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
        <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden rounded-xl bg-base-100">
          // content
        </div>
      </div>
    </AdminPanelLayout>
  );
}

export default Layout;
