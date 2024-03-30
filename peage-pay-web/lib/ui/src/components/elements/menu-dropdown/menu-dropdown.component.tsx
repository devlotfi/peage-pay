import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useState } from 'react';
import { Utils } from '@peage-pay-web/utils';
import MenuDropdownMain from './menu-dropdown-main.component';
import './menu-dropdown.css';
import { MenuDropdownContext } from './menu-dropdown.context';

const menuDropdownVariants = cva('flex flex-col');

interface MenuDropdownProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menuDropdownVariants> {
  opened?: boolean;
  mainElement: JSX.Element;
}

const MenuDropdown = ({
  className,
  children,
  opened,
  mainElement,
  ...props
}: MenuDropdownProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(
    opened !== undefined ? opened : false,
  );

  return (
    <MenuDropdownContext.Provider
      value={{
        variant: 'base-100',
        open,
        setOpen,
      }}
    >
      <div className={Utils.cn(menuDropdownVariants({ className }))} {...props}>
        {mainElement}
        {open ? (
          <div className="menu-dropdown flex w-full">
            <div className="flex min-w-[1px] my-[0.5rem] mx-[0.5rem] bg-edge-100"></div>
            <div className="flex flex-col w-full">{children}</div>
          </div>
        ) : null}
      </div>
    </MenuDropdownContext.Provider>
  );
};
MenuDropdown.Main = MenuDropdownMain;
export default MenuDropdown;
