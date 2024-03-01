import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import CardHeader from './card-header.component';

const cardVariants = cva(
  'flex w-full p-[1rem] lg:p-[2rem] lg:max-w-[55rem] bg-base-100 rounded-xl flex-col-reverse justify-end lg:flex-row border-[1px] border-edge-200',
);

interface CardProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  header: JSX.Element;
}

const Card = ({
  className,
  children,
  header,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div className={Utils.cn(cardVariants({ className }))} {...props}>
      <div className="flex w-full justify-center">{children}</div>
      <div className="bg-edge-100 w-[1px] my-[1rem] mx-[2rem] hidden lg:flex"></div>
      {header}
    </div>
  );
};
Card.Header = CardHeader;
export default Card;
