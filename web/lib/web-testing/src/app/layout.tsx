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
  Heading,
  MenuItem,
  TextInput,
} from '@peage-pay/web-shared';
import { PeagePayAdminLogo } from '@peage-pay/assets';

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
    <div className="flex max-h-screen min-h-screen bg-base-200">
      <div className="hidden flex-col min-w-[20rem] p-[0.7rem] lg:flex">
        <Button variant={'base-200'} className="h-[3rem]">
          <Button.Content>
            <img
              className="w-[15rem]"
              src={PeagePayAdminLogo}
              alt="peage-pay-admin-logo"
            />
          </Button.Content>
        </Button>
        <div className="w-full h-[1px] bg-edge-100 my-[1.5rem]"></div>
        <MenuItem className="w-full mb-[0.5rem]" variant={'base-200'}>
          <MenuItem.MenuItemIcon>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </MenuItem.MenuItemIcon>
          <MenuItem.MenuItemText>Test</MenuItem.MenuItemText>
        </MenuItem>
        <MenuItem className="w-full mb-[0.5rem]" variant={'primary'}>
          <MenuItem.MenuItemIcon>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </MenuItem.MenuItemIcon>
          <MenuItem.MenuItemText>Test</MenuItem.MenuItemText>
        </MenuItem>
        <MenuItem className="w-full mb-[0.5rem]" variant={'base-200'}>
          <MenuItem.MenuItemIcon>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </MenuItem.MenuItemIcon>
          <MenuItem.MenuItemText>Test</MenuItem.MenuItemText>
        </MenuItem>
        <MenuItem className="w-full mb-[0.5rem]" variant={'base-200'}>
          <MenuItem.MenuItemIcon>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </MenuItem.MenuItemIcon>
          <MenuItem.MenuItemText>Test</MenuItem.MenuItemText>
        </MenuItem>
      </div>
      <div className="flex flex-col w-full pb-[0.5rem] pr-[0.5rem] pl-[0.5rem] lg:pl-0 lg:pb-[1rem] lg:pr-[1rem] overflow-hidden">
        <div className="flex min-h-[3.5rem] items-center justify-between">
          <div className="flex">
            <Button variant={'base-200'} className="lg:hidden">
              <Button.Icon>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </Button.Icon>
            </Button>
            <Button variant={'base-200'}>
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faCaretLeft}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Back</Button.Content>
            </Button>
          </div>

          <Button variant={'base-200'} onClick={toggleTheme}>
            <Button.Icon position={'left'}>
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>Username</Button.Content>
            <Button.Icon position={'right'}>
              <FontAwesomeIcon
                className="text-[20pt]"
                icon={faUserCircle}
              ></FontAwesomeIcon>
            </Button.Icon>
          </Button>
        </div>
        <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden rounded-xl bg-base-100">
          <Breadcrumbs className="m-[1rem]">
            <Breadcrumbs.BreadcrumbsItem>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.BreadcrumbsItem>
            <Breadcrumbs.BreadcrumbsItem>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.BreadcrumbsItem>
            <Breadcrumbs.BreadcrumbsItem>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.BreadcrumbsItem>
            <Breadcrumbs.BreadcrumbsItem>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.BreadcrumbsItem>
          </Breadcrumbs>
          <div className="flex flex-col items-center">
            <form
              action=""
              className="flex flex-col w-[90%] max-w-[57rem] mt-[1rem]"
            >
              <Heading className="mb-[2rem] text-[30pt]">
                <Heading.HeadingIcon position={'left'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </Heading.HeadingIcon>
                <Heading.HeadingText>Example</Heading.HeadingText>
              </Heading>
              <Checkbox>
                <Checkbox.CheckboxCheck></Checkbox.CheckboxCheck>
                <Checkbox.CheckboxField checked></Checkbox.CheckboxField>
                <Checkbox.CheckboxLabel>lol</Checkbox.CheckboxLabel>
              </Checkbox>
              <Checkbox>
                <Checkbox.CheckboxCheck></Checkbox.CheckboxCheck>
                <Checkbox.CheckboxField></Checkbox.CheckboxField>
                <Checkbox.CheckboxLabel>lol</Checkbox.CheckboxLabel>
              </Checkbox>
              <TextInput variant={'edge-100'} className="w-full mb-[1.5rem]">
                <TextInput.TextInputMain>
                  <TextInput.TextInputLabel>E-mail</TextInput.TextInputLabel>
                  <TextInput.TextInputIcon position={'left'}>
                    <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                  </TextInput.TextInputIcon>
                  <TextInput.TextInputField
                    name="lol"
                    type="datetime-local"
                  ></TextInput.TextInputField>
                  <TextInput.TextInputIcon position={'right'}>
                    <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                  </TextInput.TextInputIcon>
                </TextInput.TextInputMain>
              </TextInput>
              <TextInput variant={'edge-100'} className="w-full mb-[1.5rem]">
                <TextInput.TextInputMain>
                  <TextInput.TextInputLabel>E-mail</TextInput.TextInputLabel>
                  <TextInput.TextInputIcon position={'left'}>
                    <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                  </TextInput.TextInputIcon>
                  <TextInput.TextInputField name="lol"></TextInput.TextInputField>
                  <TextInput.TextInputIcon position={'right'}>
                    <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                  </TextInput.TextInputIcon>
                </TextInput.TextInputMain>
              </TextInput>
              <TextInput variant={'edge-100'} className="w-full mb-[1.5rem]">
                <TextInput.TextInputMain>
                  <TextInput.TextInputLabel>E-mail</TextInput.TextInputLabel>
                  <TextInput.TextInputIcon position={'left'}>
                    <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                  </TextInput.TextInputIcon>
                  <TextInput.TextInputField name="lol"></TextInput.TextInputField>
                  <TextInput.TextInputIcon position={'right'}>
                    <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                  </TextInput.TextInputIcon>
                </TextInput.TextInputMain>
              </TextInput>
              <Button variant={'primary'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </form>
          </div>

          <h1 className="text-[10rem]">test</h1>
          <h1 className="text-[10rem]">test</h1>
          <div className="flex-none flex overflow-x-auto">
            <h1 className="text-[10rem]">test</h1>
            <h1 className="text-[10rem]">test</h1>
            <h1 className="text-[10rem]">test</h1>
            <h1 className="text-[10rem]">test</h1>
          </div>
          <h1 className="text-[10rem]">test</h1>
          <h1 className="text-[10rem]">test</h1>
          <h1 className="text-[10rem]">test</h1>
          <h1 className="text-[10rem]">test</h1>
        </div>
      </div>
    </div>
  );
}

export default Layout;
