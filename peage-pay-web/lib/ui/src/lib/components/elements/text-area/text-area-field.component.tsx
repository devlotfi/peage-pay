import { VariantProps, cva } from 'class-variance-authority';
import { TextareaHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const textAreaFieldVariants = cva(
  'flex w-full rounded-lg border-[1px] outline-none bg-transparent border-none px-[1rem] min-h-[5rem] pt-[0.7rem]',
);

interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaFieldVariants> {}

const TextAreaField = ({
  className,
  children,
  ...props
}: TextAreaFieldProps): JSX.Element => {
  return (
    <textarea
      className={Utils.cn(
        textAreaFieldVariants({
          className,
        }),
      )}
      {...props}
    >
      {children}
    </textarea>
  );
};
export default TextAreaField;
