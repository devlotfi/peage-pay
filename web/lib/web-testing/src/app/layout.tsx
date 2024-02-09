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
        <Tooltip
          className="mb-[0.5rem]"
          tooltipElement={
            <Tooltip.Message position={'right'}>Test</Tooltip.Message>
          }
        >
          <MenuItem className="w-full" variant={'base-200'}>
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Test</MenuItem.Text>
          </MenuItem>
        </Tooltip>
        <MenuItem className="w-full mb-[0.5rem]" variant={'primary'}>
          <MenuItem.Icon>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </MenuItem.Icon>
          <MenuItem.Text>Test</MenuItem.Text>
        </MenuItem>
        <MenuDropdown
          mainElement={
            <MenuDropdown.Main className="mb-[0.5rem]">
              <MenuItem className="w-full" variant={'base-200'}>
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Test</MenuItem.Text>
              </MenuItem>
            </MenuDropdown.Main>
          }
        >
          <MenuDropdown
            mainElement={
              <MenuDropdown.Main className="mb-[0.5rem]">
                <MenuItem className="w-full" variant={'base-200'}>
                  <MenuItem.Icon>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </MenuItem.Icon>
                  <MenuItem.Text>Test</MenuItem.Text>
                </MenuItem>
              </MenuDropdown.Main>
            }
          >
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
          </MenuDropdown>
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
        </MenuDropdown>
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

          <Dropdown
            mainElement={
              <Dropdown.Main>
                <Button variant={'base-200'}>
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
              <MenuDropdown
                mainElement={
                  <MenuDropdown.Main className="mb-[0.5rem]">
                    <MenuItem className="w-full" variant={'base-100'}>
                      <MenuItem.Icon>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      </MenuItem.Icon>
                      <MenuItem.Text>Test</MenuItem.Text>
                    </MenuItem>
                  </MenuDropdown.Main>
                }
              >
                <MenuItem className="w-full mb-[0.5rem]" variant={'base-100'}>
                  <MenuItem.Icon>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </MenuItem.Icon>
                  <MenuItem.Text>Test</MenuItem.Text>
                </MenuItem>
                <MenuItem className="w-full" variant={'base-100'}>
                  <MenuItem.Icon>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </MenuItem.Icon>
                  <MenuItem.Text>Test</MenuItem.Text>
                </MenuItem>
              </MenuDropdown>
            </Dropdown.Content>
          </Dropdown>

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
            <Breadcrumbs.Item>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.Item>
          </Breadcrumbs>
          <div className="flex items-start">
            <Dropdown
              mainElement={
                <Dropdown.Main>
                  <Button variant={'base-100'}>
                    <Button.Icon position={'left'}>
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </Button.Icon>
                    <Button.Content>Username</Button.Content>
                    <Button.Icon position={'right'}></Button.Icon>
                  </Button>
                </Dropdown.Main>
              }
            >
              <Dropdown.Content position={'right-top'}>
                <MenuItem className="w-full" variant={'base-100'}>
                  <MenuItem.Icon>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </MenuItem.Icon>
                  <MenuItem.Text>Test</MenuItem.Text>
                </MenuItem>
                <MenuItem className="w-full" variant={'base-100'}>
                  <MenuItem.Icon>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </MenuItem.Icon>
                  <MenuItem.Text>Test</MenuItem.Text>
                </MenuItem>
                <MenuItem className="w-full" variant={'base-100'}>
                  <MenuItem.Icon>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </MenuItem.Icon>
                  <MenuItem.Text>Test</MenuItem.Text>
                </MenuItem>
              </Dropdown.Content>
            </Dropdown>
          </div>
          <div className="flex flex-col items-center">
            <form
              action=""
              className="flex flex-col w-[90%] max-w-[57rem] mt-[1rem]"
            >
              <Heading className="mb-[2rem] text-[30pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>Example</Heading.Text>
              </Heading>
              <Checkbox>
                <Checkbox.Check></Checkbox.Check>
                <Checkbox.Field checked></Checkbox.Field>
                <Checkbox.Label>lol</Checkbox.Label>
              </Checkbox>
              <Checkbox>
                <Checkbox.Check></Checkbox.Check>
                <Checkbox.Field></Checkbox.Field>
                <Checkbox.Label>lol</Checkbox.Label>
              </Checkbox>
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
              <TextInput variant={'edge-100'} className="w-full mb-[1.5rem]">
                <TextInput.Main>
                  <TextInput.Label>E-mail</TextInput.Label>
                  <TextInput.Icon position={'left'}>
                    <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                  </TextInput.Icon>
                  <TextInput.Field
                    name="lol"
                    placeholder="Enter e-mail"
                  ></TextInput.Field>
                  <TextInput.Icon position={'right'}>
                    <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                  </TextInput.Icon>
                </TextInput.Main>
              </TextInput>

              <TextInput variant={'primary'} className="w-full mb-[1.5rem]">
                <TextInput.Main>
                  <TextInput.Label>E-mail</TextInput.Label>

                  <TextInput.Field
                    name="lol"
                    placeholder="Enter e-mail"
                  ></TextInput.Field>
                </TextInput.Main>
                <TextInput.InfoMessage>User not found</TextInput.InfoMessage>
                <TextInput.InfoMessage>User not found</TextInput.InfoMessage>
                <TextInput.InfoMessage>User not found</TextInput.InfoMessage>
              </TextInput>

              <TextInput variant={'edge-100'} className="w-full mb-[1.5rem]">
                <TextInput.Main>
                  <TextInput.Label>E-mail</TextInput.Label>
                  <TextInput.Icon position={'left'}>
                    <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                  </TextInput.Icon>
                  <TextInput.Field
                    name="lol"
                    placeholder="Enter e-mail"
                  ></TextInput.Field>
                </TextInput.Main>
              </TextInput>
              <Tooltip
                tooltipElement={
                  <Tooltip.Message position={'top'}>lol</Tooltip.Message>
                }
                className="w-full"
              >
                <Button variant={'primary'} className="w-full">
                  <Button.Icon position={'left'}>
                    <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>Username</Button.Content>
                  <Button.Icon position={'right'}>
                    <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                  </Button.Icon>
                </Button>
              </Tooltip>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
