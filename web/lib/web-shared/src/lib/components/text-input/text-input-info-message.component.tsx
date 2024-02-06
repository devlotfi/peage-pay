import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '../../utils';

const textInputInfoMessageVariants = cva('flex ml-[1rem]');

interface TextInputInfoMessageProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textInputInfoMessageVariants> {}

const TextInputInfoMessage = ({
  className,
  children,
  ...props
}: TextInputInfoMessageProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(
        textInputInfoMessageVariants({
          className,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default TextInputInfoMessage;
