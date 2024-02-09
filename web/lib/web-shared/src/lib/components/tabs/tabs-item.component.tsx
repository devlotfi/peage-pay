import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, useContext } from 'react';
import { WebUtils } from '../../web-utils';
import { TabsContext } from './tabs.component';
import TabsItemContent from './tabs-item-content.component';
import TabsItemIcon from './tabs-item-icon.component';

const tabsItemVariants = cva(
  'flex items-start relative justify-center items-center px-[1rem] min-h-[3rem] duration-300 ease rounded-lg mx-[0.3rem] active:scale-95',
  {
    variants: {
      variant: {
        'base-100': 'hover:bg-base-200',
        'base-200': 'hover:bg-base-100',
      },
      isActive: {
        active: 'rounded-b-none text-primary-100 bg-base-200 pb-[0.2rem]',
        notActive: 'mb-[0.2rem]',
      },
    },
    defaultVariants: {
      variant: 'base-100',
      isActive: 'notActive',
    },
  },
);

interface TabsItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabsItemVariants> {}

const TabsItem = ({
  variant,
  className,
  children,
  isActive,
  ...props
}: TabsItemProps): JSX.Element => {
  const { variant: globalVariant } = useContext(TabsContext);

  return (
    <button
      className={WebUtils.cn(
        tabsItemVariants({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: variant || (globalVariant as any),
          className,
          isActive,
        }),
      )}
      {...props}
    >
      <div className="flex flex-1 whitespace-nowrap²">{children}</div>
      <div
        className={WebUtils.cn(
          'flex absolute w-[70%] h-[0.3rem] rounded-t-lg bg-primary-100 bottom-0',
          isActive !== 'active' && 'hidden',
        )}
      ></div>
    </button>
  );
};
TabsItem.Content = TabsItemContent;
TabsItem.Icon = TabsItemIcon;
export default TabsItem;
