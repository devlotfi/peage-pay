import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { PeagePayLogo } from '@peage-pay-web/assets';
import LoaderDots from '../../elements/loader-dots/loader-dots.component';

const listPageLayoutLoadingVariants = cva(
  'flex justify-center items-center h-full',
);

interface ListPageLayoutLoadingProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listPageLayoutLoadingVariants> {}

const ListPageLayoutLoading = ({
  className,
  ...props
}: ListPageLayoutLoadingProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(listPageLayoutLoadingVariants({ className }))}
      {...props}
    >
      <div className="flex flex-col">
        <img
          className="h-[3rem] mb-[0.5rem]"
          src={PeagePayLogo}
          alt="PeagePayLogo"
        />
        <LoaderDots dotProps={{ variant: 'primary' }}></LoaderDots>
      </div>
    </div>
  );
};
export default ListPageLayoutLoading;
