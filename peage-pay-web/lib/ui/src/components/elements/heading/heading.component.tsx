import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import HeadingText from './heading-text.component';
import HeadingIcon from './heading-icon.component';
import { HeadingContext } from './heading.context';

const headingVariants = cva('flex', {
  variants: {
    variant: {
      primary: '',
      success: '',
      error: '',
      warning: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface HeadingProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingVariants> {}

const Heading = ({
  variant,
  className,
  children,
  ...props
}: HeadingProps): JSX.Element => {
  return (
    <HeadingContext.Provider
      value={{
        variant: variant || 'primary',
      }}
    >
      <div
        className={Utils.cn(headingVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    </HeadingContext.Provider>
  );
};
Heading.Text = HeadingText;
Heading.Icon = HeadingIcon;
export default Heading;
