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
      <div className="flex flex-1 bg-base-200 lg:bg-transparent">
        <div className="flex flex-col bg-base-100 rounded-xl m-[0.5rem] lg:m-[1rem] w-full lg:w-[45%] lg:max-w-[38rem] items-center">
          <div className="hidden lg:flex justify-center items-center h-[4rem] w-[4rem] border-edge-100 border-[1px] rounded-full shadow-lg mt-[-2.5rem] bg-base-100">
            <img
              src={PeagePayAdminLogo}
              alt="peage-pay-logo"
              className="h-[2rem] w-[2rem]"
            />
          </div>
          <div className="flex flex-col items-center w-[90%] mt-[0.5rem] border-edge-100 border-b-[1px] pb-[0.5rem] mb-[1rem]">
            <div className="fle font-bold text-[15pt]">
              PeagePay Adminstration
            </div>
            <div className="flex text-[11pt]">General adminstration</div>
          </div>
          <div className="flex flex-col w-[90%]">
            <div className="flex mb-[1rem] text-[23pt] font-semibold">
              Sign in
            </div>
            <TextInput variant={'edge-100'} className="w-full mb-[1.5rem]">
              <TextInput.Main>
                <TextInput.Label>E-mail</TextInput.Label>
                <TextInput.Icon position={'left'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </TextInput.Icon>
                <TextInput.Field name="lol" type="email"></TextInput.Field>
                <TextInput.Icon position={'right'}>
                  <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                </TextInput.Icon>
              </TextInput.Main>
            </TextInput>
            <TextInput variant={'edge-100'} className="w-full mb-[1.5rem]">
              <TextInput.Main>
                <TextInput.Label>E-mail</TextInput.Label>
                <TextInput.Icon position={'left'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </TextInput.Icon>
                <TextInput.Field name="lol" type="password"></TextInput.Field>
                <TextInput.Icon position={'right'}>
                  <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                </TextInput.Icon>
              </TextInput.Main>
            </TextInput>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <img className="max-w-[55%]" src={Toll} alt="toll" />
        </div>
      </div>
    </SignInLayout>
  );
}

export default SignIn;
