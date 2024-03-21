import { useMutation, useQuery } from '@apollo/client';
import {
  faCheck,
  faExclamationCircle,
  faPen,
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
import { EDIT_HIGHWAY } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { HIGHWAY_BY_ID } from '../../graphql/queries';

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
  const { highwayId } = useParams();
  const {
    loading: highwayLoading,
    error: highwayError,
    data: highwayData,
  } = useQuery(HIGHWAY_BY_ID, {
    variables: {
      highwayByIdInput: {
        highwayId: highwayId as string,
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
  });
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
    onSubmit(values, formikHelpers) {
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
            <div className="flex flex-col md:flex-row md:justify-between items-start">
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>Edit highway</Heading.Text>
              </Heading>
              <Heading className="text-[15pt] mb-[2rem]">
                <Heading.Text className="opacity-70">
                  Highway: {highwayData?.highwayById?.name}
                </Heading.Text>
              </Heading>
            </div>

            <TextInput
              variant={errors.name && touched.name ? 'error' : 'edge-100'}
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Name</TextInput.Label>
                <TextInput.Field
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter highway name"
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
                <TextInput.Label>Code</TextInput.Label>
                <TextInput.Field
                  name="code"
                  value={values.code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter highway code"
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
                <Alert.Content>Highway updated</Alert.Content>
              </Alert>
            ) : null}

            {editError ? (
              <Alert variant={'error'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{`auth:errors.${editError.message}`}</Alert.Content>
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
                  <Button.Content>Edit highway</Button.Content>
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
