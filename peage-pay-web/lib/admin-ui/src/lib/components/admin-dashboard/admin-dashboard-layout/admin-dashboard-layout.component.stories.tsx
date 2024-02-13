import type { Meta, StoryObj } from '@storybook/react';
import AdminDashboardLayout from './admin-dashboard-layout.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';
import { Button, MenuItem, TextInput } from '@peage-pay-web/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

interface Props {
  checkboxLabel: string;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof AdminDashboardLayout> & Props;

const meta: Meta<StorybookProps> = {
  component: AdminDashboardLayout,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'AdminDashboardLayout',
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
          <AdminDashboardLayout>
            <AdminDashboardLayout.Sidebar>
              <AdminDashboardLayout.Sidebar.Main>
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
              </AdminDashboardLayout.Sidebar.Main>
              <AdminDashboardLayout.Sidebar.Overlay></AdminDashboardLayout.Sidebar.Overlay>
            </AdminDashboardLayout.Sidebar>
            <AdminDashboardLayout.Main>
              <AdminDashboardLayout.Navbar>
                <AdminDashboardLayout.Navbar.LeftContent></AdminDashboardLayout.Navbar.LeftContent>
                <AdminDashboardLayout.Navbar.RightContent>
                  <Button variant={'base-200'}>
                    <Button.Content>Test</Button.Content>
                  </Button>
                </AdminDashboardLayout.Navbar.RightContent>
              </AdminDashboardLayout.Navbar>
              <AdminDashboardLayout.Content className="p-[1rem]">
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
              </AdminDashboardLayout.Content>
            </AdminDashboardLayout.Main>
          </AdminDashboardLayout>
        </ThemeProvider>
      </div>
    );
  },
};
