import { VariantProps, cva } from 'class-variance-authority';
import { FormHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const formPageLayoutFormVariants = cva(
  'flex flex-col max-w-[55rem] w-full h-full',
);

interface FormPageLayoutFormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formPageLayoutFormVariants> {}

const FormPageLayoutForm = ({
  className,
  children,
  ...props
}: FormPageLayoutFormProps): JSX.Element => {
  return (
    <form
      className={Utils.cn(formPageLayoutFormVariants({ className }))}
      {...props}
    >
      {children}
    </form>
  );
};
export default FormPageLayoutForm;
