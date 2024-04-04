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
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { ADD_RFID_TAG } from '../../graphql/mutations';

interface AddRfidTagValues {
  rfid: string;
  registrationNumber: string;
}

const initialValues: AddRfidTagValues = {
  rfid: '',
  registrationNumber: '',
};

const addRfidTagValidationSchema = yup.object({
  rfid: yup.string().max(256).required(),
  registrationNumber: yup.string().max(10).required(),
});

const AddRfidTagPage = (): JSX.Element => {
  const { baseUserId } = useParams();
  const [addHighway, { loading, error, data }] = useMutation(ADD_RFID_TAG);
  const { errors, touched, handleChange, handleBlur, handleSubmit, values } =
    useFormik({
      initialValues,
      validationSchema: addRfidTagValidationSchema,
      onSubmit(values) {
        addHighway({
          variables: {
            addRfidTagInput: {
              baseUserId: baseUserId as string,
              rfid: values.rfid,
              registrationNumber: values.registrationNumber,
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
            <Heading.Text>Add rfid tag</Heading.Text>
          </Heading>
        </FormPageLayout.Title>

        <TextInput
          variant={errors.rfid && touched.rfid ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>Rfid</TextInput.Label>
            <TextInput.Field
              name="rfid"
              value={values.rfid}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter rfid"
              type="text"
            ></TextInput.Field>
          </TextInput.Main>
          {errors.rfid && touched.rfid ? (
            <TextInput.InfoMessage>{errors.rfid}</TextInput.InfoMessage>
          ) : null}
        </TextInput>
        <TextInput
          variant={
            errors.registrationNumber && touched.registrationNumber
              ? 'error'
              : 'edge-100'
          }
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>Registration number</TextInput.Label>
            <TextInput.Field
              name="registrationNumber"
              value={values.registrationNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter highway registrationNumber"
              type="text"
            ></TextInput.Field>
          </TextInput.Main>
          {errors.registrationNumber && touched.registrationNumber ? (
            <TextInput.InfoMessage>
              {errors.registrationNumber}
            </TextInput.InfoMessage>
          ) : null}
        </TextInput>

        {data ? (
          <Alert variant={'success'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>Rfid tag created</Alert.Content>
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
              <Button.Content>Add rfid tag</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddRfidTagPage;
