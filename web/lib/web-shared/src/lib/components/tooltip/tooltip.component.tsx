import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '../../utils';
import TooltipMessage from './tooltip-message.component';

const tooltipVariants = cva('flex group relative');

interface TooltipProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  tooltipElement: JSX.Element;
}

const Tooltip = ({
  className,
  children,
  tooltipElement,
  ...props
}: TooltipProps): JSX.Element => {
  return (
    <div className={Utils.cn(tooltipVariants({ className }))} {...props}>
      {tooltipElement}
      {children}
    </div>
  );
};
Tooltip.TooltipMessage = TooltipMessage;
export default Tooltip;
