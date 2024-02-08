import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '../../web-utils';

const buttonIconVariants = cva('flex justify-center items-center text-[15pt]', {
  variants: {
    position: {
      left: 'mr-[0.5rem]',
      right: 'ml-[0.5rem]',
    },
  },
});

interface ButtonIconProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonIconVariants> {}

const ButtonIcon = ({
  position,
  className,
  children,
  ...props
}: ButtonIconProps): JSX.Element => {
  return (
    <div
      className={WebUtils.cn(buttonIconVariants({ position, className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default ButtonIcon;
