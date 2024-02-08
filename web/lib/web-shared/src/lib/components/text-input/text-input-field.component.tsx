import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { WebUtils } from '../../web-utils';

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
      className={WebUtils.cn(
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
