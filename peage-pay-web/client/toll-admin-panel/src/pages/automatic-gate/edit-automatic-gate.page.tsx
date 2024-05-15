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
  Select,
  TextInput,
} from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { AUTOMATIC_GATE_BY_ID } from '../../graphql/queries';
import { EDIT_AUTOMATIC_GATE } from '../../graphql/mutations';
import { Utils } from '@peage-pay-web/utils';
import {
  AutomaticGateVariantType,
  TollDirectionType,
} from '../../__generated__/graphql';

interface EditAutomaticGateValues {
  name: string;
  direction: TollDirectionType;
  variant: AutomaticGateVariantType;
  password: string;
  confirmPassword: string;
}

const initialValues: EditAutomaticGateValues = {
  name: '',
  direction: TollDirectionType.Inbound,
  variant: AutomaticGateVariantType.QrCodeReader,
  password: '',
  confirmPassword: '',
};

const editAutomaticGateValidationSchema = yup.object({
  name: yup.string().max(256).required(),
  password: yup.string().min(7).max(512),
  confirmPassword: yup.string().when('password', (fieldArray) => {
    const password = fieldArray[0];
    if (password && password.length > 0) {
      return yup
        .string()
        .oneOf([yup.ref('password')])
        .required();
    } else {
      return yup.string();
    }
  }),
});

const EditAutomaticGatePage = (): JSX.Element => {
  const { automaticGateId } = useParams();
  const { loading: automaticGateLoading, error: automaticGateError } = useQuery(
    AUTOMATIC_GATE_BY_ID,
    {
      variables: {
        automaticGateByIdInput: {
          id: automaticGateId as string,
        },
      },
      fetchPolicy: 'network-only',
      onCompleted(data) {
        if (data.automaticGateById) {
          setFieldValue('name', data.automaticGateById.name);
          setFieldValue('variant', data.automaticGateById.variant);
          setFieldValue('direction', data.automaticGateById.direction);
        }
      },
    },
  );
  const [
    editHighway,
    { loading: editLoading, error: editError, data: editData },
  ] = useMutation(EDIT_AUTOMATIC_GATE);
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
    validationSchema: editAutomaticGateValidationSchema,
    onSubmit(values) {
      if (automaticGateId) {
        editHighway({
          variables: {
            editAutomaticGateInput: {
              automaticGateId: automaticGateId,
              name: values.name,
              variant: values.variant,
              direction: values.direction,
              password: values.password !== '' ? values.password : undefined,
            },
          },
        });
      }
    },
  });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <AdminDashboardLayout.Loading loading={automaticGateLoading}>
          <AdminDashboardLayout.Error error={automaticGateError}>
            <FormPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>Edit automatic gate</Heading.Text>
              </Heading>
            </FormPageLayout.Title>

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
                  placeholder="Enter automatic gate name"
                  type="text"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.name && touched.name ? (
                <TextInput.InfoMessage>{errors.name}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <Select
              variant={errors.variant && touched.variant ? 'error' : 'edge-100'}
              className="w-full mb-[1.3rem]"
            >
              <Select.Main>
                <Select.Label>Direction</Select.Label>
                <Select.Field
                  name="variant"
                  value={values.variant}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {Utils.renderFieldOptions(AutomaticGateVariantType)}
                </Select.Field>
              </Select.Main>
              {errors.variant && touched.variant ? (
                <Select.InfoMessage>{errors.variant}</Select.InfoMessage>
              ) : null}
            </Select>
            <Select
              variant={
                errors.direction && touched.direction ? 'error' : 'edge-100'
              }
              className="w-full mb-[1.3rem]"
            >
              <Select.Main>
                <Select.Label>Direction</Select.Label>
                <Select.Field
                  name="direction"
                  value={values.direction}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {Utils.renderFieldOptions(TollDirectionType)}
                </Select.Field>
              </Select.Main>
              {errors.direction && touched.direction ? (
                <Select.InfoMessage>{errors.direction}</Select.InfoMessage>
              ) : null}
            </Select>
            <TextInput
              variant={
                errors.password && touched.password ? 'error' : 'edge-100'
              }
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Password</TextInput.Label>
                <TextInput.Field
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter automatic gate password"
                  type="password"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.password && touched.password ? (
                <TextInput.InfoMessage>{errors.password}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <TextInput
              variant={
                errors.confirmPassword && touched.confirmPassword
                  ? 'error'
                  : 'edge-100'
              }
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Confirm password</TextInput.Label>
                <TextInput.Field
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm password"
                  type="password"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.confirmPassword && touched.confirmPassword ? (
                <TextInput.InfoMessage>
                  {errors.confirmPassword}
                </TextInput.InfoMessage>
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
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
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

export default EditAutomaticGatePage;
