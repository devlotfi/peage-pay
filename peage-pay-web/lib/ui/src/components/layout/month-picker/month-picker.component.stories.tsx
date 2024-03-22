import type { Meta, StoryObj } from "@storybook/react";
import MonthPicker from "./month-picker.component";
import { ComponentProps } from "react";
import { ThemeProvider } from "@peage-pay-web/tailwind-config";
import { MonthType } from "../../../__generated__/graphql";

interface Props {
  theme: "LIGHT" | "DARK";
}

type StorybookProps = ComponentProps<typeof MonthPicker> & Props;

const meta: Meta<StorybookProps> = {
  component: MonthPicker,
  title: "MonthPicker",
  argTypes: {
    theme: {
      control: "select",
      options: ["LIGHT", "DARK"],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    theme: "LIGHT",
  },
  render: ({ theme }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <MonthPicker value={[MonthType.April]}></MonthPicker>
        </ThemeProvider>
      </div>
    );
  },
};
