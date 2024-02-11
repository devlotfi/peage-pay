import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './tooltip.component';
import { ThemeProvider } from '@peage-pay/tailwind-global-config';
import { ComponentProps } from 'react';
import Button from '../button/button.component';

interface Props {
  tooltipMessage: string;
  variant: 'primary' | 'success' | 'error' | 'warning';
  position: 'top' | 'bottom' | 'left' | 'right';
  mainElement: JSX.Element;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Tooltip> & Props;

const meta: Meta<StorybookProps> = {
  component: Tooltip,
  title: 'Tooltip',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    tooltipMessage: {
      control: 'text',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
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
    variant: 'primary',
    tooltipMessage: 'test',
    position: 'bottom',
    mainElement: (
      <Button variant={'primary'} className="w-full">
        <Button.Content>Tooltip</Button.Content>
      </Button>
    ),
    theme: 'LIGHT',
  },
  render: ({ variant, tooltipMessage, theme, position, mainElement }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Tooltip
            tooltipElement={
              <Tooltip.Message position={position} variant={variant}>
                {tooltipMessage}
              </Tooltip.Message>
            }
            className="w-full"
          >
            {mainElement}
          </Tooltip>
        </ThemeProvider>
      </div>
    );
  },
};
