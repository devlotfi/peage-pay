import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";

const listPageLayoutFooterVariants = cva(
  "mt-auto flex justify-center pt-[0.5rem]"
);

interface ListPageLayoutFooterProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listPageLayoutFooterVariants> {}

const ListPageLayoutFooter = ({
  className,
  children,
  ...props
}: ListPageLayoutFooterProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(listPageLayoutFooterVariants({ className }))}
      {...props}
    >
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
};
export default ListPageLayoutFooter;
