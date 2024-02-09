import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';

const signInLayoutMainVariants = cva(
  'flex flex-1 bg-base-200 lg:bg-base-100 m-[0.5rem] rounded-xl'
);

interface SignInLayoutMainProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof signInLayoutMainVariants> {}

const SignInLayoutMain = ({
  className,
  children,
  ...props
}: SignInLayoutMainProps): JSX.Element => {
  return (
    <div
      className={WebUtils.cn(signInLayoutMainVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default SignInLayoutMain;
