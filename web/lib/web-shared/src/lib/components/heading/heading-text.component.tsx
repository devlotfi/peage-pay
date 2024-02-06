import { BaseHTMLAttributes } from 'react';
import { Utils } from '../../utils';
import { VariantProps, cva } from 'class-variance-authority';

const headingTextVariants = cva('text-base-content font-bold');

interface HeadingTextProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingTextVariants> {}

const HeadingText = ({
  className,
  children,
  ...props
}: HeadingTextProps): JSX.Element => {
  return (
    <div className={Utils.cn(headingTextVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
export default HeadingText;
