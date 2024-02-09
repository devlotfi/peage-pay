import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '@peage-pay/web-shared';
import CardHeader from './card-header.component';

const cardVariants = cva(
  'flex flex-col w-full lg:w-[45%] lg:max-w-[38rem] items-center bg-base-100 rounded-xl m-[0.5rem] lg:m-0'
);

interface CardProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = ({ className, children, ...props }: CardProps): JSX.Element => {
  return (
    <div className={WebUtils.cn(cardVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
Card.Header = CardHeader;
export default Card;
