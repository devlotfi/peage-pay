import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';

const cardHeaderVariants = cva('flex flex-col');

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
      <div className="flex text-[17pt] items-center">
        <div className="flex mr-[1.5rem]">PeagePay Adminstration</div>
        <FontAwesomeIcon
          className="text-[25pt] text-primary-100"
          icon={faUserGear}
        ></FontAwesomeIcon>
      </div>
      <div className="flex text-[13pt] opacity-70 mt-[0.7rem]">{children}</div>
    </div>
  );
};
export default CardHeader;
