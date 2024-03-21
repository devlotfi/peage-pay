import { faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuDropdown, MenuItem } from '@peage-pay-web/ui';
import { useContext } from 'react';
import { ThemeContext } from '@peage-pay-web/tailwind-config';

const AuthPagesDropdownMenu = (): JSX.Element => {
  const { setDarkTheme, setLightTheme } = useContext(ThemeContext);

  return (
    <>
      <MenuDropdown
        mainElement={
          <MenuDropdown.Main className="mb-[0.5rem]">
            <MenuItem className="w-full" variant={'base-100'}>
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Theme</MenuItem.Text>
            </MenuItem>
          </MenuDropdown.Main>
        }
      >
        <MenuItem
          onClick={() => setDarkTheme()}
          className="w-full mb-[0.5rem]"
          variant={'primary'}
        >
          <MenuItem.Icon>
            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
          </MenuItem.Icon>
          <MenuItem.Text>Dark</MenuItem.Text>
        </MenuItem>
        <MenuItem
          onClick={() => setLightTheme()}
          className="w-full mb-[0.5rem]"
          variant={'base-100'}
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
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
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
    </>
  );
};

export default AuthPagesDropdownMenu;
