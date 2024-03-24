import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";
import DirectionalInputsArrow from "./directional-inputs-arrow.component";

const directionalInputsVariants = cva(
  "flex sm:items-start flex-col sm:flex-row mb-[1.3rem] sm:mb-[0.5rem]"
);

interface DirectionalInputsProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof directionalInputsVariants> {}

const DirectionalInputs = ({
  className,
  children,
  ...props
}: DirectionalInputsProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(directionalInputsVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
DirectionalInputs.Arrow = DirectionalInputsArrow;
export default DirectionalInputs;
