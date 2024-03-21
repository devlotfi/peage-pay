import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/button.component';

interface Props {
  buttonContent: string;
  icon: JSX.Element;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Button> & Props;

const meta: Meta<StorybookProps> = {
  component: Button,
  title: 'IconButton',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning'],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    buttonContent: 'test',
    variant: 'primary',
    icon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    theme: 'LIGHT',
  },
  render: ({ variant, icon, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Button variant={variant}>{icon}</Button>
        </ThemeProvider>
      </div>
    );
  },
};
