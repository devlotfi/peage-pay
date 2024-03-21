import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const tabsItemContentVariants = cva('flex items-center whitespace-nowrap');

interface TabsItemContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsItemContentVariants> {}

const TabsItemContent = ({
  className,
  children,
  ...props
}: TabsItemContentProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(tabsItemContentVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default TabsItemContent;
