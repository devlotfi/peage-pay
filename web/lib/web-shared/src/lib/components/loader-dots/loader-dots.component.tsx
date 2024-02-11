import './loader-dots.css';
import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { WebUtils } from '../../web-utils';

const loaderDotsVariants = cva('spinner');

const loaderDotsDotVariants = cva('', {
  variants: {
    variant: {
      primary: 'bg-primary-100',
      success: 'bg-success-100',
      error: 'bg-error-100',
      warning: 'bg-warning-100',
      'base-100': 'bg-base-100',
      'base-200': 'bg-base-200',
      'base-content': 'bg-base-content',
      'color-content': 'bg-color-content',
    },
  },
  defaultVariants: {
    variant: 'base-100',
  },
});

interface LoaderDotsProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderDotsVariants> {
  dotProps?: BaseHTMLAttributes<HTMLDivElement> &
    VariantProps<typeof loaderDotsDotVariants>;
}

const LoaderDots = ({
  className,
  children,
  dotProps,
  ...props
}: LoaderDotsProps): JSX.Element => {
  return (
    <div className={WebUtils.cn(loaderDotsVariants({ className }))} {...props}>
      <div
        className={WebUtils.cn(
          'bounce1',
          loaderDotsDotVariants({
            className: dotProps ? dotProps.className : undefined,
            variant: dotProps ? dotProps.variant : undefined,
          }),
        )}
        {...dotProps}
      ></div>
      <div
        className={WebUtils.cn(
          'bounce2',
          loaderDotsDotVariants({
            className: dotProps ? dotProps.className : undefined,
            variant: dotProps ? dotProps.variant : undefined,
          }),
        )}
        {...dotProps}
      ></div>
      <div
        className={WebUtils.cn(
          'bounce3',
          loaderDotsDotVariants({
            className: dotProps ? dotProps.className : undefined,
            variant: dotProps ? dotProps.variant : undefined,
          }),
        )}
        {...dotProps}
      ></div>
    </div>
  );
};
export default LoaderDots;
