import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './menu-item.component';

const meta: Meta<typeof MenuItem> = {
  component: MenuItem,
  title: 'MenuItem',
};
export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Primary = {
  args: {},
};
