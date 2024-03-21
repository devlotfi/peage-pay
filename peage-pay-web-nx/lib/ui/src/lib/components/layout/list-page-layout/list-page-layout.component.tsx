import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import ListPageLayoutEmpty from './list-page-layout-empty.component';

const listPageLayoutVariants = cva('flex flex-col h-full');

interface ListPageLayoutProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listPageLayoutVariants> {}

const ListPageLayout = ({
  className,
  children,
  ...props
}: ListPageLayoutProps): JSX.Element => {
  return (
    <div className={Utils.cn(listPageLayoutVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
ListPageLayout.Empty = ListPageLayoutEmpty;
export default ListPageLayout;
