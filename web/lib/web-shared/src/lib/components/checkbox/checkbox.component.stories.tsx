import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './checkbox.component';
import { ThemeProvider } from '@peage-pay/tailwind-global-config';
import { ComponentProps } from 'react';

interface Props {
  label: string;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Checkbox> & Props;

const meta: Meta<StorybookProps> = {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
      defaultValue: 'LIGHT',
    },
    label: {
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
    variant: 'primary',
    label: 'test',
  },
  render: ({ variant, label, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Checkbox variant={variant}>
            <Checkbox.Label>{label}</Checkbox.Label>
            <Checkbox.Check></Checkbox.Check>
            <Checkbox.Field></Checkbox.Field>
          </Checkbox>
        </ThemeProvider>
      </div>
    );
  },
};
