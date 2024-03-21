import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './tabs.component';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs',
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary = {
  args: {},
};
