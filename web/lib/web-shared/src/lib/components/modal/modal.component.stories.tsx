import type { Meta, StoryObj } from '@storybook/react';
import Modal from './modal.component';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary = {
  args: {},
};
