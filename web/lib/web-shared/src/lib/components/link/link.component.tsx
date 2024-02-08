import { AnchorHTMLAttributes } from 'react';
import { WebUtils } from '../../web-utils';
import { VariantProps, cva } from 'class-variance-authority';

const linkVariants = cva('text-primary-100 font-medium underline');

interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const Link = ({ className, children, ...props }: LinkProps): JSX.Element => {
  return (
    <a className={WebUtils.cn(linkVariants({ className }))} {...props}>
      {children}
    </a>
  );
};
export default Link;
