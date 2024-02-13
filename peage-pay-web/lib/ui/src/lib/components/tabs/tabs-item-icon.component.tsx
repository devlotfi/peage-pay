import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const tabsItemIconVariants = cva(
  'flex justify-center items-center text-[15pt]',
  {
    variants: {
      position: {
        left: 'mr-[0.5rem]',
        right: 'ml-[0.5rem]',
      },
    },
  }
);

interface TabsItemIconProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsItemIconVariants> {}

const TabsItemIcon = ({
  position,
  className,
  children,
  ...props
}: TabsItemIconProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(tabsItemIconVariants({ position, className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default TabsItemIcon;
