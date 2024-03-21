import type { Meta, StoryObj } from '@storybook/react';
import LoaderDots from './loader-dots.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';

interface Props {
  theme: 'LIGHT' | 'DARK';
  dotSize: number;
  variant:
    | 'primary'
    | 'success'
    | 'error'
    | 'warning'
    | 'base-100'
    | 'base-200'
    | 'base-content'
    | 'color-content';
}

type StorybookProps = ComponentProps<typeof LoaderDots> & Props;

const meta: Meta<StorybookProps> = {
  component: LoaderDots,
  title: 'LoaderDots',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    dotSize: {
      control: 'number',
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
        'base-content',
        'color-content',
      ],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    theme: 'LIGHT',
    dotSize: 20,
    variant: 'primary',
  },
  render: ({ theme, variant, dotSize }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <LoaderDots
            dotProps={{
              variant,
              style: {
                height: dotSize,
                width: dotSize,
              },
            }}
          ></LoaderDots>
        </ThemeProvider>
      </div>
    );
  },
};
