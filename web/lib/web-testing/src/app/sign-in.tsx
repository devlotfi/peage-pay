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
} from '@peage-pay/admin-web-shared';

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
      <div className="flex flex-1 bg-base-200 lg:bg-base-100">
        <div className="flex flex-col w-full lg:w-[45%] lg:max-w-[38rem] items-center bg-base-100 rounded-xl m-[0.5rem] lg:m-0">
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
        <div // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          style={{ '--image-url': `url(${AuthSignInBg})` }}
          className="hidden lg:flex m-[1rem] flex-1 bg-base-200 rounded-xl justify-center items-center bg-[image:var(--image-url)] bg-cover"
        >
          <img className="max-w-[55%] opacity-90" src={Toll} alt="toll" />
        </div>
      </div>
    </SignInLayout>
  );
}

export default SignIn;
