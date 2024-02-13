import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const cardHeaderVariants = cva(
  'flex flex-col bg-base-100 py-[1rem] rounded-lg items-center w-[90%]',
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
    <div className={Utils.cn(cardHeaderVariants({ className }))} {...props}>
      <div className="flex font-bold text-[15pt]">PeagePay Adminstration</div>
      <div className="flex text-[11pt]">{children}</div>
    </div>
  );
};
export default CardHeader;
