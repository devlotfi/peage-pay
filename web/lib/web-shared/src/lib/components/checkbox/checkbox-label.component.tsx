import { LabelHTMLAttributes } from 'react';
import { Utils } from '../../utils';

export default function CheckboxLabel({
  className,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>): JSX.Element {
  return (
    <label className={Utils.cn(className)} {...props}>
      {children}
    </label>
  );
}
