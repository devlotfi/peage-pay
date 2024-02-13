import type { Meta, StoryObj } from '@storybook/react';
import SignInLayout from './sign-in-layout.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';
import { Button, Dropdown, MenuItem, TextInput } from '@peage-pay-web/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faEllipsisH,
  faKey,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  checkboxLabel: string;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof SignInLayout> & Props;

const meta: Meta<StorybookProps> = {
  component: SignInLayout,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'SignInLayout',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    theme: 'LIGHT',
  },
  render: ({ theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
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
                  <TextInput
                    variant={'edge-100'}
                    className="w-full mb-[1.5rem]"
                  >
                    <TextInput.Main>
                      <TextInput.Label>E-mail</TextInput.Label>
                      <TextInput.Icon position={'left'}>
                        <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                      </TextInput.Icon>
                      <TextInput.Field
                        name="email"
                        type="email"
                        placeholder="Enter e-mail"
                      ></TextInput.Field>
                    </TextInput.Main>
                  </TextInput>
                  <TextInput
                    variant={'edge-100'}
                    className="w-full mb-[1.5rem]"
                  >
                    <TextInput.Main>
                      <TextInput.Label>Password</TextInput.Label>
                      <TextInput.Icon position={'left'}>
                        <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                      </TextInput.Icon>
                      <TextInput.Field
                        name="password"
                        type="password"
                        placeholder="Enter password"
                      ></TextInput.Field>
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
        </ThemeProvider>
      </div>
    );
  },
};
