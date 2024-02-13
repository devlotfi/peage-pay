import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { AuthSignInBg, Toll } from '@peage-pay-web/assets';

const signInLayoutDrawingVariants = cva(
  'hidden lg:flex mt-0 flex-1 bg-base-200 rounded-tr-xl rounded-br-xl justify-center items-center bg-[image:var(--image-url)] bg-cover',
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={{ '--image-url': `url(${AuthSignInBg})` }}
      className={Utils.cn(signInLayoutDrawingVariants({ className }))}
      {...props}
    >
      <img className="max-w-[55%] opacity-90" src={Toll} alt="toll" />
    </div>
  );
};
export default SignInLayoutDrawing;
