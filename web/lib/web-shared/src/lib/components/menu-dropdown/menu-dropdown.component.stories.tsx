import type { Meta, StoryObj } from '@storybook/react';
import MenuDropdown from './menu-dropdown.component';

const meta: Meta<typeof MenuDropdown> = {
  component: MenuDropdown,
  title: 'MenuDropdown',
};
export default meta;
type Story = StoryObj<typeof MenuDropdown>;

export const Primary = {
  args: {},
};
