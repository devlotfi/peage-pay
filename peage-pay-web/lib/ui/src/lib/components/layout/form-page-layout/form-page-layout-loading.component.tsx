import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { PeagePayLogo } from '@peage-pay-web/assets';
import LoaderDots from '../../elements/loader-dots/loader-dots.component';
import { Utils } from '@peage-pay-web/utils';

const formPageLayoutLoadingVariants = cva(
  'flex justify-center items-center h-full',
);

interface FormPageLayoutLoadingProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formPageLayoutLoadingVariants> {
  loading: boolean;
}

const FormPageLayoutLoading = ({
  className,
  children,
  loading,
  ...props
}: FormPageLayoutLoadingProps) => {
  if (loading) {
    return (
      <div
        className={Utils.cn(formPageLayoutLoadingVariants({ className }))}
        {...props}
      >
        <div className="flex flex-col">
          <img
            className="h-[4.3rem] mb-[1rem]"
            src={PeagePayLogo}
            alt="PeagePayLogo"
          />
          <LoaderDots dotProps={{ variant: 'primary' }}></LoaderDots>
        </div>
      </div>
    );
  } else {
    return children;
  }
};
export default FormPageLayoutLoading;
