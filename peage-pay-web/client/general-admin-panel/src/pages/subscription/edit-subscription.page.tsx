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
import { EDIT_SUBSCRIPTION } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { SUBSCRIPTION_BY_ID } from '../../graphql/queries';
import { useTranslation } from 'react-i18next';

interface EditSubscriptionValues {
  name: string;
  days: number;
  price: number;
}

const initialValues: EditSubscriptionValues = {
  name: '',
  days: 1,
  price: 1,
};

const editSubscriptionValidationSchema = yup.object({
  name: yup.string().max(256).required(),
  days: yup.number().integer().positive(),
  price: yup.number().integer().positive(),
});

const EditSubscriptionPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { subscriptionId } = useParams();
  const { loading: subscriptionLoading, error: subscriptionError } = useQuery(
    SUBSCRIPTION_BY_ID,
    {
      variables: {
        subscriptionByIdInput: {
          id: subscriptionId as string,
        },
      },
      fetchPolicy: 'network-only',
      onCompleted(data) {
        if (data.subscriptionById) {
          setValues({
            name: data.subscriptionById.name,
            days: data.subscriptionById.days,
            price: data.subscriptionById.price,
          });
        }
      },
    },
  );
  const [
    editSubscription,
    { loading: editLoading, error: editError, data: editData },
  ] = useMutation(EDIT_SUBSCRIPTION);
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
    validationSchema: editSubscriptionValidationSchema,
    onSubmit(values) {
      if (subscriptionId) {
        editSubscription({
          variables: {
            editSubscriptionInput: {
              subscriptionId,
              name: values.name,
              days: values.days,
              price: values.price,
            },
          },
        });
      }
    },
  });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <AdminDashboardLayout.Loading loading={subscriptionLoading}>
          <AdminDashboardLayout.Error error={subscriptionError}>
            <FormPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>{t('EDIT_SUBSCRIPTION')}</Heading.Text>
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
            <TextInput
              variant={errors.days && touched.days ? 'error' : 'edge-100'}
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>{t('DAYS')}</TextInput.Label>
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
                <TextInput.Label>{t('PRICE')}</TextInput.Label>
                <TextInput.Field
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter price"
                  type="number"
                  min={1}
                ></TextInput.Field>
                <TextInput.Icon position={'right'}>dzd/km</TextInput.Icon>
              </TextInput.Main>
              {errors.price && touched.price ? (
                <TextInput.InfoMessage>{errors.price}</TextInput.InfoMessage>
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
                  <Button.Content>{t('EDIT_SUBSCRIPTION')}</Button.Content>
                </>
              )}
            </Button>
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default EditSubscriptionPage;
