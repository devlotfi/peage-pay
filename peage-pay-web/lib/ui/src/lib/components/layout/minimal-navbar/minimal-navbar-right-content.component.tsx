import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import Dropdown from '../../elements/dropdown/dropdown.component';
import Button from '../../elements/button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrush,
  faEllipsisH,
  faLanguage,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../../elements/menu-item/menu-item.component';
import MenuDropdown from '../../elements/menu-dropdown/menu-dropdown.component';
import { ThemeContext, ThemesEnum } from '@peage-pay-web/tailwind-config';

const navbarRightContentVariants = cva('flex');

interface NavbarRightContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarRightContentVariants> {}

const MinimalNavbarRightContent = ({
  className,
  children,
  ...props
}: NavbarRightContentProps): JSX.Element => {
  const { setDarkTheme, setLightTheme, theme } = useContext(ThemeContext);

  return (
    <div
      className={Utils.cn(navbarRightContentVariants({ className }))}
      {...props}
    >
      {children}
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
          <MenuDropdown
            mainElement={
              <MenuDropdown.Main className="mb-[0.5rem]">
                <MenuItem
                  className="w-full"
                  variant={'base-100'}
                  showFocusEffect={'hide'}
                >
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
    </div>
  );
};
export default MinimalNavbarRightContent;
