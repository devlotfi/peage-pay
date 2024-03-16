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
import { ADD_SUBSCRIPTION } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface AddSubscriptionValues {
  name: string;
  days: number;
  price: number;
}

const initialValues: AddSubscriptionValues = {
  name: '',
  days: 1,
  price: 1,
};

const addSubscriptionValidationSchema = yup.object({
  name: yup.string().max(256).required(),
  days: yup.number().integer().positive(),
  price: yup.number().integer().positive(),
});

const AddSubscriptionPage = (): JSX.Element => {
  const [addSubscription, { loading, error, data }] =
    useMutation(ADD_SUBSCRIPTION);
  const { errors, touched, handleChange, handleBlur, handleSubmit, values } =
    useFormik({
      initialValues,
      validationSchema: addSubscriptionValidationSchema,
      onSubmit(values, formikHelpers) {
        addSubscription({
          variables: {
            addSubscriptionInput: {
              name: values.name,
              days: values.days,
              price: values.price,
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
          <Heading.Text>Add subscription</Heading.Text>
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
              placeholder="Enter subscription name"
              type="text"
            ></TextInput.Field>
          </TextInput.Main>
          {errors.name && touched.name ? (
            <TextInput.InfoMessage>{errors.name}</TextInput.InfoMessage>
          ) : null}
        </TextInput>
        <TextInput
          variant={errors.days && touched.days ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>Days</TextInput.Label>
            <TextInput.Field
              name="days"
              value={values.days}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter days"
              type="number"
              min={1}
            ></TextInput.Field>
          </TextInput.Main>
          {errors.days && touched.days ? (
            <TextInput.InfoMessage>{errors.days}</TextInput.InfoMessage>
          ) : null}
        </TextInput>
        <TextInput
          variant={errors.price && touched.price ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>Price</TextInput.Label>
            <TextInput.Field
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter price"
              type="number"
              min={1}
            ></TextInput.Field>
          </TextInput.Main>
          {errors.price && touched.price ? (
            <TextInput.InfoMessage>{errors.price}</TextInput.InfoMessage>
          ) : null}
        </TextInput>

        {data ? (
          <Alert variant={'success'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>Subscription created</Alert.Content>
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
              <Button.Content>Add subscription</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddSubscriptionPage;
