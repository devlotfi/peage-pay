import {
  faEllipsisH,
  faUser,
  faAt,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SignInLayout } from '@peage-pay-web/admin-ui';
import { Dropdown, Button, MenuItem, Tabs } from '@peage-pay-web/ui';

const SignInPage = (): JSX.Element => {
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
            <div className="flex my-[1.5rem] text-[25pt] font-semibold">
              Sign in
            </div>
            <Tabs>
              <Tabs.Item isActive={'active'}>
                <Tabs.Item.Icon position={'left'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </Tabs.Item.Icon>
                <Tabs.Item.Content>Lol</Tabs.Item.Content>
              </Tabs.Item>
            </Tabs>
          </div>
        </SignInLayout.Card>
        <SignInLayout.Drawing></SignInLayout.Drawing>
      </SignInLayout.Main>
    </SignInLayout>
  );
};

export default SignInPage;
