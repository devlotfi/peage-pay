import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';

const cardHeaderVariants = cva(
  'flex flex-col items-center w-[90%] mt-[0.5rem] border-edge-100 border-b-[1px] pb-[0.5rem] mb-[1rem]'
);

interface CardHeaderProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

const CardHeader = ({
  className,
  children,
  ...props
}: CardHeaderProps): JSX.Element => {
  return (
    <div className={WebUtils.cn(cardHeaderVariants({ className }))} {...props}>
      <div className="flex font-bold text-[15pt]">PeagePay Adminstration</div>
      <div className="flex text-[11pt]">{children}</div>
    </div>
  );
};
export default CardHeader;
