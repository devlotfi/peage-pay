import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';
import { AuthSignInBg, Toll } from '@peage-pay/assets';

const signInLayoutDrawingVariants = cva(
  'hidden lg:flex m-[1rem] flex-1 bg-base-200 rounded-xl justify-center items-center bg-[image:var(--image-url)] bg-cover border-[1px] border-edge-100'
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
      className={WebUtils.cn(signInLayoutDrawingVariants({ className }))}
      {...props}
    >
      <img className="max-w-[55%] opacity-90" src={Toll} alt="toll" />
    </div>
  );
};
export default SignInLayoutDrawing;
