import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, createContext } from 'react';
import { Utils } from '@peage-pay-web/utils';
import TextAreaMain from './text-area-main.component';
import TextAreaField from './text-area-field.component';
import TextAreaIcon from './text-area-icon.component';
import TextAreaLabel from './text-area-label.component';
import TextAreaInfoMessage from './text-area-info-message.component';

const textAreaVariants = cva('flex flex-col', {
  variants: {
    variant: {
      primary: '',
      success: '',
      error: '',
      warning: '',
      'edge-100': '',
      'edge-200': '',
    },
  },
  defaultVariants: {
    variant: 'edge-100',
  },
});

interface TextAreaProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textAreaVariants> {}

interface TextAreaContext {
  variant: string;
}

const initialValue: TextAreaContext = {
  variant: 'edge-100',
};

export const TextAreaContext = createContext(initialValue);

const TextArea = ({
  variant,
  className,
  children,
  ...props
}: TextAreaProps): JSX.Element => {
  return (
    <TextAreaContext.Provider
      value={{
        variant: variant || 'edge-100',
      }}
    >
      <div
        className={Utils.cn(textAreaVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    </TextAreaContext.Provider>
  );
};
TextArea.Main = TextAreaMain;
TextArea.Field = TextAreaField;
TextArea.Icon = TextAreaIcon;
TextArea.Label = TextAreaLabel;
TextArea.InfoMessage = TextAreaInfoMessage;
export default TextArea;
