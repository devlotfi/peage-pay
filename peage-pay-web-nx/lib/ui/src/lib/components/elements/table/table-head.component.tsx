import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import TableHeadTr from './table-head-tr.component';
import TableHeadTh from './table-head-th.component';

const tableHeadVariants = cva('');

interface TableHeadProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableHeadVariants> {}

const TableHead = ({
  className,
  children,
  ...props
}: TableHeadProps): JSX.Element => {
  return (
    <thead className={Utils.cn(tableHeadVariants({ className }))} {...props}>
      {children}
    </thead>
  );
};
TableHead.Tr = TableHeadTr;
TableHead.Th = TableHeadTh;
export default TableHead;
