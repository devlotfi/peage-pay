import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { Toll } from '@peage-pay-web/assets';

const signInLayoutDrawingVariants = cva(
  'hidden lg:flex mt-0 flex-1 bg-base-200 rounded-tr-xl rounded-br-xl justify-center items-center bg-cover',
);

interface SignInLayoutDrawingProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof signInLayoutDrawingVariants> {}

const SignInLayoutDrawing = ({
  className,
  children,
  ...props
}: SignInLayoutDrawingProps): JSX.Element => {
  return (
    <div
      style={{
        backgroundImage: `url('/auth-sign-in-bg.svg')`,
      }}
      className={Utils.cn(signInLayoutDrawingVariants({ className }))}
      {...props}
    >
      <img className="max-w-[55%] opacity-90" src={Toll} alt="toll" />
    </div>
  );
};
export default SignInLayoutDrawing;
