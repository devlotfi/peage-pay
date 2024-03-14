import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const tableBodyTr = cva(
  'even:bg-base-200 border-edge-200 border-b-[1px] last:border-b-0',
);

interface TableBodyTr
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableBodyTr> {}

const TableBodyTr = ({
  className,
  children,
  ...props
}: TableBodyTr): JSX.Element => {
  return (
    <tr className={Utils.cn(tableBodyTr({ className }))} {...props}>
      {children}
    </tr>
  );
};
export default TableBodyTr;
