import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { NoData } from '@peage-pay-web/assets';

const listPageLayoutEmptyVariants = cva(
  'flex justify-center items-center h-full',
);

interface ListPageLayoutEmptyProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listPageLayoutEmptyVariants> {}

const ListPageLayoutEmpty = ({
  className,
  ...props
}: ListPageLayoutEmptyProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(listPageLayoutEmptyVariants({ className }))}
      {...props}
    >
      <div className="flex flex-col items-center">
        <img className="h-[10rem] mb-[0.5rem]" src={NoData} alt="Empty" />
        <div className="flex text-[17pt]">No data</div>
      </div>
    </div>
  );
};
export default ListPageLayoutEmpty;
