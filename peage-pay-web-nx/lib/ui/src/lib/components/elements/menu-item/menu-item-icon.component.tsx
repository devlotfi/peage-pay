import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { MenuItemContext } from './menu-item.component';

const menuItemIconVariants = cva(
  'flex justify-center items-center rounded-md min-h-[2rem] min-w-[2rem] text-[15pt] duration-300 ease',
  {
    variants: {
      variant: {
        primary: 'bg-color-content text-primary-100',
        success: 'bg-color-content text-success-100',
        error: 'bg-color-content text-error-100',
        warning: 'bg-color-content text-warning-100',
        'base-100': 'bg-base-200 group-hover:bg-base-100 text-base-content',
        'base-200': 'bg-base-100 group-hover:bg-base-200 text-base-content',
      },
    },
    defaultVariants: {
      variant: 'base-100',
    },
  }
);

interface MenuItemIconProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menuItemIconVariants> {}

const MenuItemIcon = ({
  variant,
  className,
  children,
  ...props
}: MenuItemIconProps): JSX.Element => {
  const { variant: globalVariant } = useContext(MenuItemContext);

  return (
    <div
      className={Utils.cn(
        menuItemIconVariants({
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
export default MenuItemIcon;
