import type { Meta, StoryObj } from "@storybook/react";
import MonthPicker from "./month-picker.component";
import { ThemeProvider } from "@peage-pay-web/tailwind-config";
import { ComponentProps } from "react";
import { MonthType } from "../../../__generated__/graphql";

interface Props {
  textInputLabel: string;
  showLabel: boolean;
  showRightIcon: boolean;
  showLeftIcon: boolean;
  inputType:
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "datetime-local";
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
    textInputLabel: {
      control: "text",
    },
    showLabel: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "success",
        "error",
        "warning",
        "edge-100",
        "edge-200",
      ],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    variant: "edge-100",
    textInputLabel: "test",
    showLabel: true,
    theme: "LIGHT",
  },
  render: ({ variant, textInputLabel, theme, showLabel }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <MonthPicker variant={variant} className="w-full mb-[1.5rem]">
            <MonthPicker.Main value={[MonthType.April]}>
              {showLabel ? (
                <MonthPicker.Label>{textInputLabel}</MonthPicker.Label>
              ) : null}
            </MonthPicker.Main>
          </MonthPicker>
        </ThemeProvider>
      </div>
    );
  },
};
