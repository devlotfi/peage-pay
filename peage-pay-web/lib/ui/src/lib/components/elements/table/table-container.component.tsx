import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const tableContainer = cva(
  'overflow-x-auto rounded-xl border-edge-100 border-[1px]',
);

interface TableContainer
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableContainer> {}

const TableContainer = ({
  className,
  children,
  ...props
}: TableContainer): JSX.Element => {
  return (
    <div className={Utils.cn(tableContainer({ className }))} {...props}>
      {children}
    </div>
  );
};
export default TableContainer;
