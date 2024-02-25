import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import Card from '../card/card.component';
import SignInLayoutMain from './sign-in-layout-main.component';

const signInLayoutVariants = cva(
  'flex flex-col bg-base-200 min-h-screen bg-cover text-base-content',
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
    <div className={Utils.cn(signInLayoutVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
SignInLayout.Main = SignInLayoutMain;
SignInLayout.Card = Card;
export default SignInLayout;
