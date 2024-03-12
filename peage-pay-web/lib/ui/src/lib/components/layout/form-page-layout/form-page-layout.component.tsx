import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import FormPageLayoutForm from './form-page-layout-form.component';
import FormPageLayoutLoading from './form-page-layout-loading.component';
import FormPageLayoutError from './form-page-layout-error.component';

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
FormPageLayout.Loading = FormPageLayoutLoading;
FormPageLayout.Error = FormPageLayoutError;
export default FormPageLayout;
