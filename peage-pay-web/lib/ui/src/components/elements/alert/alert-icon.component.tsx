import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const alertIconVariants = cva('flex justify-center items-center text-[15pt]', {
  variants: {
    position: {
      left: 'mr-[0.5rem]',
      right: 'ml-[0.5rem]',
    },
  },
});

interface AlertIconProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertIconVariants> {}

const AlertIcon = ({
  position,
  className,
  children,
  ...props
}: AlertIconProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(alertIconVariants({ position, className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default AlertIcon;
