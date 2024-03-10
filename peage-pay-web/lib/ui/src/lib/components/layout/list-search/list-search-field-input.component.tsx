import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import Select from '../../elements/select/select.component';
import { useFormikContext } from 'formik';

const listSearchFieldInputVariants = cva('mr-[0.5rem] w-full');

interface ListSearchFieldInputProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listSearchFieldInputVariants> {}

const ListSearchFieldInput = ({
  className,
  children,
  ...props
}: ListSearchFieldInputProps): JSX.Element => {
  const { values } = useFormikContext<{ lol: string }>();

  return (
    <Select
      className={Utils.cn(listSearchFieldInputVariants({ className }))}
      {...props}
    >
      <Select.Main>
        <Select.Label>Field</Select.Label>
        <Select.Icon position={'left'}>
          <FontAwesomeIcon icon={faTableList}></FontAwesomeIcon>
        </Select.Icon>
        <Select.Field>{children}</Select.Field>
      </Select.Main>
    </Select>
  );
};
export default ListSearchFieldInput;
