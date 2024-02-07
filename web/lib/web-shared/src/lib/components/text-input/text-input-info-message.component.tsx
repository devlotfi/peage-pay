import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '../../utils';
import { TextInputContext } from './text-input.component';

const textInputInfoMessageVariants = cva('flex ml-[1rem]', {
  variants: {
    variant: {
      primary: 'text-primary-100',
      success: 'text-success-100',
      error: 'text-error-100',
      warning: 'text-warning-100',
      'edge-100': 'text-edge-100',
      'edge-200': 'text-edge-200',
    },
  },
  defaultVariants: {
    variant: 'edge-100',
  },
});

interface TextInputInfoMessageProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textInputInfoMessageVariants> {}

const TextInputInfoMessage = ({
  className,
  children,
  variant,
  ...props
}: TextInputInfoMessageProps): JSX.Element => {
  const { variant: globalVariant } = useContext(TextInputContext);

  return (
    <div
      className={Utils.cn(
        textInputInfoMessageVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
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
