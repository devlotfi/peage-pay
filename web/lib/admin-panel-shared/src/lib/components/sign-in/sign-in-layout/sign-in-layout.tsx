import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';
import Navbar from '../navbar/navbar.component';
import { AuthSignInBg } from '@peage-pay/assets';

const signInLayoutVariants = cva(
  'flex flex-col max-h-screen bg-[image:var(--image-url)] min-h-screen bg-cover'
);

interface SignInLayoutProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof signInLayoutVariants> {}

const SignInLayout = ({
  className,
  children,
  ...props
}: SignInLayoutProps): JSX.Element => {
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={{ '--image-url': `url(${AuthSignInBg})` }}
      className={WebUtils.cn(signInLayoutVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
SignInLayout.Navbar = Navbar;
export default SignInLayout;
