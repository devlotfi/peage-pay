import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';
import Navbar from '../navbar/navbar.component';
import SignInLayoutDrawing from './sign-in-layout-drawing.component';
import Card from '../card/card.component';
import SignInLayoutMain from './sign-in-layout-main.component';

const signInLayoutVariants = cva(
  'flex flex-col max-h-screen bg-base-100 min-h-screen bg-cover text-base-content',
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
      className={WebUtils.cn(signInLayoutVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
};
SignInLayout.Navbar = Navbar;
SignInLayout.Main = SignInLayoutMain;
SignInLayout.Drawing = SignInLayoutDrawing;
SignInLayout.Card = Card;
export default SignInLayout;
