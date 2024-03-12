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
  const [addTollNetwork, { loading, error, data }] =
    useMutation(ADD_TOLL_NETWORK);
  const { errors, touched, handleChange, handleBlur, handleSubmit, values } =
    useFormik({
      initialValues,
      validationSchema: addTollNetworkValidationSchema,
      onSubmit(values, formikHelpers) {
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
        <Heading className="text-[20pt] mb-[1rem]">
          <Heading.Icon position={'left'}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>Add toll network</Heading.Text>
        </Heading>

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
              placeholder="Enter toll network name"
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
            <Alert.Content>Toll network created</Alert.Content>
          </Alert>
        ) : null}

        {error ? (
          <Alert variant={'error'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>{`auth:errors.${error.message}`}</Alert.Content>
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
              <Button.Content>Add toll network</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddTollNetworkPage;
