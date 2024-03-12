import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { PageError } from '@peage-pay-web/assets';
import { Utils } from '@peage-pay-web/utils';

const formPageLayoutErrorVariants = cva(
  'flex justify-center items-center h-full',
);

interface FormPageLayoutErrorProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formPageLayoutErrorVariants> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

const FormPageLayoutError = ({
  className,
  children,
  error,
  ...props
}: FormPageLayoutErrorProps) => {
  if (error) {
    return (
      <div
        className={Utils.cn(formPageLayoutErrorVariants({ className }))}
        {...props}
      >
        <div className="flex flex-col">
          <img
            className="h-[10rem] mb-[1rem]"
            src={PageError}
            alt="PeageError"
          />
          <div className="flex text-[17pt]">Error while fetching</div>
        </div>
      </div>
    );
  } else {
    return children;
  }
};
export default FormPageLayoutError;
