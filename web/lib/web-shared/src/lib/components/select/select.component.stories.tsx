import type { Meta, StoryObj } from '@storybook/react';
import Select from './select.component';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Primary = {
  args: {},
};
