import {
  faBrush,
  faCaretDown,
  faLanguage,
  faMoon,
  faPowerOff,
  faSun,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext, ThemesEnum } from "@peage-pay-web/tailwind-config";
import {
  Button,
  ButtonOutline,
  Dropdown,
  MenuDropdown,
  MenuItem,
} from "@peage-pay-web/ui";
import { useContext, useRef } from "react";
import { AuthContext } from "@peage-pay-web/auth";
import { Utils } from "@peage-pay-web/utils";
import SignOutModal from "./sign-out-modal.component";

const NavbarDropdownArrow = (): JSX.Element => {
  const { open } = useContext(Dropdown.Context);

  return (
    <Button.Icon position={"left"}>
      <FontAwesomeIcon
        className={Utils.cn(
          "text-[20pt] duration-300 ease",
          open && "rotate-180"
        )}
        icon={faCaretDown}
      ></FontAwesomeIcon>
    </Button.Icon>
  );
};

const NavbarDropdown = (): JSX.Element => {
  const { setDarkTheme, setLightTheme, theme } = useContext(ThemeContext);
  const { authData } = useContext(AuthContext);
  const signOutModalRef = useRef(null);

  const showSignOutModal = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    signOutModalRef.current.showModal();
  };

  return (
    <>
      <Dropdown
        mainElement={
          <Dropdown.Main>
            <ButtonOutline
              variant={"edge-200"}
              className="min-h-[2.7rem] w-full rounded-lg hover:bg-base-100 mb-[1rem] justify-between"
            >
              <div className="flex">
                <NavbarDropdownArrow></NavbarDropdownArrow>
                {authData ? (
                  <ButtonOutline.Content>
                    <div className="flex mx-[0.2rem]">
                      {authData.baseUser.firstName}
                    </div>
                    <div className="flex mx-[0.2rem]">
                      {authData.baseUser.lastName}
                    </div>
                  </ButtonOutline.Content>
                ) : null}
              </div>
              <ButtonOutline.Icon position={"right"}>
                <FontAwesomeIcon
                  className="text-[20pt] text-primary-100"
                  icon={faUserCircle}
                ></FontAwesomeIcon>
              </ButtonOutline.Icon>
            </ButtonOutline>
          </Dropdown.Main>
        }
      >
        <Dropdown.Content
          className="w-full static mb-[1rem] shadow-none"
          position={"bottom-right"}
        >
          <MenuDropdown
            mainElement={
              <MenuDropdown.Main className="mb-[0.5rem]">
                <MenuItem className="w-full" variant={"base-100"}>
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
              variant={theme === ThemesEnum.DARK ? "primary" : "base-100"}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Dark</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => setLightTheme()}
              className="w-full mb-[0.5rem]"
              variant={theme === ThemesEnum.LIGHT ? "primary" : "base-100"}
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
                <MenuItem className="w-full mb-[0.5rem]" variant={"base-100"}>
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
              variant={"primary"}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>English</MenuItem.Text>
            </MenuItem>
            <MenuItem className="w-full mb-[0.5rem]" variant={"base-100"}>
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>French</MenuItem.Text>
            </MenuItem>
            <MenuItem className="w-full mb-[0.5rem]" variant={"base-100"}>
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Arabic</MenuItem.Text>
            </MenuItem>
          </MenuDropdown>
          <MenuItem
            onClick={showSignOutModal}
            className="w-full"
            variant={"error"}
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Sign out</MenuItem.Text>
          </MenuItem>
        </Dropdown.Content>
      </Dropdown>

      <SignOutModal modalRef={signOutModalRef}></SignOutModal>
    </>
  );
};

export default NavbarDropdown;
