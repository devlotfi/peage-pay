import type { Meta, StoryObj } from '@storybook/react';
import Link from './link.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';

interface Props {
  linkContent: string;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Link> & Props;

const meta: Meta<StorybookProps> = {
  component: Link,
  title: 'CustomLink',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    linkContent: {
      control: 'text',
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    linkContent: 'test',
    theme: 'LIGHT',
  },
  render: ({ linkContent, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Link>{linkContent}</Link>
        </ThemeProvider>
      </div>
    );
  },
};
