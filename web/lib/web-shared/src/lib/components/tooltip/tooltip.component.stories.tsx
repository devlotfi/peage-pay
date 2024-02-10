import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './tooltip.component';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Tooltip',
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary = {
  args: {},
};
