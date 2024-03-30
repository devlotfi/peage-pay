import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, useContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { DropdownContext } from './dropdown.context';

const dropdownMainVariants = cva('flex items-center');

interface DropdownMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownMainVariants> {}

const DropdownMain = ({
  className,
  children,
  onClick,
  ...props
}: DropdownMainProps): JSX.Element => {
  const { open, setOpen } = useContext(DropdownContext);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(!open);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={Utils.cn(
        dropdownMainVariants({
          className,
        }),
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default DropdownMain;
