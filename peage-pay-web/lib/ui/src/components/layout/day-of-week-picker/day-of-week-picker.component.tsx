import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";
import Checkbox from "../../elements/checkbox/checkbox.component";
import { DayOfWeekType } from "../../../__generated__/graphql";

const dayOfWeekPickerVariants = cva(
  "grid grid-cols-2 lg:grid-cols-4 min-h-[2.7rem] border-[1px] border-edge-100 rounded-lg relative focus-within:outline outline-[3px]"
);

interface DayOfWeekPickerProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dayOfWeekPickerVariants> {
  value?: DayOfWeekType[];
  handleChange?: (selectedMonths: DayOfWeekType[]) => void;
}

const DayOfWeekPicker = ({
  className,
  children,
  value,
  handleChange,
  ...props
}: DayOfWeekPickerProps): JSX.Element => {
  const handleDaySelected = (month: DayOfWeekType) => {
    if (handleChange && value) {
      handleChange([...value, month]);
    }
  };

  const handleDayUnselected = (month: DayOfWeekType) => {
    if (handleChange && value) {
      handleChange(value.filter((listMonth) => month !== listMonth));
    }
  };

  const isDaySelected = (month: DayOfWeekType) => {
    if (value && value.find((listMonth) => listMonth === month)) {
      return true;
    } else {
      return false;
    }
  };

  const renderDays = () => {
    return Object.keys(DayOfWeekType).map((key) => {
      const month = DayOfWeekType[key as keyof typeof DayOfWeekType];
      return (
        <div key={key} className="p-[0.7rem]">
          <Checkbox initialChecked={isDaySelected(month)} variant={"primary"}>
            <Checkbox.Check></Checkbox.Check>
            <Checkbox.Field
              onChange={(e) =>
                e.target.checked
                  ? handleDaySelected(month)
                  : handleDayUnselected(month)
              }
            ></Checkbox.Field>
            <Checkbox.Label>{month}</Checkbox.Label>
          </Checkbox>
        </div>
      );
    });
  };

  return (
    <div
      className={Utils.cn(dayOfWeekPickerVariants({ className }))}
      {...props}
    >
      <div className="flex text-[11pt] absolute top-[-1rem] left-[1rem] bg-base-100 px-[0.5rem]">
        Select days of week
      </div>
      {renderDays()}
    </div>
  );
};
export default DayOfWeekPicker;
