import { BaseHTMLAttributes } from 'react';
import { Utils } from '../../utils';
import CheckboxLabel from './checkbox-label.component';
import CheckboxInput from './checkbox-input.component';

export default function Checkbox({
  className,
  children,
  ...props
}: BaseHTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={Utils.cn(className)} {...props}>
      {children}
    </div>
  );
}

Checkbox.Label = CheckboxLabel;
Checkbox.CheckboxInput = CheckboxInput;
