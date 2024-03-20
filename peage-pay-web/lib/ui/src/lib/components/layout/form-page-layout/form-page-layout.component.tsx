import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import FormPageLayoutForm from './form-page-layout-form.component';

const formPageLayoutVariants = cva('flex flex-col w-full h-full items-center');

interface FormPageLayoutProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formPageLayoutVariants> {}

const FormPageLayout = ({
  className,
  children,
  ...props
}: FormPageLayoutProps): JSX.Element => {
  return (
    <div className={Utils.cn(formPageLayoutVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
FormPageLayout.Form = FormPageLayoutForm;
export default FormPageLayout;
