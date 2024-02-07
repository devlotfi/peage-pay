import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '../../utils';
import { MenuDropdownContext } from './menu-dropdown.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../menu-item/menu-item.component';

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
        })
      )}
      {...props}
    >
      {children}
      <MenuItem variant={'base-200'}>
        <MenuItem.MenuItemIcon>
          <FontAwesomeIcon
            icon={faCaretDown}
            className={Utils.cn('duration-300 ease', open && 'rotate-180')}
          ></FontAwesomeIcon>
        </MenuItem.MenuItemIcon>
      </MenuItem>
    </div>
  );
};
export default MenuDropdownMain;
