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
import { ADD_HIGHWAY } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

interface AddHighwayValues {
  name: string;
  code: string;
}

const initialValues: AddHighwayValues = {
  name: '',
  code: '',
};

const addHighwayValidationSchema = yup.object({
  name: yup.string().max(256).required(),
  code: yup.string().max(10).required(),
});

const AddHighwayPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [addHighway, { loading, error, data }] = useMutation(ADD_HIGHWAY);
  const { errors, touched, handleChange, handleBlur, handleSubmit, values } =
    useFormik({
      initialValues,
      validationSchema: addHighwayValidationSchema,
      onSubmit(values) {
        addHighway({
          variables: {
            addHighwayInput: {
              name: values.name,
              code: values.code,
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
            <Heading.Text>{t('ADD_HIGHWAY')}</Heading.Text>
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
        <TextInput
          variant={errors.code && touched.code ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('CODE')}</TextInput.Label>
            <TextInput.Field
              name="code"
              value={values.code}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('ENTER_CODE')}
              type="text"
            ></TextInput.Field>
          </TextInput.Main>
          {errors.code && touched.code ? (
            <TextInput.InfoMessage>{errors.code}</TextInput.InfoMessage>
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
              <Button.Content>{t('ADD_HIGHWAY')}</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddHighwayPage;
