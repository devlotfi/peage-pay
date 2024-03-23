import { VariantProps, cva } from "class-variance-authority";
import { LabelHTMLAttributes, useContext } from "react";
import { Utils } from "@peage-pay-web/utils";
import { DayOfWeekPickerContext } from "./day-of-week-picker.component";

const dayOfWeekPickerLabelVariants = cva(
  "flex text-[11pt] absolute top-[-1rem] left-[1rem] bg-base-100 px-[0.5rem]",
  {
    variants: {
      variant: {
        primary: "text-primary-100",
        success: "text-success-100",
        error: "text-error-100",
        warning: "text-warning-100",
        "edge-100": "text-edge-100",
        "edge-200": "text-edge-200",
      },
    },
    defaultVariants: {
      variant: "edge-100",
    },
  }
);

interface DayOfWeekPickerLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof dayOfWeekPickerLabelVariants> {}

const DayOfWeekPickerLabel = ({
  variant,
  className,
  children,
  ...props
}: DayOfWeekPickerLabelProps): JSX.Element => {
  const { variant: globalVariant } = useContext(DayOfWeekPickerContext);

  return (
    <label
      className={Utils.cn(
        dayOfWeekPickerLabelVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          className,
        })
      )}
      {...props}
    >
      {children}
    </label>
  );
};
export default DayOfWeekPickerLabel;
