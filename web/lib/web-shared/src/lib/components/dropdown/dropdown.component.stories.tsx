import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@peage-pay/tailwind-global-config';
import { ComponentProps } from 'react';
import Dropdown from './dropdown.component';
import Button from '../button/button.component';
import MenuItem from '../menu-item/menu-item.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface Props {
  dropdownMain: JSX.Element;
  dropdownContent: JSX.Element;
  position: string;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Dropdown> & Props;

const meta: Meta<StorybookProps> = {
  component: Dropdown,
  title: 'Dropdown',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    position: {
      control: 'select',
      options: [
        'bottom-left',
        'bottom-right',
        'top-left',
        'top-right',
        'left-bottom',
        'left-top',
        'right-bottom',
        'right-top',
      ],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    dropdownMain: (
      <Button variant={'primary'}>
        <Button.Content>Username</Button.Content>
      </Button>
    ),
    dropdownContent: (
      <>
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
      </>
    ),
    theme: 'LIGHT',
  },
  render: ({ dropdownMain, dropdownContent, theme, position }) => {
    return (
      <div id="theme-provider" data-theme={theme || 'LIGHT'}>
        <ThemeProvider>
          <Dropdown
            className="absolute"
            mainElement={<Dropdown.Main>{dropdownMain}</Dropdown.Main>}
          >
            {/*eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Dropdown.Content position={(position as any) || 'bottom-left'}>
              {dropdownContent}
            </Dropdown.Content>
          </Dropdown>
        </ThemeProvider>
      </div>
    );
  },
};
