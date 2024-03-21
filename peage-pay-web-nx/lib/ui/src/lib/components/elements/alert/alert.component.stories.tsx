import type { Meta, StoryObj } from '@storybook/react';
import Alert from './alert.component';
import { ComponentProps } from 'react';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
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

type StorybookProps = ComponentProps<typeof Alert> & Props;

const meta: Meta<StorybookProps> = {
  component: Alert,
  title: 'Alert',
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
          <Alert variant={variant}>
            {showLeftIcon ? (
              <Alert.Icon position={'left'}>{leftIcon}</Alert.Icon>
            ) : null}
            <Alert.Content>{content}</Alert.Content>
            {showRightIcon ? (
              <Alert.Icon position={'right'}>{rightIcon}</Alert.Icon>
            ) : null}
          </Alert>
        </ThemeProvider>
      </div>
    );
  },
};
