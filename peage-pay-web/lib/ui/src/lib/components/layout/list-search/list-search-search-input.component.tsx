import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { VariantProps, cva } from 'class-variance-authority';
import TextInput from '../../elements/text-input/text-input.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const listSearchSearchInputVariants = cva('mr-[0.5rem] w-full');

interface ListSearchSearchInputProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listSearchSearchInputVariants> {}

const ListSearchSearchInput = ({
  className,
  children,
  ...props
}: ListSearchSearchInputProps): JSX.Element => {
  return (
    <TextInput
      className={Utils.cn(listSearchSearchInputVariants({ className }))}
      {...props}
    >
      <TextInput.Main>
        <TextInput.Label>Search</TextInput.Label>
        <TextInput.Icon position={'left'}>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </TextInput.Icon>
        <TextInput.Field type="text"></TextInput.Field>
      </TextInput.Main>
    </TextInput>
  );
};
export default ListSearchSearchInput;
