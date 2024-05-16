import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import Dropdown from '../../elements/dropdown/dropdown.component';
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
import IconButton from '../../elements/icon-button/icon-button.component';
import { useTranslation } from 'react-i18next';

const navbarRightContentVariants = cva('flex');

interface NavbarRightContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarRightContentVariants> {}

const MinimalNavbarRightContent = ({
  className,
  children,
  ...props
}: NavbarRightContentProps): JSX.Element => {
  const { t, i18n } = useTranslation();
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
            <IconButton variant={'base-200'}>
              <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
            </IconButton>
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
                  <MenuItem.Text>{t('THEMES')}</MenuItem.Text>
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
              <MenuItem.Text>{t('DARK')}</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => setLightTheme()}
              className="w-full mb-[0.5rem]"
              variant={theme === ThemesEnum.LIGHT ? 'primary' : 'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('LIGHT')}</MenuItem.Text>
            </MenuItem>
          </MenuDropdown>

          <MenuDropdown
            mainElement={
              <MenuDropdown.Main>
                <MenuItem className="w-full" variant={'base-100'}>
                  <MenuItem.Icon>
                    <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
                  </MenuItem.Icon>
                  <MenuItem.Text>{t('LANGUAGE')}</MenuItem.Text>
                </MenuItem>
              </MenuDropdown.Main>
            }
          >
            <MenuItem
              onClick={() => i18n.changeLanguage('en')}
              className="w-full mb-[0.5rem] mt-[0.5rem]"
              variant={i18n.language === 'en' ? 'primary' : 'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>English</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => i18n.changeLanguage('fr')}
              className="w-full mb-[0.5rem]"
              variant={i18n.language === 'fr' ? 'primary' : 'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Français</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => i18n.changeLanguage('ar')}
              className="w-full"
              variant={i18n.language === 'ar' ? 'primary' : 'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>العربية</MenuItem.Text>
            </MenuItem>
          </MenuDropdown>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
};
export default MinimalNavbarRightContent;
