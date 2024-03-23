import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { Utils } from "@peage-pay-web/utils";

const tableBodyTd = cva(
  "first:pl-[1rem] px-[1rem] py-[0.5rem] whitespace-nowrap border-r-[1px] border-edge-200"
);

interface TableBodyTd
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableBodyTd> {}

const TableBodyTd = ({
  className,
  children,
  ...props
}: TableBodyTd): JSX.Element => {
  return (
    <td className={Utils.cn(tableBodyTd({ className }))} {...props}>
      {children}
    </td>
  );
};
export default TableBodyTd;
