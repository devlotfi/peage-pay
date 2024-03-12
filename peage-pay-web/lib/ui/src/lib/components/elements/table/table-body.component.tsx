import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import TableBodyTr from './table-body-tr.component';
import TableBodyTd from './table-body-td.component';

const tableBody = cva('');

interface TableBody
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableBody> {}

const TableBody = ({
  className,
  children,
  ...props
}: TableBody): JSX.Element => {
  return (
    <tbody className={Utils.cn(tableBody({ className }))} {...props}>
      {children}
    </tbody>
  );
};
TableBody.Tr = TableBodyTr;
TableBody.Td = TableBodyTd;
export default TableBody;
