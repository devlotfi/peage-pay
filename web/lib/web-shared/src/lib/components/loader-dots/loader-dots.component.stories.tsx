import type { Meta, StoryObj } from '@storybook/react';
import LoaderDots from './loader-dots.component';

const meta: Meta<typeof LoaderDots> = {
  component: LoaderDots,
  title: 'LoaderDots',
};
export default meta;
type Story = StoryObj<typeof LoaderDots>;

export const Primary = {
  args: {},
};
