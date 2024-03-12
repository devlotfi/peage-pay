import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { PageError } from '@peage-pay-web/assets';

const listPageLayoutErrorVariants = cva(
  'flex justify-center items-center h-full',
);

interface ListPageLayoutErrorProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listPageLayoutErrorVariants> {}

const ListPageLayoutError = ({
  className,
  ...props
}: ListPageLayoutErrorProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(listPageLayoutErrorVariants({ className }))}
      {...props}
    >
      <div className="flex flex-col items-center">
        <img className="h-[10rem] mb-[0.5rem]" src={PageError} alt="Error" />
        <div className="flex text-[17pt]">Error while fetching</div>
      </div>
    </div>
  );
};
export default ListPageLayoutError;
