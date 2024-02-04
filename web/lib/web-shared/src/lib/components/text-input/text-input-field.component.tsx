import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { Utils } from '../../utils';

const textInputFieldVariants = cva(
  'flex w-full border-[1px] outline-none bg-transparent border-none px-[1rem]'
);

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textInputFieldVariants> {}

const TextInputField = ({
  className,
  children,
  ...props
}: TextInputProps): JSX.Element => {
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
