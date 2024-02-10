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
      defaultValue: 'LIGHT',
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

export const RightIcon: Story = {
  args: {
    content: 'test',
    variant: 'primary',
    rightIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
  },
  render: ({ variant, content, rightIcon, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Button variant={variant}>
            <Button.Content>{content}</Button.Content>
            <Button.Icon position={'right'}>{rightIcon}</Button.Icon>
          </Button>
        </ThemeProvider>
      </div>
    );
  },
};

export const LeftIcon: Story = {
  args: {
    content: 'test',
    variant: 'primary',
    leftIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
  },
  render: ({ variant, content, leftIcon, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Button variant={variant}>
            <Button.Icon position={'left'}>{leftIcon}</Button.Icon>
            <Button.Content>{content}</Button.Content>
          </Button>
        </ThemeProvider>
      </div>
    );
  },
};

export const BothIcons: Story = {
  args: {
    content: 'test',
    variant: 'primary',
    rightIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    leftIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
  },
  render: ({ variant, content, leftIcon, rightIcon, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Button variant={variant}>
            <Button.Icon position={'left'}>{leftIcon}</Button.Icon>

            <Button.Content>{content}</Button.Content>

            <Button.Icon position={'right'}>{rightIcon}</Button.Icon>
          </Button>
        </ThemeProvider>
      </div>
    );
  },
};
