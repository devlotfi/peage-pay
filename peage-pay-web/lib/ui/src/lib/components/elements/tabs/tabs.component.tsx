import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, createContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import TabsItem from './tabs-item.component';

const tabsVariants = cva(
  'flex border-b-[1px] border-edge-100 overflow-x-auto',
  {
    variants: {
      variant: {
        'base-100': '',
        'base-200': '',
      },
    },
    defaultVariants: {
      variant: 'base-100',
    },
  }
);

interface TabsProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVariants> {}

interface TabsContext {
  variant: string;
}

const initialValue: TabsContext = {
  variant: 'base-100',
};

export const TabsContext = createContext(initialValue);

const Tabs = ({
  variant,
  className,
  children,
  ...props
}: TabsProps): JSX.Element => {
  return (
    <TabsContext.Provider
      value={{
        variant: variant || initialValue.variant,
      }}
    >
      <div
        className={Utils.cn(tabsVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};
Tabs.Item = TabsItem;
export default Tabs;
