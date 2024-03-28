import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes, RefObject } from 'react';
import { Utils } from '@peage-pay-web/utils';

const textInputFieldVariants = cva(
  'flex w-full rounded-lg border-[1px] outline-none bg-transparent border-none px-[1rem] text-base-content',
);

interface TextInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textInputFieldVariants> {
  fieldRef?: RefObject<HTMLInputElement>;
}

const TextInputField = ({
  className,
  children,
  fieldRef,
  ...props
}: TextInputFieldProps): JSX.Element => {
  return (
    <input
      className={Utils.cn(
        textInputFieldVariants({
          className,
        }),
      )}
      ref={fieldRef}
      {...props}
    >
      {children}
    </input>
  );
};
export default TextInputField;
