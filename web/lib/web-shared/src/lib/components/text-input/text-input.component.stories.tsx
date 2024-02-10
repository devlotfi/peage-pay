import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './text-input.component';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'TextInput',
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary = {
  args: {},
};
