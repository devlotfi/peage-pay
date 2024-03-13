import { VariantProps, cva } from 'class-variance-authority';
import { FormHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { useFormik } from 'formik';
import TextInput from '../../elements/text-input/text-input.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesLeft,
  faAnglesRight,
  faListOl,
  faSearch,
  faTableList,
} from '@fortawesome/free-solid-svg-icons';
import Select from '../../elements/select/select.component';
import IconButton from '../../elements/icon-button/icon-button.component';
import Button from '../../elements/button/button.component';

const searchFormVariants = cva('flex flex-col xl:flex-row w-full mt-[0.5rem]');

interface SearchValues<T> {
  search: string;
  field: T;
  page: number;
}

interface SearchFormProps<T>
  extends FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof searchFormVariants> {
  initialFieldSearch: T;
  handleSearch?: (searchData: SearchValues<T>) => void;
  fieldSelectOptions?: JSX.Element;
}

const SearchForm = <T,>({
  className,
  children,
  initialFieldSearch,
  handleSearch,
  fieldSelectOptions,
  ...props
}: SearchFormProps<T>): JSX.Element => {
  const initialValues: SearchValues<T> = {
    search: '',
    field: initialFieldSearch,
    page: 1,
  };

  const { values, handleChange, handleBlur, handleSubmit, setFieldValue } =
    useFormik({
      initialValues,
      onSubmit(values, formikHelpers) {
        if (handleSearch) {
          handleSearch(values);
        }
      },
    });

  const incrementPages = () => {
    setFieldValue('page', values.page + 1);
  };

  const decrementPages = () => {
    if (values.page > 1) {
      setFieldValue('page', values.page - 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={Utils.cn(searchFormVariants({ className }))}
      {...props}
    >
      <div className="flex mb-[1rem] xl:mb-0 w-full">
        <TextInput className="mr-[0.5rem] w-full">
          <TextInput.Main>
            <TextInput.Label>Search</TextInput.Label>
            <TextInput.Icon position={'left'}>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="search"
              value={values.search}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
            ></TextInput.Field>
          </TextInput.Main>
        </TextInput>
        <Select className="mr-[0.5rem] w-[50%]">
          <Select.Main>
            <Select.Label>Field</Select.Label>
            <Select.Icon position={'left'}>
              <FontAwesomeIcon icon={faTableList}></FontAwesomeIcon>
            </Select.Icon>
            <Select.Field
              name="field"
              value={values.field as string}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {fieldSelectOptions}
            </Select.Field>
          </Select.Main>
        </Select>
      </div>

      <div className="flex mb-[1rem] xl:mb-0 w-full xl:w-auto">
        <div className="flex mr-[0.5rem]">
          <IconButton onClick={decrementPages} variant={'base-200'}>
            <FontAwesomeIcon icon={faAnglesLeft}></FontAwesomeIcon>
          </IconButton>
          <TextInput className="mx-[0.2rem] min-w-[5rem] w-full xl:w-auto">
            <TextInput.Main>
              <TextInput.Label>Items</TextInput.Label>
              <TextInput.Icon position={'left'}>
                <FontAwesomeIcon icon={faListOl}></FontAwesomeIcon>
              </TextInput.Icon>
              <TextInput.Field
                readOnly
                value={values.page}
                type="number"
                min={1}
              ></TextInput.Field>
            </TextInput.Main>
          </TextInput>
          <IconButton onClick={incrementPages} variant={'base-200'}>
            <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>
          </IconButton>
        </div>
      </div>
      <Button type="submit" className="xl:ml-[0.5rem]" variant={'primary'}>
        <Button.Icon position={'left'}>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Button.Icon>
        <Button.Content>Search</Button.Content>
      </Button>
    </form>
  );
};

export default SearchForm;
