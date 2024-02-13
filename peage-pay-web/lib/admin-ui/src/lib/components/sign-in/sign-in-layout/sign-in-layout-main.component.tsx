import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const signInLayoutMainVariants = cva(
  'flex flex-1 m-[0.5rem] lg:m-[1.5rem] mt-0 lg:mt-0 rounded-xl bg-base-100',
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
      className={Utils.cn(signInLayoutMainVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
export default SignInLayoutMain;
