import {
  faAngleDown,
  faAngleLeft,
  faAt,
  faBars,
  faCaretDown,
  faCaretLeft,
  faEllipsisH,
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
} from '@peage-pay/admin-web-shared';

export function SignIn() {
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
    <SignInLayout>
      <SignInLayout.Navbar>
        <SignInLayout.Navbar.LeftContent></SignInLayout.Navbar.LeftContent>
        <SignInLayout.Navbar.RightContent>
          <Dropdown
            mainElement={
              <Dropdown.Main>
                <Button variant={'base-200'}>
                  <Button.Icon>
                    <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                  </Button.Icon>
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
      <SignInLayout.Main>
        <SignInLayout.Card>
          <SignInLayout.Card.Header>
            General adminstration
          </SignInLayout.Card.Header>
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
              </TextInput.Main>
            </TextInput>
            <TextInput variant={'edge-100'} className="w-full mb-[1.5rem]">
              <TextInput.Main>
                <TextInput.Label>Password</TextInput.Label>
                <TextInput.Icon position={'left'}>
                  <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                </TextInput.Icon>
                <TextInput.Field name="lol" type="password"></TextInput.Field>
              </TextInput.Main>
            </TextInput>
            <Button variant={'primary'}>
              <Button.Content>Sign in</Button.Content>
            </Button>
          </div>
        </SignInLayout.Card>
        <SignInLayout.Drawing></SignInLayout.Drawing>
      </SignInLayout.Main>
    </SignInLayout>
  );
}

export default SignIn;
