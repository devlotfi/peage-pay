import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";

const formPageLayoutTitleVariants = cva("flex flex-col ml-[1rem] my-[1.5rem]");

interface FormPageLayoutTitleProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formPageLayoutTitleVariants> {}

const FormPageLayoutTitle = ({
  className,
  children,
  ...props
}: FormPageLayoutTitleProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(formPageLayoutTitleVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default FormPageLayoutTitle;
