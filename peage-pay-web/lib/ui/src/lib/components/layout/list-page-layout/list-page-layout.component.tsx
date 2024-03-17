import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import ListPageLayoutLoading from './list-page-layout-loading.component';
import ListPageLayoutEmpty from './list-page-layout-empty.component';
import ListPageLayoutError from './list-page-layout-error.component';

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
ListPageLayout.Loading = ListPageLayoutLoading;
ListPageLayout.Empty = ListPageLayoutEmpty;
ListPageLayout.Error = ListPageLayoutError;
export default ListPageLayout;
