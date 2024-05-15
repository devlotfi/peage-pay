import { useMutation, useQuery } from '@apollo/client';
import {
  faCheck,
  faExclamationCircle,
  faPen,
  faPlus,
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
import { EDIT_HIGHWAY } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { HIGHWAY_BY_ID } from '../../graphql/queries';
import { useTranslation } from 'react-i18next';

interface EditHighwayValues {
  name: string;
  code: string;
}

const initialValues: EditHighwayValues = {
  name: '',
  code: '',
};

const editHighwayValidationSchema = yup.object({
  name: yup.string().max(256).required(),
  code: yup.string().max(10).required(),
});

const EditHighwayPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { highwayId } = useParams();
  const { loading: highwayLoading, error: highwayError } = useQuery(
    HIGHWAY_BY_ID,
    {
      variables: {
        highwayByIdInput: {
          id: highwayId as string,
        },
      },
      fetchPolicy: 'network-only',
      onCompleted(data) {
        if (data.highwayById) {
          setValues({
            name: data.highwayById.name,
            code: data.highwayById.code,
          });
        }
      },
    },
  );
  const [
    editHighway,
    { loading: editLoading, error: editError, data: editData },
  ] = useMutation(EDIT_HIGHWAY);
  const {
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema: editHighwayValidationSchema,
    onSubmit(values) {
      if (highwayId) {
        editHighway({
          variables: {
            editHighwayInput: {
              highwayId,
              name: values.name,
              code: values.code,
            },
          },
        });
      }
    },
  });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <AdminDashboardLayout.Loading loading={highwayLoading}>
          <AdminDashboardLayout.Error error={highwayError}>
            <FormPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>{t('EDIT_HIGHWAY')}</Heading.Text>
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

            {editData ? (
              <Alert variant={'success'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{t('OPERATION_SUCCESSFUL')}</Alert.Content>
              </Alert>
            ) : null}

            {editError ? (
              <Alert variant={'error'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{`${t(editError.message)}`}</Alert.Content>
              </Alert>
            ) : null}

            <Button type="submit" variant={'primary'} className="mt-[0.5rem]">
              {editLoading ? (
                <LoaderDots
                  dotProps={{ variant: 'color-content' }}
                ></LoaderDots>
              ) : (
                <>
                  <Button.Icon position={'left'}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>{t('EDIT_HIGHWAY')}</Button.Content>
                </>
              )}
            </Button>
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default EditHighwayPage;
