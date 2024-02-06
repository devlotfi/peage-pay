import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const headingVariants = cva('flex items-center');

interface BreadcrumbsItemProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingVariants> {}

const BreadcrumbsItem = ({
  className,
  children,
  ...props
}: BreadcrumbsItemProps): JSX.Element => {
  return (
    <div className={Utils.cn(headingVariants({ className }))} {...props}>
      <FontAwesomeIcon
        className="mx-[0.5rem] text-[15pt] text-base-content"
        icon={faAngleRight}
      ></FontAwesomeIcon>
      {children}
    </div>
  );
};
export default BreadcrumbsItem;
