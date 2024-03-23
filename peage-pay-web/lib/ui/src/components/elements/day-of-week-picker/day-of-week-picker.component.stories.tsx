import type { Meta, StoryObj } from "@storybook/react";
import DayOfWeekPicker from "./day-of-week-picker.component";
import { ThemeProvider } from "@peage-pay-web/tailwind-config";
import { ComponentProps } from "react";
import { DayOfWeekType } from "../../../__generated__/graphql";

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

type StorybookProps = ComponentProps<typeof DayOfWeekPicker> & Props;

const meta: Meta<StorybookProps> = {
  component: DayOfWeekPicker,
  title: "DayOfWeekPicker",
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
          <DayOfWeekPicker variant={variant} className="w-full mb-[1.5rem]">
            <DayOfWeekPicker.Main value={[DayOfWeekType.Sunday]}>
              {showLabel ? (
                <DayOfWeekPicker.Label>{textInputLabel}</DayOfWeekPicker.Label>
              ) : null}
            </DayOfWeekPicker.Main>
          </DayOfWeekPicker>
        </ThemeProvider>
      </div>
    );
  },
};
