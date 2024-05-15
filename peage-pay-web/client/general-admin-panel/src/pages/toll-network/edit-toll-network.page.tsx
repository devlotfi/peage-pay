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
import { EDIT_TOLL_NETWORK } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { TOLL_NETWORK_BY_ID } from '../../graphql/queries';
import { useTranslation } from 'react-i18next';

interface EditTollNetworkValues {
  name: string;
}

const initialValues: EditTollNetworkValues = {
  name: '',
};

const editTollNetworkValidationSchema = yup.object({
  name: yup.string().max(256).required(),
});

const EditTollNetworkPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { tollNetworkId } = useParams();
  const { loading: tollNetworkLoading, error: tollNetworkError } = useQuery(
    TOLL_NETWORK_BY_ID,
    {
      variables: {
        tollNetworkByIdInput: {
          id: tollNetworkId as string,
        },
      },
      fetchPolicy: 'network-only',
      onCompleted(data) {
        if (data.tollNetworkById) {
          setValues({
            name: data.tollNetworkById.name,
          });
        }
      },
    },
  );
  const [
    editTollNetwork,
    { loading: editLoading, error: editError, data: editData },
  ] = useMutation(EDIT_TOLL_NETWORK);
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
    validationSchema: editTollNetworkValidationSchema,
    onSubmit(values) {
      if (tollNetworkId) {
        editTollNetwork({
          variables: {
            editTollNetworkInput: {
              tollNetworkId,
              name: values.name,
            },
          },
        });
      }
    },
  });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <AdminDashboardLayout.Loading loading={tollNetworkLoading}>
          <AdminDashboardLayout.Error error={tollNetworkError}>
            <FormPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>{t('EDIT_TOLL_NETWORK')}</Heading.Text>
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
                  placeholder="Enter toll network name"
                  type="text"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.name && touched.name ? (
                <TextInput.InfoMessage>{errors.name}</TextInput.InfoMessage>
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
                  <Button.Content>{t('EDIT_TOLL_NETWORK')}</Button.Content>
                </>
              )}
            </Button>
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default EditTollNetworkPage;
