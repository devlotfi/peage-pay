import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, useContext } from "react";
import { Utils } from "@peage-pay-web/utils";
import { CheckboxContext } from "./checkbox.component";

const checkboxFieldVariants = cva("hidden");

interface checkboxFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxFieldVariants> {}

const CheckboxField = ({
  className,
  children,
  onChange,
  checked,
  ...props
}: checkboxFieldProps): JSX.Element => {
  const { setChecked, checked: globalChecked } = useContext(CheckboxContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      type="checkbox"
      checked={globalChecked}
      onChange={handleChange}
      className={Utils.cn(
        checkboxFieldVariants({
          className,
        })
      )}
      {...props}
    >
      {children}
    </input>
  );
};
export default CheckboxField;
