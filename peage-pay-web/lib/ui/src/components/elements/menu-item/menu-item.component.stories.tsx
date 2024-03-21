import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './menu-item.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  menuItemIcon: JSX.Element;
  menuItemContent: string;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof MenuItem> & Props;

const meta: Meta<StorybookProps> = {
  component: MenuItem,
  title: 'MenuItem',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    menuItemContent: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'success',
        'error',
        'warning',
        'base-100',
        'base-200',
      ],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    variant: 'base-100',
    menuItemContent: 'test',
    menuItemIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    theme: 'LIGHT',
  },
  render: ({ variant, menuItemContent, theme, menuItemIcon }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <MenuItem variant={variant}>
            <MenuItem.Icon>{menuItemIcon}</MenuItem.Icon>
            <MenuItem.Text>{menuItemContent}</MenuItem.Text>
          </MenuItem>
        </ThemeProvider>
      </div>
    );
  },
};
