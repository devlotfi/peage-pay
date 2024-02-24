import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, createContext, useState } from 'react';
import { Utils } from '@peage-pay-web/utils';
import DropdownMain from './dropdown-main.component';
import DropdownContent from './dropdown-content.component';

const dropdownVariants = cva('flex flex-col relative', {
  variants: {},
});

interface dropdownProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownVariants> {
  opened?: boolean;
  mainElement: JSX.Element;
}

interface dropdownContext {
  variant: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const initialValue: dropdownContext = {
  variant: 'base-100',
  open: false,
  setOpen: () => {
    return;
  },
};

export const DropdownContext = createContext(initialValue);

const Dropdown = ({
  className,
  children,
  opened,
  mainElement,
  ...props
}: dropdownProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(
    opened !== undefined ? opened : false
  );

  return (
    <DropdownContext.Provider
      value={{
        variant: 'base-100',
        open,
        setOpen,
      }}
    >
      <div className={Utils.cn(dropdownVariants({ className }))} {...props}>
        <div className="">{mainElement}</div>
        <div className="">{open ? children : null}</div>
      </div>
    </DropdownContext.Provider>
  );
};
Dropdown.Main = DropdownMain;
Dropdown.Content = DropdownContent;
export default Dropdown;
