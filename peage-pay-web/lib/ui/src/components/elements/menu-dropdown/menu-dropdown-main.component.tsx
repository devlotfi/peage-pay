import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../menu-item/menu-item.component';
import { MenuDropdownContext } from './menu-dropdown.context';

const menuDropdownMainVariants = cva('flex items-center');

interface MenuDropdownMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menuDropdownMainVariants> {}

const MenuDropdownMain = ({
  className,
  children,
  onClick,
  ...props
}: MenuDropdownMainProps): JSX.Element => {
  const { open, setOpen } = useContext(MenuDropdownContext);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(!open);
    console.log('lol');

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={Utils.cn(
        menuDropdownMainVariants({
          className,
        }),
      )}
      {...props}
    >
      {children}
      <MenuItem
        variant={'base-200'}
        className="bg-transparent hover:bg-transparent"
      >
        <MenuItem.Icon className="bg-transparent group-hover:bg-transparent">
          <FontAwesomeIcon
            icon={faCaretDown}
            className={Utils.cn('duration-300 ease', open && 'rotate-180')}
          ></FontAwesomeIcon>
        </MenuItem.Icon>
      </MenuItem>
    </div>
  );
};
export default MenuDropdownMain;
