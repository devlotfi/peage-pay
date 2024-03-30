import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { TextAreaContext } from './text-area.context';

const textAreaInfoMessageVariants = cva('flex ml-[1rem]', {
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

interface TextAreaInfoMessageProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textAreaInfoMessageVariants> {}

const TextAreaInfoMessage = ({
  variant,
  className,
  children,
  ...props
}: TextAreaInfoMessageProps): JSX.Element => {
  const { variant: globalVariant } = useContext(TextAreaContext);

  return (
    <div
      className={Utils.cn(
        textAreaInfoMessageVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          className,
        }),
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default TextAreaInfoMessage;
