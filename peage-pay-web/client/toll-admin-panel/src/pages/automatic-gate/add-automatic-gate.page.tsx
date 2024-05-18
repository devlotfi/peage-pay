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
  Select,
  TextInput,
} from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ADD_AUTOMATIC_GATE } from '../../graphql/mutations';
import {
  AutomaticGateVariantType,
  TollDirectionType,
} from '../../__generated__/graphql';
import { useTranslation } from 'react-i18next';
import { useRenderFieldOptions } from '@peage-pay-web/utils';

interface AddAutomaticGateValues {
  name: string;
  direction: TollDirectionType;
  variant: AutomaticGateVariantType;
  password: string;
  confirmPassword: string;
}

const initialValues: AddAutomaticGateValues = {
  name: '',
  direction: TollDirectionType.Inbound,
  variant: AutomaticGateVariantType.QrCodeReader,
  password: '',
  confirmPassword: '',
};

const addAutomaticGateValidationSchema = yup.object({
  name: yup.string().max(256).required(),
  password: yup.string().min(7).max(512).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')])
    .required(),
});

const AddAutomaticGatePage = (): JSX.Element => {
  const { t } = useTranslation();
  const { renderFieldOptions } = useRenderFieldOptions();
  const [addAutomaticGate, { loading, error, data }] =
    useMutation(ADD_AUTOMATIC_GATE);
  const { errors, touched, handleChange, handleBlur, handleSubmit, values } =
    useFormik({
      initialValues,
      validationSchema: addAutomaticGateValidationSchema,
      onSubmit(values) {
        addAutomaticGate({
          variables: {
            addAutomaticGateInput: {
              direction: values.direction,
              variant: values.variant,
              name: values.name,
              password: values.password,
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
            <Heading.Text>{t('ADD_AUTOMATIC_GATE')}</Heading.Text>
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
        <Select
          variant={errors.variant && touched.variant ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <Select.Main>
            <Select.Label>{t('VARIANT')}</Select.Label>
            <Select.Field
              name="variant"
              value={values.variant}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {renderFieldOptions(AutomaticGateVariantType)}
            </Select.Field>
          </Select.Main>
          {errors.variant && touched.variant ? (
            <Select.InfoMessage>{errors.variant}</Select.InfoMessage>
          ) : null}
        </Select>
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
          variant={errors.password && touched.password ? 'error' : 'edge-100'}
          className="w-full mb-[1.3rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('PASSWORD')}</TextInput.Label>
            <TextInput.Field
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('ENTER_PASSWORD')}
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
            <TextInput.Label>{t('CONFIRM_PASSWORD')}</TextInput.Label>
            <TextInput.Field
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('ENTER_PASSWORD')}
              type="password"
            ></TextInput.Field>
          </TextInput.Main>
          {errors.confirmPassword && touched.confirmPassword ? (
            <TextInput.InfoMessage>
              {errors.confirmPassword}
            </TextInput.InfoMessage>
          ) : null}
        </TextInput>

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
              <Button.Content>{t('ADD_AUTOMATIC_GATE')}</Button.Content>
            </>
          )}
        </Button>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddAutomaticGatePage;
