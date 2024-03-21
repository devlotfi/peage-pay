import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { MenuItemContext } from './menu-item.component';

const menuItemTextVariants = cva(
  'flex w-full items-center px-[1rem] text-[11pt] font-semibold',
  {
    variants: {
      variant: {
        primary: 'text-color-content',
        success: 'text-color-content',
        error: 'text-color-content',
        warning: 'text-color-content',
        'base-100': 'text-base-content',
        'base-200': 'text-base-content',
      },
    },
    defaultVariants: {
      variant: 'base-100',
    },
  }
);

interface menuItemTextProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menuItemTextVariants> {}

const MenuItemText = ({
  variant,
  className,
  children,
  ...props
}: menuItemTextProps): JSX.Element => {
  const { variant: globalVariant } = useContext(MenuItemContext);

  return (
    <div
      className={Utils.cn(
        menuItemTextVariants({
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
export default MenuItemText;
