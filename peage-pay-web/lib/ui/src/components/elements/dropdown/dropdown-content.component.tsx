import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import './dropdown-content.css';

const dropdownContentVariants = cva(
  'dropdown-content flex flex-col z-10 bg-base-100 absolute p-[0.3rem] min-w-[15rem] rounded-xl shadow-xl border-[1px] border-edge-200 overflow-y-auto',
  {
    variants: {
      position: {
        'bottom-left':
          'top-[calc(100%+0.5rem)] left-0 animate-[dropdown-content-animation-bottom-left_0.3s_ease] origin-top-left',
        'bottom-right':
          'top-[calc(100%+0.5rem)] right-0 animate-[dropdown-content-animation-bottom-right_0.3s_ease] origin-top-right',

        'top-left':
          'bottom-[calc(100%+0.5rem)] left-0 animate-[dropdown-content-animation-top-left_0.3s_ease] origin-top-right',
        'top-right':
          'bottom-[calc(100%+0.5rem)] right-0 animate-[dropdown-content-animation-top-left_0.3s_ease] origin-top-left',

        'left-bottom':
          'right-[calc(100%+0.5rem)] bottom-0 animate-[dropdown-content-animation-left-bottom_0.3s_ease] origin-bottom-right',
        'left-top':
          'right-[calc(100%+0.5rem)] top-0 animate-[dropdown-content-animation-left-top_0.3s_ease] origin-top-right',

        'right-bottom':
          'left-[calc(100%+0.5rem)] bottom-0 animate-[dropdown-content-animation-right-top_0.3s_ease] origin-top-left',
        'right-top':
          'left-[calc(100%+0.5rem)] top-0 animate-[dropdown-content-animation-right-bottom_0.3s_ease] origin-bottom-left',
      },
    },
  },
);

interface DropdownContentProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownContentVariants> {}

const DropdownContent = ({
  className,
  children,
  position,
  onClick,
  ...props
}: DropdownContentProps): JSX.Element => {
  return (
    <div
      className={Utils.cn(
        dropdownContentVariants({
          className,
          position,
        }),
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default DropdownContent;
