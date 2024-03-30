import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { TextAreaContext } from './text-area.context';

const textAreaIconVariants = cva(
  'flex justify-center items-center text-[15pt] mt-[1rem]',
  {
    variants: {
      variant: {
        primary: 'text-primary-100',
        success: 'text-success-100',
        error: 'text-error-100',
        warning: 'text-warning-100',
        'edge-100': 'text-edge-100',
        'edge-200': 'text-edge-200',
      },
      position: {
        left: 'pl-[1rem]',
        right: 'pr-[1rem]',
      },
    },
    defaultVariants: {
      variant: 'edge-100',
    },
  },
);

interface TextAreaIconProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textAreaIconVariants> {}

const TextAreaIcon = ({
  variant,
  className,
  children,
  position,
  ...props
}: TextAreaIconProps): JSX.Element => {
  const { variant: globalVariant } = useContext(TextAreaContext);

  return (
    <div
      className={Utils.cn(
        textAreaIconVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          position,
          className,
        }),
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default TextAreaIcon;
