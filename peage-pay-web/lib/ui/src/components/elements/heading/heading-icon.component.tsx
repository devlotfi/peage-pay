import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { HeadingContext } from './heading.context';

const headingIconVariants = cva('flex justify-center items-center', {
  variants: {
    variant: {
      primary: 'text-primary-100',
      success: 'text-success-100',
      error: 'text-error-100',
      warning: 'text-warning-100',
    },
    position: {
      left: 'mr-[0.5rem]',
      right: 'ml-[0.5rem]',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface HeadingIconProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingIconVariants> {}

const HeadingIcon = ({
  variant,
  className,
  children,
  position,
  ...props
}: HeadingIconProps): JSX.Element => {
  const { variant: globalVariant } = useContext(HeadingContext);

  return (
    <div
      className={Utils.cn(
        headingIconVariants({
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
export default HeadingIcon;
