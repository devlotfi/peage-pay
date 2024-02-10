import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './breadcrumb.component';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Primary = {
  args: {},
};
