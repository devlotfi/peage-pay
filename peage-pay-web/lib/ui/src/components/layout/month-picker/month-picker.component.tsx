import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";
import Checkbox from "../../elements/checkbox/checkbox.component";
import { MonthType } from "../../../__generated__/graphql";

const monthPickerVariants = cva(
  "grid grid-cols-2 lg:grid-cols-4 min-h-[2.7rem] border-[1px] border-edge-100 rounded-lg relative focus-within:outline outline-[3px]"
);

interface MonthPickerProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof monthPickerVariants> {
  value?: MonthType[];
  handleChange?: (selectedMonths: MonthType[]) => void;
}

const MonthPicker = ({
  className,
  children,
  value,
  handleChange,
  ...props
}: MonthPickerProps): JSX.Element => {
  const handleMonthSelected = (month: MonthType) => {
    if (handleChange && value) {
      handleChange([...value, month]);
    }
  };

  const handleMonthUnselected = (month: MonthType) => {
    if (handleChange && value) {
      handleChange(value.filter((listMonth) => month !== listMonth));
    }
  };

  const isMonthSelected = (month: MonthType) => {
    if (value && value.find((listMonth) => listMonth === month)) {
      return true;
    } else {
      return false;
    }
  };

  const renderMonths = () => {
    return Object.keys(MonthType).map((key) => {
      const month = MonthType[key as keyof typeof MonthType];
      return (
        <div key={key} className="p-[0.7rem]">
          <Checkbox initialChecked={isMonthSelected(month)} variant={"primary"}>
            <Checkbox.Check></Checkbox.Check>
            <Checkbox.Field
              onChange={(e) =>
                e.target.checked
                  ? handleMonthSelected(month)
                  : handleMonthUnselected(month)
              }
            ></Checkbox.Field>
            <Checkbox.Label>{month}</Checkbox.Label>
          </Checkbox>
        </div>
      );
    });
  };

  return (
    <div className={Utils.cn(monthPickerVariants({ className }))} {...props}>
      <div className="flex text-[11pt] absolute top-[-1rem] left-[1rem] bg-base-100 px-[0.5rem]">
        Select months
      </div>
      {renderMonths()}
    </div>
  );
};
export default MonthPicker;
