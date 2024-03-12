import type { Meta, StoryObj } from '@storybook/react';
import Table from './table.component';
import { ComponentProps } from 'react';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import Button from '../button/button.component';

interface Props {
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Table> & Props;

const meta: Meta<StorybookProps> = {
  component: Table,
  title: 'Table',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    theme: 'LIGHT',
  },
  render: ({ theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Table></Table>
          <div className="max-w-[30rem] overflow-x-auto rounded-xl border-edge-200 border-[1px]">
            <table className="border-collapse rounded-lg">
              <thead>
                <tr className="h-[3rem] min-h-[3rem] border-edge-100 border-b-[1px] last:border-b-0 bg-primary-transparent">
                  {[1, 2, 3, 4].map(() => (
                    <th className="first:pl-[1rem] pr-[1rem] py-[0.5rem] font-bold text-left">
                      COntent
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19,
                ].map(() => (
                  <tr className="h-[3rem] min-h-[3rem] odd:bg-base-200 border-edge-200 border-b-[1px] last:border-b-0">
                    {[1, 2, 3, 4].map(() => (
                      <td className="first:pl-[1rem] pr-[1rem] py-[0.5rem] whitespace-nowrap">
                        Content Content Content Content Content
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ThemeProvider>
      </div>
    );
  },
};
