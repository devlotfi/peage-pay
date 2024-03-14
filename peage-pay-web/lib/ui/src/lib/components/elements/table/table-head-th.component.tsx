import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const tableHeadThVariants = cva(
  'first:pl-[1rem] pr-[1rem] py-[0.5rem] font-bold text-left whitespace-nowrap',
);

interface TableHeadThProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableHeadThVariants> {}

const TableHeadTh = ({
  className,
  children,
  ...props
}: TableHeadThProps): JSX.Element => {
  return (
    <th className={Utils.cn(tableHeadThVariants({ className }))} {...props}>
      {children}
    </th>
  );
};
export default TableHeadTh;
