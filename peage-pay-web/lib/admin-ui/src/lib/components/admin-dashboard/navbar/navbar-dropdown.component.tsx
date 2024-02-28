import {
  faBrush,
  faCaretDown,
  faLanguage,
  faMoon,
  faSun,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext, ThemesEnum } from '@peage-pay-web/tailwind-config';
import { Button, Dropdown, MenuDropdown, MenuItem } from '@peage-pay-web/ui';
import { useContext } from 'react';
import { AuthContext } from '@peage-pay-web/auth';
import { Utils } from '@peage-pay-web/utils';

const NavbarDropdownArrow = (): JSX.Element => {
  const { open } = useContext(Dropdown.Context);

  return (
    <Button.Icon position={'left'}>
      <FontAwesomeIcon
        className={Utils.cn(
          'text-[20pt] duration-300 ease',
          open && 'rotate-180',
        )}
        icon={faCaretDown}
      ></FontAwesomeIcon>
    </Button.Icon>
  );
};

const NavbarDropdown = (): JSX.Element => {
  const { setDarkTheme, setLightTheme, theme } = useContext(ThemeContext);
  const { authData } = useContext(AuthContext);

  return (
    <Dropdown
      mainElement={
        <Dropdown.Main>
          <Button variant={'base-200'}>
            <NavbarDropdownArrow></NavbarDropdownArrow>
            {authData ? (
              <Button.Content>
                <div className="flex mx-[0.2rem]">
                  {authData.baseUser.firstName}
                </div>
                <div className="flex mx-[0.2rem]">
                  {authData.baseUser.lastName}
                </div>
              </Button.Content>
            ) : null}
            <Button.Icon position={'right'}>
              <FontAwesomeIcon
                className="text-[20pt] text-primary-100"
                icon={faUserCircle}
              ></FontAwesomeIcon>
            </Button.Icon>
          </Button>
        </Dropdown.Main>
      }
    >
      <Dropdown.Content position={'bottom-right'}>
        <MenuDropdown
          mainElement={
            <MenuDropdown.Main className="mb-[0.5rem]">
              <MenuItem className="w-full" variant={'base-100'}>
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faBrush}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Theme</MenuItem.Text>
              </MenuItem>
            </MenuDropdown.Main>
          }
        >
          <MenuItem
            onClick={() => setDarkTheme()}
            className="w-full mb-[0.5rem]"
            variant={theme === ThemesEnum.DARK ? 'primary' : 'base-100'}
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Dark</MenuItem.Text>
          </MenuItem>
          <MenuItem
            onClick={() => setLightTheme()}
            className="w-full mb-[0.5rem]"
            variant={theme === ThemesEnum.LIGHT ? 'primary' : 'base-100'}
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Light</MenuItem.Text>
          </MenuItem>
        </MenuDropdown>

        <MenuDropdown
          mainElement={
            <MenuDropdown.Main>
              <MenuItem className="w-full" variant={'base-100'}>
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Language</MenuItem.Text>
              </MenuItem>
            </MenuDropdown.Main>
          }
        >
          <MenuItem
            className="w-full mb-[0.5rem] mt-[0.5rem]"
            variant={'primary'}
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>English</MenuItem.Text>
          </MenuItem>
          <MenuItem className="w-full mb-[0.5rem]" variant={'base-100'}>
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>French</MenuItem.Text>
          </MenuItem>
          <MenuItem className="w-full" variant={'base-100'}>
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Arabic</MenuItem.Text>
          </MenuItem>
        </MenuDropdown>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default NavbarDropdown;
