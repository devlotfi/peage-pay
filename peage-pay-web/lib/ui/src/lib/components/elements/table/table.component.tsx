import { VariantProps, cva } from 'class-variance-authority';
import { TableHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import TableContainer from './table-container.component';
import TableHead from './table-head.component';
import TableBody from './table-body.component';

const tableVariants = cva('w-full border-collapse');

interface TableProps
  extends TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {}

const Table = ({ className, children, ...props }: TableProps): JSX.Element => {
  return (
    <table className={Utils.cn(tableVariants({ className }))} {...props}>
      {children}
    </table>
  );
};
Table.Container = TableContainer;
Table.Head = TableHead;
Table.Body = TableBody;
export default Table;
