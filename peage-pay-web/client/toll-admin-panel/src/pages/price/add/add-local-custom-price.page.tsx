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
  DirectionalInputs,
  FormPageLayout,
  Heading,
  LoaderDots,
  TextInput,
} from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Utils } from '@peage-pay-web/utils';
import { ADD_LOCAL_PRICE } from '../../../graphql/mutations';

interface AddLocalCustomPriceValues {
  value: number;
  priority: number;
  startTimestamp: string;
  endTimestamp: string;
  startDate: string;
  endDate: string;
}

const initialValues: AddLocalCustomPriceValues = {
  value: 1,
  priority: 1,
  startTimestamp: '',
  endTimestamp: '',
  startDate: '',
  endDate: '',
};

const addLocalCustomPriceValidationSchema = yup.object({
  value: yup.string().max(256).required(),
  priority: yup.string().max(10).required(),
  startTimestamp: yup.string().required(),
  endTimestamp: yup
    .string()
    .test((value, ctx) => Utils.isLaterTime(value, ctx.parent.startTimestamp))
    .required(),
  startDate: yup.string().required(),
  endDate: yup
    .string()
    .test((value, ctx) => Utils.isLaterOrEqualDate(value, ctx.parent.startDate))
    .required(),
});

const AddLocalCustomPricePage = (): JSX.Element => {
  const [addLocalPrice, { loading, error, data }] =
    useMutation(ADD_LOCAL_PRICE);
  const { errors, touched, handleChange, handleBlur, handleSubmit, values } =
    useFormik({
      initialValues,
      validationSchema: addLocalCustomPriceValidationSchema,
      onSubmit(values) {
        addLocalPrice({
          variables: {
            addPriceInput: {
              addCustomPriceInput: {
                value: values.value,
                priority: values.priority,
                startTimestamp: Utils.createDateFromTimeString(
                  values.startTimestamp,
                ),
                endTimestamp: Utils.createDateFromTimeString(
                  values.endTimestamp,
                ),
                startDate: Utils.createDateFromDateString(values.startDate),
                endDate: Utils.createDateFromDateString(values.endDate),
              },
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
            <Heading.Text>Add custom local price</Heading.Text>
          </Heading>
        </FormPageLayout.Title>

        <TextInput
          variant={errors.value && touched.value ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>Value</TextInput.Label>
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
        <TextInput
          variant={errors.value && touched.value ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>Priority</TextInput.Label>
            <TextInput.Field
              name="priority"
              value={values.priority}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter priority"
              type="number"
              min={0}
            ></TextInput.Field>
          </TextInput.Main>
          {errors.priority && touched.priority ? (
            <TextInput.InfoMessage>{errors.priority}</TextInput.InfoMessage>
          ) : null}
        </TextInput>

        <DirectionalInputs className="w-full mb-[1.3rem]">
          <TextInput
            variant={
              errors.startTimestamp && touched.startTimestamp
                ? 'error'
                : 'edge-100'
            }
            className="w-full"
          >
            <TextInput.Main>
              <TextInput.Label>Start timestamp</TextInput.Label>
              <TextInput.Field
                name="startTimestamp"
                value={values.startTimestamp}
                onChange={handleChange}
                onBlur={handleBlur}
                type="time"
              ></TextInput.Field>
            </TextInput.Main>
            {errors.startTimestamp && touched.startTimestamp ? (
              <TextInput.InfoMessage>
                {errors.startTimestamp}
              </TextInput.InfoMessage>
            ) : null}
          </TextInput>
          <DirectionalInputs.Arrow></DirectionalInputs.Arrow>
          <TextInput
            variant={
              errors.endTimestamp && touched.endTimestamp ? 'error' : 'edge-100'
            }
            className="w-full"
          >
            <TextInput.Main>
              <TextInput.Label>End timestamp</TextInput.Label>
              <TextInput.Field
                name="endTimestamp"
                value={values.endTimestamp}
                onChange={handleChange}
                onBlur={handleBlur}
                type="time"
              ></TextInput.Field>
            </TextInput.Main>
            {errors.endTimestamp && touched.endTimestamp ? (
              <TextInput.InfoMessage>
                {errors.endTimestamp}
              </TextInput.InfoMessage>
            ) : null}
          </TextInput>
        </DirectionalInputs>

        <DirectionalInputs className="w-full mb-[1.3rem]">
          <TextInput
            variant={
              errors.startDate && touched.startDate ? 'error' : 'edge-100'
            }
            className="w-full"
          >
            <TextInput.Main>
              <TextInput.Label>Start date</TextInput.Label>
              <TextInput.Field
                name="startDate"
                value={values.startDate}
                onChange={handleChange}
                onBlur={handleBlur}
                type="date"
              ></TextInput.Field>
            </TextInput.Main>
            {errors.startDate && touched.startDate ? (
              <TextInput.InfoMessage>{errors.startDate}</TextInput.InfoMessage>
            ) : null}
          </TextInput>
          <DirectionalInputs.Arrow></DirectionalInputs.Arrow>
          <TextInput
            variant={errors.endDate && touched.endDate ? 'error' : 'edge-100'}
            className="w-full"
          >
            <TextInput.Main>
              <TextInput.Label>End date</TextInput.Label>
              <TextInput.Field
                name="endDate"
                value={values.endDate}
                onChange={handleChange}
                onBlur={handleBlur}
                type="date"
              ></TextInput.Field>
            </TextInput.Main>
            {errors.endDate && touched.endDate ? (
              <TextInput.InfoMessage>{errors.endDate}</TextInput.InfoMessage>
            ) : null}
          </TextInput>
        </DirectionalInputs>

        {data ? (
          <Alert variant={'success'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>Local custom price created</Alert.Content>
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
              <Button.Content>Add local daily price</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddLocalCustomPricePage;
