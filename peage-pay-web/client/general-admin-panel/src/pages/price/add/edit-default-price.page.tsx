import { useMutation, useQuery } from '@apollo/client';
import {
  faCheck,
  faExclamationCircle,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AdminDashboardLayout,
  Alert,
  Button,
  FormPageLayout,
  Heading,
  LoaderDots,
  TextInput,
} from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { EDIT_DEFAULT_PRICE } from '../../../graphql/mutations';
import { DEFAULT_PRICE } from '../../../graphql/queries';
import { useTranslation } from 'react-i18next';

interface EditDefaultPriceValues {
  value: number;
}

const initialValues: EditDefaultPriceValues = {
  value: 1,
};

const editDefaultPriceValidationSchema = yup.object({
  value: yup.string().max(256).required(),
});

const EditDefaultPricePage = (): JSX.Element => {
  const { t } = useTranslation();
  const { loading: defaultPriceLoading, error: defaultPriceError } = useQuery(
    DEFAULT_PRICE,
    {
      onCompleted(data) {
        setFieldValue('value', data.defaultPrice ? data.defaultPrice : '');
      },
    },
  );
  const [
    addGlobalPrice,
    { loading: addLoading, error: addError, data: addData },
  ] = useMutation(EDIT_DEFAULT_PRICE);
  const {
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: editDefaultPriceValidationSchema,
    onSubmit(values) {
      addGlobalPrice({
        variables: {
          editDefaultPriceInput: {
            value: values.value,
          },
        },
      });
    },
  });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <AdminDashboardLayout.Loading loading={defaultPriceLoading}>
          <AdminDashboardLayout.Error error={defaultPriceError}>
            <FormPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>{t('EDIT_DEFAULT_PRICE')}</Heading.Text>
              </Heading>
            </FormPageLayout.Title>

            <TextInput
              variant={errors.value && touched.value ? 'error' : 'edge-100'}
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>{t('VALUE')}</TextInput.Label>
                <TextInput.Field
                  name="value"
                  value={values.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter value"
                  type="number"
                  step={0.01}
                  min={0}
                ></TextInput.Field>
                <TextInput.Icon position={'right'}>dzd/km</TextInput.Icon>
              </TextInput.Main>
              {errors.value && touched.value ? (
                <TextInput.InfoMessage>{errors.value}</TextInput.InfoMessage>
              ) : null}
            </TextInput>

            {addData ? (
              <Alert variant={'success'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{t('OPERATION_SUCCESSFUL')}</Alert.Content>
              </Alert>
            ) : null}

            {addError ? (
              <Alert variant={'error'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{`auth:errors.${addError.message}`}</Alert.Content>
              </Alert>
            ) : null}

            <Button type="submit" variant={'primary'} className="mt-[0.5rem]">
              {addLoading ? (
                <LoaderDots
                  dotProps={{ variant: 'color-content' }}
                ></LoaderDots>
              ) : (
                <>
                  <Button.Icon position={'left'}>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>{t('EDIT_DEFAULT_PRICE')}</Button.Content>
                </>
              )}
            </Button>
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default EditDefaultPricePage;
