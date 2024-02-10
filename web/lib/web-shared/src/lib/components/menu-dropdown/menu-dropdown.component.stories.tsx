import type { Meta, StoryObj } from '@storybook/react';
import MenuDropdown from './menu-dropdown.component';
import { ThemeProvider } from '@peage-pay/tailwind-global-config';
import { ComponentProps } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface Props {
  menuDropdownMain: JSX.Element;
  menuDropdownContent: JSX.Element;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof MenuDropdown> & Props;

const meta: Meta<StorybookProps> = {
  component: MenuDropdown,
  title: 'MenuDropdown',
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
    menuDropdownMain: (
      <MenuItem className="w-full" variant={'base-200'}>
        <MenuItem.Icon>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </MenuItem.Icon>
        <MenuItem.Text>Test</MenuItem.Text>
      </MenuItem>
    ),
    menuDropdownContent: (
      <>
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
      </>
    ),
    theme: 'LIGHT',
  },
  render: ({ menuDropdownMain, menuDropdownContent, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <MenuDropdown
            mainElement={
              <MenuDropdown.Main className="mb-[0.5rem]">
                {menuDropdownMain}
              </MenuDropdown.Main>
            }
          >
            {menuDropdownContent}
          </MenuDropdown>
        </ThemeProvider>
      </div>
    );
  },
};
