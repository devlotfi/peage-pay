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
import { PeagePayAdminLogo, AuthSignInBg, Toll } from '@peage-pay/assets';
import {
  AdminDashboardLayout,
  SignInLayout,
} from '@peage-pay/admin-panel-shared';

export function SignIn() {
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
    <SignInLayout>
      <SignInLayout.Navbar>
        <SignInLayout.Navbar.LeftContent></SignInLayout.Navbar.LeftContent>
        <SignInLayout.Navbar.RightContent>
          <Dropdown
            mainElement={
              <Dropdown.Main>
                <Button variant={'transparent'}>
                  <Button.Icon position={'left'}>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>Username</Button.Content>
                  <Button.Icon position={'right'}></Button.Icon>
                </Button>
              </Dropdown.Main>
            }
          >
            <Dropdown.Content position={'bottom-right'}>
              <MenuItem className="w-full" variant={'base-100'}>
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Test</MenuItem.Text>
              </MenuItem>
            </Dropdown.Content>
          </Dropdown>
        </SignInLayout.Navbar.RightContent>
      </SignInLayout.Navbar>
      <div className="flex flex-1">
        <div className="flex w-full xl:p-[1rem]">
          <div className="flex flex-col bg-base-100 xl:rounded-xl xl:mt-[0.5rem] min-w-[38rem] xl:max-w-[38rem]">
            <div className="flex justify-center">
              <div className="flex justify-center items-center xl:mt-[-2.5rem] bg-base-100 h-[5rem] w-[5rem] border-edge-100 border-[1px] rounded-full">
                <img className="h-[3rem]" src={PeagePayAdminLogo} alt="" />
              </div>
            </div>
            <h1>lol</h1>
          </div>
        </div>
        <div className="hidden xl:flex flex-1 justify-center items-center">
          <img className="max-h-[25rem]" src={Toll} alt="toll" />
        </div>
      </div>
    </SignInLayout>
  );
}

export default SignIn;
