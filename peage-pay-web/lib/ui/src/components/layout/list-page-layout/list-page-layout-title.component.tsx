import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";

const listPageLayoutTitleVariants = cva("flex flex-col ml-[1rem] my-[0.5rem]");

interface ListPageLayoutTitleProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listPageLayoutTitleVariants> {}

const ListPageLayoutTitle = ({
  className,
  children,
  ...props
}: ListPageLayoutTitleProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(listPageLayoutTitleVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default ListPageLayoutTitle;
