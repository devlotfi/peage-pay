import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '../../web-utils';
import BreadcrumbsItem from './breadcrumb-item.component';

const headingVariants = cva('flex-none flex items-center overflow-x-auto');

interface BreadcrumbsProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingVariants> {}

const Breadcrumbs = ({
  className,
  children,
  ...props
}: BreadcrumbsProps): JSX.Element => {
  return (
    <div className={WebUtils.cn(headingVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
Breadcrumbs.Item = BreadcrumbsItem;
export default Breadcrumbs;
