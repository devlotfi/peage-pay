import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const tableHeadTrVariants = cva(
  'h-[3rem] min-h-[3rem] border-edge-100 border-b-[1px] last:border-b-0 bg-primary-transparent',
);

interface TableHeadTrProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableHeadTrVariants> {}

const TableHeadTr = ({
  className,
  children,
  ...props
}: TableHeadTrProps): JSX.Element => {
  return (
    <tr className={Utils.cn(tableHeadTrVariants({ className }))} {...props}>
      {children}
    </tr>
  );
};
export default TableHeadTr;
