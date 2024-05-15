import { useMutation } from '@apollo/client';
import {
  faCheck,
  faExclamationCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Alert,
  Button,
  FormPageLayout,
  Heading,
  LoaderDots,
  TextInput,
} from '@peage-pay-web/ui';
import { ADD_TOLL_NETWORK } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

interface AddTollNetworkValues {
  name: string;
}

const initialValues: AddTollNetworkValues = {
  name: '',
};

const addTollNetworkValidationSchema = yup.object({
  name: yup.string().max(256).required(),
});

const AddTollNetworkPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [addTollNetwork, { loading, error, data }] =
    useMutation(ADD_TOLL_NETWORK);
  const { errors, touched, handleChange, handleBlur, handleSubmit, values } =
    useFormik({
      initialValues,
      validationSchema: addTollNetworkValidationSchema,
      onSubmit(values) {
        addTollNetwork({
          variables: {
            addTollNetworkInput: {
              name: values.name,
            },
          },
        });
      },
    });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <FormPageLayout.Title>
          <Heading className="text-[20pt]">
            <Heading.Icon position={'left'}>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </Heading.Icon>
            <Heading.Text>{t('ADD_TOLL_NETWORK')}</Heading.Text>
          </Heading>
        </FormPageLayout.Title>

        <TextInput
          variant={errors.name && touched.name ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('NAME')}</TextInput.Label>
            <TextInput.Field
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('ENTER_NAME')}
              type="text"
            ></TextInput.Field>
          </TextInput.Main>
          {errors.name && touched.name ? (
            <TextInput.InfoMessage>{errors.name}</TextInput.InfoMessage>
          ) : null}
        </TextInput>

        {data ? (
          <Alert variant={'success'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>{t('OPERATION_SUCCESSFUL')}</Alert.Content>
          </Alert>
        ) : null}

        {error ? (
          <Alert variant={'error'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>{`${t(error.message)}`}</Alert.Content>
          </Alert>
        ) : null}

        <Button type="submit" variant={'primary'} className="mt-[0.5rem]">
          {loading ? (
            <LoaderDots dotProps={{ variant: 'color-content' }}></LoaderDots>
          ) : (
            <>
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>{t('ADD_TOLL_NETWORK')}</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddTollNetworkPage;
