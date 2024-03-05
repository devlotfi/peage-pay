import type { Meta, StoryObj } from '@storybook/react';
import LocationPicker from './location-picker.component';
import { ComponentProps } from 'react';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof LocationPicker> & Props;

const meta: Meta<StorybookProps> = {
  component: LocationPicker,
  title: 'LocationPicker',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    theme: 'LIGHT',
  },
  render: ({ theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <LocationPicker></LocationPicker>
        </ThemeProvider>
      </div>
    );
  },
};
