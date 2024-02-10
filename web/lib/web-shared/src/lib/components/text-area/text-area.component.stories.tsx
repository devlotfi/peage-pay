import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './text-area.component';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'TextArea',
};
export default meta;
type Story = StoryObj<typeof TextArea>;

export const Primary = {
  args: {},
};
