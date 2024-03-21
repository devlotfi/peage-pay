import { AnchorHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';

const customLinkVariants = cva(
  'flex cursor-pointer text-primary-100 font-medium underline',
);

interface CustomLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof customLinkVariants> {}

const CustomLink = ({
  className,
  children,
  ...props
}: CustomLinkProps): JSX.Element => {
  return (
    <a className={Utils.cn(customLinkVariants({ className }))} {...props}>
      {children}
    </a>
  );
};
export default CustomLink;
