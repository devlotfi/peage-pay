import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const dropdownContentVariants = cva(
  'flex flex-col z-10 bg-base-100 absolute p-[0.3rem] w-[15rem] rounded-xl shadow-xl border-[1px] border-edge-200 overflow-y-auto',
  {
    variants: {
      position: {
        'bottom-left': 'top-[calc(100%+0.5rem)] left-0',
        'bottom-right': 'top-[calc(100%+0.5rem)] right-0',

        'top-left': 'bottom-[calc(100%+0.5rem)] left-0',
        'top-right': 'bottom-[calc(100%+0.5rem)] right-0',

        'left-bottom': 'right-[calc(100%+0.5rem)] bottom-0',
        'left-top': 'right-[calc(100%+0.5rem)] top-0',

        'right-bottom': 'left-[calc(100%+0.5rem)] bottom-0',
        'right-top': 'left-[calc(100%+0.5rem)] top-0',
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
