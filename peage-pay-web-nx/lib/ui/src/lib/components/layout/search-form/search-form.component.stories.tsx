import type { Meta, StoryObj } from '@storybook/react';
import SearchForm from './search-form.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';

interface Props {
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof SearchForm> & Props;

const meta: Meta<StorybookProps> = {
  component: SearchForm,
  title: 'SearchForm',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const LeftIcon: Story = {
  args: {
    theme: 'LIGHT',
  },
  render: ({ theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <SearchForm<string>
            handleSearch={(search) => console.log(search)}
            initialFieldSearch={''}
          ></SearchForm>
        </ThemeProvider>
      </div>
    );
  },
};
