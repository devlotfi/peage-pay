import type { Meta, StoryObj } from '@storybook/react';
import Button from './button.component';
import { ComponentProps } from 'react';
import { ThemeProvider } from '@peage-pay/tailwind-global-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  content: string;
  rightIcon: JSX.Element;
  leftIcon: JSX.Element;
  showRightIcon: boolean;
  showLeftIcon: boolean;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Button> & Props;

const meta: Meta<StorybookProps> = {
  component: Button,
  title: 'Button',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    showRightIcon: {
      control: 'boolean',
    },
    showLeftIcon: {
      control: 'boolean',
    },
    content: {
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
        'transparent',
      ],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    content: 'test',
    variant: 'primary',
    rightIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    leftIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    theme: 'LIGHT',
  },
  render: ({
    variant,
    content,
    leftIcon,
    rightIcon,
    theme,
    showLeftIcon,
    showRightIcon,
  }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Button variant={variant}>
            {showLeftIcon ? (
              <Button.Icon position={'left'}>{leftIcon}</Button.Icon>
            ) : null}
            <Button.Content>{content}</Button.Content>
            {showRightIcon ? (
              <Button.Icon position={'right'}>{rightIcon}</Button.Icon>
            ) : null}
          </Button>
        </ThemeProvider>
      </div>
    );
  },
};
