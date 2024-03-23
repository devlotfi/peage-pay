import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, useContext } from "react";
import { Utils } from "@peage-pay-web/utils";
import { DayOfWeekPickerContext } from "./day-of-week-picker.component";

const dayOfWeekPickerInfoMessageVariants = cva("flex ml-[1rem]", {
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
});

interface DayOfWeekPickerInfoMessageProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dayOfWeekPickerInfoMessageVariants> {}

const DayOfWeekPickerInfoMessage = ({
  className,
  children,
  variant,
  ...props
}: DayOfWeekPickerInfoMessageProps): JSX.Element => {
  const { variant: globalVariant } = useContext(DayOfWeekPickerContext);

  return (
    <div
      className={Utils.cn(
        dayOfWeekPickerInfoMessageVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          className,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default DayOfWeekPickerInfoMessage;
