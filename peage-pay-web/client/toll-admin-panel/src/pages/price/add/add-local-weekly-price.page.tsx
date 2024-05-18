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
  DayOfWeekPicker,
  DirectionalInputs,
  FormPageLayout,
  Heading,
  LoaderDots,
  Select,
  TextInput,
} from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Utils, useRenderFieldOptions } from '@peage-pay-web/utils';
import {
  DayOfWeekType,
  TollDirectionType,
} from '../../../__generated__/graphql';
import { ADD_LOCAL_PRICE } from '../../../graphql/mutations';
import { useTranslation } from 'react-i18next';

interface AddLocalWeeklyPriceValues {
  direction: TollDirectionType;
  value: number;
  priority: number;
  startTimestamp: string;
  endTimestamp: string;
  days: DayOfWeekType[];
}

const initialValues: AddLocalWeeklyPriceValues = {
  direction: TollDirectionType.Inbound,
  value: 1,
  priority: 1,
  startTimestamp: '',
  endTimestamp: '',
  days: [],
};

const addLocalWeeklyPriceValidationSchema = yup.object({
  value: yup.string().max(256).required(),
  priority: yup.string().max(10).required(),
  startTimestamp: yup.string().required(),
  endTimestamp: yup
    .string()
    .test((value, ctx) => Utils.isLaterTime(value, ctx.parent.startTimestamp))
    .required(),
  days: yup
    .array()
    .of(yup.string().oneOf(Object.values(DayOfWeekType)))
    .min(1)
    .max(7)
    .required(),
});

const AddLocalWeeklyPricePage = (): JSX.Element => {
  const { t } = useTranslation();
  const { renderFieldOptions } = useRenderFieldOptions();
  const [addLocalPrice, { loading, error, data }] =
    useMutation(ADD_LOCAL_PRICE);
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
    validationSchema: addLocalWeeklyPriceValidationSchema,
    onSubmit(values) {
      addLocalPrice({
        variables: {
          addPriceInput: {
            addWeeklyPriceInput: {
              direction: values.direction,
              value: values.value,
              priority: values.priority,
              startTimestamp: Utils.createDateFromTimeString(
                values.startTimestamp,
              ),
              endTimestamp: Utils.createDateFromTimeString(values.endTimestamp),
              days: values.days,
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
            <Heading.Text>{t('ADD_LOCAL_WEEKLY_PRICE')}</Heading.Text>
          </Heading>
        </FormPageLayout.Title>

        <Select
          variant={errors.direction && touched.direction ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <Select.Main>
            <Select.Label>{t('DIRECTION')}</Select.Label>
            <Select.Field
              name="direction"
              value={values.direction}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {renderFieldOptions(TollDirectionType)}
            </Select.Field>
          </Select.Main>
          {errors.direction && touched.direction ? (
            <Select.InfoMessage>{errors.direction}</Select.InfoMessage>
          ) : null}
        </Select>
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
              placeholder={t('VALUE')}
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
              placeholder={t('PRIORITY')}
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

        <DayOfWeekPicker
          className="w-full mb-[1.3rem]"
          variant={errors.days && touched.days ? 'error' : 'edge-100'}
        >
          <DayOfWeekPicker.Main
            value={values.days}
            handleChange={(selectedDaysOfWeek) =>
              setFieldValue('days', selectedDaysOfWeek)
            }
          >
            <DayOfWeekPicker.Label>{t('DAYS_OF_WEEK')}</DayOfWeekPicker.Label>
          </DayOfWeekPicker.Main>
          {errors.days && touched.days ? (
            <DayOfWeekPicker.InfoMessage>
              {errors.days}
            </DayOfWeekPicker.InfoMessage>
          ) : null}
        </DayOfWeekPicker>

        {data ? (
          <Alert variant={'success'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>Local weekly price created</Alert.Content>
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
              <Button.Content>{t('ADD_LOCAL_WEEKLY_PRICE')}</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddLocalWeeklyPricePage;
