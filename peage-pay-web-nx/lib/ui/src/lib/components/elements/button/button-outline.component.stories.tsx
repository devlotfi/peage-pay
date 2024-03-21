import type { Meta, StoryObj } from '@storybook/react';
import ButtonOutline from './button-outline.component';
import { ComponentProps } from 'react';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  buttonContent: string;
  rightIcon: JSX.Element;
  leftIcon: JSX.Element;
  showRightIcon: boolean;
  showLeftIcon: boolean;
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
    showRightIcon: {
      control: 'boolean',
    },
    showLeftIcon: {
      control: 'boolean',
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

export const Base: Story = {
  args: {
    buttonContent: 'test',
    variant: 'primary',
    rightIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    leftIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    theme: 'LIGHT',
  },
  render: ({
    variant,
    buttonContent,
    leftIcon,
    rightIcon,
    theme,
    showLeftIcon,
    showRightIcon,
  }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <ButtonOutline variant={variant}>
            {showLeftIcon ? (
              <ButtonOutline.Icon position={'left'}>
                {leftIcon}
              </ButtonOutline.Icon>
            ) : null}
            <ButtonOutline.Content>{buttonContent}</ButtonOutline.Content>
            {showRightIcon ? (
              <ButtonOutline.Icon position={'right'}>
                {rightIcon}
              </ButtonOutline.Icon>
            ) : null}
          </ButtonOutline>
        </ThemeProvider>
      </div>
    );
  },
};
