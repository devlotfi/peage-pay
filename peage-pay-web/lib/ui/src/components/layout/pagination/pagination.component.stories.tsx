import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './pagination.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';

interface Props {
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Pagination> & Props;

const meta: Meta<StorybookProps> = {
  component: Pagination,
  title: 'Pagination',
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
          <Pagination maxPages={10} value={1}></Pagination>
        </ThemeProvider>
      </div>
    );
  },
};
