import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const textInputFieldVariants = cva(
  'flex w-full border-[1px] outline-none bg-transparent border-none px-[1rem] text-base-content'
);

interface TextInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textInputFieldVariants> {}

const TextInputField = ({
  className,
  children,
  ...props
}: TextInputFieldProps): JSX.Element => {
  return (
    <input
      className={Utils.cn(
        textInputFieldVariants({
          className,
        })
      )}
      {...props}
    >
      {children}
    </input>
  );
};
export default TextInputField;
