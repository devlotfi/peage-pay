import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes, createContext } from 'react';
import { Utils } from '../../utils';
import TextInputMain from './text-input-main.component';
import TextInputField from './text-input-field.component';
import TextInputIcon from './text-input-icon.component';
import TextInputLabel from './text-input-label.component';
import TextInputInfoMessage from './text-input-info-message.component';

const textInputVariants = cva('flex flex-col', {
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

interface TextInputProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textInputVariants> {}

interface TextInputContext {
  variant: string;
}

const initialValue: TextInputContext = {
  variant: 'edge-100',
};

export const TextInputContext = createContext(initialValue);

const TextInput = ({
  variant,
  className,
  children,
  ...props
}: TextInputProps): JSX.Element => {
  return (
    <TextInputContext.Provider
      value={{
        variant: variant || 'edge-100',
      }}
    >
      <div
        className={Utils.cn(textInputVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    </TextInputContext.Provider>
  );
};
TextInput.TextInputMain = TextInputMain;
TextInput.TextInputField = TextInputField;
TextInput.TextInputIcon = TextInputIcon;
TextInput.TextInputLabel = TextInputLabel;
TextInput.TextInputInfoMessage = TextInputInfoMessage;
export default TextInput;
