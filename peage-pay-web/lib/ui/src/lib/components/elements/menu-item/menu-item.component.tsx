import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, createContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import MenuItemIcon from './menu-item-icon.component';
import MenuItemText from './menu-item-text.component';

const menuItemVariants = cva(
  'group flex items-center rounded-lg p-[0.3rem] duration-300 ease',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100 hover:bg-primary-200',
        success: 'bg-success-100 hover:bg-success-200',
        error: 'bg-error-100 hover:bg-error-200',
        warning: 'bg-warning-100 hover:bg-warning-200',
        'base-100': 'bg-base-100 hover:bg-base-200',
        'base-200': 'bg-base-200 hover:bg-base-100',
      },
    },
    defaultVariants: {
      variant: 'base-100',
    },
  },
);

interface MenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof menuItemVariants> {}

interface MenuItemContext {
  variant: string;
}

const initialValue: MenuItemContext = {
  variant: 'base-100',
};

export const MenuItemContext = createContext(initialValue);

const MenuItem = ({
  variant,
  className,
  children,
  ...props
}: MenuItemProps): JSX.Element => {
  return (
    <MenuItemContext.Provider
      value={{
        variant: variant || 'base-100',
      }}
    >
      <button
        className={Utils.cn(menuItemVariants({ variant, className }))}
        {...props}
      >
        {children}
      </button>
    </MenuItemContext.Provider>
  );
};
MenuItem.Icon = MenuItemIcon;
MenuItem.Text = MenuItemText;
export default MenuItem;
