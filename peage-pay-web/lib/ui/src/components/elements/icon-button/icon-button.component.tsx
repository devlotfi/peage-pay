import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";

const iconButtonVariants = cva(
  "flex min-h-[2.7rem] min-w-[2.7rem] h-[2.7rem] w-[2.7rem] justify-center items-center text-[11pt] font-medium rounded-md duration-300 ease active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-primary-100 hover:bg-primary-200 text-color-content",
        success: "bg-success-100 hover:bg-success-200 text-color-content",
        error: "bg-error-100 hover:bg-error-200 text-color-content",
        warning: "bg-warning-100 hover:bg-warning-200 text-color-content",
        transparent: "bg-transparent text-base-content",
        "base-100": "bg-base-100 hover:bg-base-200 text-base-content",
        "base-200": "bg-base-200 hover:bg-base-300 text-base-content",
      },
    },
    defaultVariants: {
      variant: "base-100",
    },
  }
);

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

const IconButton = ({
  variant,
  className,
  children,
  ...props
}: IconButtonProps): JSX.Element => {
  return (
    <button
      className={Utils.cn(iconButtonVariants({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
export default IconButton;
