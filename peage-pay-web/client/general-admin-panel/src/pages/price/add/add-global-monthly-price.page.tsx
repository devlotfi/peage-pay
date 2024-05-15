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
  MonthPicker,
  TextInput,
} from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ADD_GLOBAL_PRICE } from '../../../graphql/mutations';
import { Utils } from '@peage-pay-web/utils';
import { MonthType } from '../../../__generated__/graphql';
import { useTranslation } from 'react-i18next';

interface AddGlobalMonthlyPriceValues {
  value: number;
  priority: number;
  startTimestamp: string;
  endTimestamp: string;
  startDay: number;
  endDay: number;
  months: MonthType[];
}

const initialValues: AddGlobalMonthlyPriceValues = {
  value: 1,
  priority: 1,
  startTimestamp: '',
  endTimestamp: '',
  startDay: 1,
  endDay: 10,
  months: [],
};

const addGlobalMonthlyPriceValidationSchema = yup.object({
  value: yup.string().max(256).required(),
  priority: yup.string().max(10).required(),
  startTimestamp: yup.string().required(),
  endTimestamp: yup
    .string()
    .test((value, ctx) => Utils.isLaterTime(value, ctx.parent.startTimestamp))
    .required(),
  startDay: yup.number().integer().min(1).max(31).required(),
  endDay: yup
    .number()
    .integer()
    .min(1)
    .max(31)
    .test((value, ctx) =>
      value && value >= ctx.parent.startDay ? true : false,
    )
    .required(),
  months: yup
    .array()
    .of(yup.string().oneOf(Object.values(MonthType)))
    .min(1)
    .max(12)
    .required(),
});

const AddGlobalMonthlyPricePage = (): JSX.Element => {
  const { t } = useTranslation();
  const [addGlobalPrice, { loading, error, data }] =
    useMutation(ADD_GLOBAL_PRICE);
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
    validationSchema: addGlobalMonthlyPriceValidationSchema,
    onSubmit(values) {
      addGlobalPrice({
        variables: {
          addPriceInput: {
            addMonthlyPriceInput: {
              value: values.value,
              priority: values.priority,
              startTimestamp: Utils.createDateFromTimeString(
                values.startTimestamp,
              ),
              endTimestamp: Utils.createDateFromTimeString(values.endTimestamp),
              startDay: values.startDay,
              endDay: values.endDay,
              months: values.months,
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
            <Heading.Text>{t('ADD_GLOBAL_MONTHLY_PRICE')}</Heading.Text>
          </Heading>
        </FormPageLayout.Title>

        <TextInput
          variant={errors.value && touched.value ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('VALUE')}</TextInput.Label>
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
            <TextInput.Label>{t('PRIORITY')}</TextInput.Label>
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
              <TextInput.Label>{t('START_TIMESTAMP')}</TextInput.Label>
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
              <TextInput.Label>{t('END_TIMESTAMP')}</TextInput.Label>
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
            variant={errors.startDay && touched.startDay ? 'error' : 'edge-100'}
            className="w-full"
          >
            <TextInput.Main>
              <TextInput.Label>{t('START_DAY')}</TextInput.Label>
              <TextInput.Field
                name="startDay"
                value={values.startDay}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
              ></TextInput.Field>
            </TextInput.Main>
            {errors.startDay && touched.startDay ? (
              <TextInput.InfoMessage>{errors.startDay}</TextInput.InfoMessage>
            ) : null}
          </TextInput>
          <DirectionalInputs.Arrow></DirectionalInputs.Arrow>
          <TextInput
            variant={errors.endDay && touched.endDay ? 'error' : 'edge-100'}
            className="w-full"
          >
            <TextInput.Main>
              <TextInput.Label>{t('END_DAY')}</TextInput.Label>
              <TextInput.Field
                name="endDay"
                value={values.endDay}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
              ></TextInput.Field>
            </TextInput.Main>
            {errors.endDay && touched.endDay ? (
              <TextInput.InfoMessage>{errors.endDay}</TextInput.InfoMessage>
            ) : null}
          </TextInput>
        </DirectionalInputs>

        <MonthPicker
          className="mb-[1rem]"
          variant={errors.months && touched.months ? 'error' : 'edge-100'}
        >
          <MonthPicker.Main
            value={values.months}
            handleChange={(selectedMonths) =>
              setFieldValue('months', selectedMonths)
            }
          >
            <MonthPicker.Label>{t('MONTHS')}</MonthPicker.Label>
          </MonthPicker.Main>
          {errors.months && touched.months ? (
            <MonthPicker.InfoMessage>{errors.months}</MonthPicker.InfoMessage>
          ) : null}
        </MonthPicker>

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
              <Button.Content>{t('ADD_GLOBAL_MONTHLY_PRICE')}</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddGlobalMonthlyPricePage;
