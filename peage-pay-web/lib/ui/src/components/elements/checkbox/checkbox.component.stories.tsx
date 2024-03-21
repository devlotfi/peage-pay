import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './checkbox.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';

interface Props {
  checkboxLabel: string;
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
    },
    checkboxLabel: {
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
    checkboxLabel: 'test',
    theme: 'LIGHT',
  },
  render: ({ variant, checkboxLabel, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Checkbox variant={variant}>
            <Checkbox.Label>{checkboxLabel}</Checkbox.Label>
            <Checkbox.Check></Checkbox.Check>
            <Checkbox.Field></Checkbox.Field>
          </Checkbox>
        </ThemeProvider>
      </div>
    );
  },
};
