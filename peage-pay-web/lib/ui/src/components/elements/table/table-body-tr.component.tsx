import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const tableBodyTr = cva(
  'border-edge-200 border-b-[1px] last:border-b-0 font-normal',
  {
    variants: {
      variant: {
        zebra: 'even:bg-base-200',
      },
    },
  },
);

interface TableBodyTr
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableBodyTr> {}

const TableBodyTr = ({
  className,
  children,
  variant,
  ...props
}: TableBodyTr): JSX.Element => {
  return (
    <tr className={Utils.cn(tableBodyTr({ className, variant }))} {...props}>
      {children}
    </tr>
  );
};
export default TableBodyTr;
