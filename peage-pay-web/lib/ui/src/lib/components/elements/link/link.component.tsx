import { AnchorHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';

const linkVariants = cva(
  'text-primary-100 font-medium underline active:scale-95'
);

interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const Link = ({ className, children, ...props }: LinkProps): JSX.Element => {
  return (
    <a className={Utils.cn(linkVariants({ className }))} {...props}>
      {children}
    </a>
  );
};
export default Link;
