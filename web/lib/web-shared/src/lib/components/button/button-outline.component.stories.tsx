import type { Meta, StoryObj } from '@storybook/react';
import ButtonOutline from './button-outline.component';
import { ComponentProps } from 'react';
import { ThemeProvider } from '@peage-pay/tailwind-global-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  buttonContent: string;
  rightIcon: JSX.Element;
  leftIcon: JSX.Element;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof ButtonOutline> & Props;

const meta: Meta<StorybookProps> = {
  component: ButtonOutline,
  title: 'ButtonOutline',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    buttonContent: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning'],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const RightIcon: Story = {
  args: {
    buttonContent: 'test',
    variant: 'primary',
    rightIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
  },
  render: ({ variant, buttonContent, rightIcon, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme || 'LIGHT'}>
        <ThemeProvider>
          <ButtonOutline variant={variant}>
            <ButtonOutline.Content>{buttonContent}</ButtonOutline.Content>
            <ButtonOutline.Icon position={'right'}>
              {rightIcon}
            </ButtonOutline.Icon>
          </ButtonOutline>
        </ThemeProvider>
      </div>
    );
  },
};

export const LeftIcon: Story = {
  args: {
    buttonContent: 'test',
    variant: 'primary',
    leftIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
  },
  render: ({ variant, buttonContent, leftIcon, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <ButtonOutline variant={variant}>
            <ButtonOutline.Icon position={'left'}>
              {leftIcon}
            </ButtonOutline.Icon>
            <ButtonOutline.Content>{buttonContent}</ButtonOutline.Content>
          </ButtonOutline>
        </ThemeProvider>
      </div>
    );
  },
};

export const BothIcons: Story = {
  args: {
    buttonContent: 'test',
    variant: 'primary',
    rightIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    leftIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
  },
  render: ({ variant, buttonContent, leftIcon, rightIcon, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <ButtonOutline variant={variant}>
            <ButtonOutline.Icon position={'left'}>
              {leftIcon}
            </ButtonOutline.Icon>

            <ButtonOutline.Content>{buttonContent}</ButtonOutline.Content>

            <ButtonOutline.Icon position={'right'}>
              {rightIcon}
            </ButtonOutline.Icon>
          </ButtonOutline>
        </ThemeProvider>
      </div>
    );
  },
};
