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
  Table,
  TextInput,
} from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import {
  SECTION_BY_IDS,
  TOLL_BY_ID,
  TOLL_NETWORK_BY_ID,
} from '../../graphql/queries';
import { EDIT_SECTION } from '../../graphql/mutations';
import { useTranslation } from 'react-i18next';

interface EditSectionValues {
  fromTollId: string;
  toTollId: string;
  distance: number;
}

const initialValues: EditSectionValues = {
  fromTollId: '',
  toTollId: '',
  distance: 0,
};

const editSectionValidationSchema = yup.object({
  fromTollId: yup.string().uuid().required(),
  toTollId: yup.string().uuid().required(),
  distance: yup.number().min(0).required(),
});

const EditSectionPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { fromTollId, toTollId } = useParams();
  const {
    data: fromTollData,
    loading: fromTollLoading,
    error: fromTollError,
  } = useQuery(TOLL_BY_ID, {
    variables: {
      tollByIdInput: {
        id: fromTollId as string,
      },
    },
    onCompleted(data) {
      if (data.tollById) {
        setFieldValue('fromTollId', data.tollById.id);
      }
    },
  });
  const {
    data: toTollData,
    loading: toTollLoading,
    error: toTollError,
  } = useQuery(TOLL_BY_ID, {
    variables: {
      tollByIdInput: {
        id: toTollId as string,
      },
    },
    onCompleted(data) {
      if (data.tollById) {
        setFieldValue('toTollId', data.tollById.id);
      }
    },
  });

  const { loading: sectionLoading, error: sectionError } = useQuery(
    SECTION_BY_IDS,
    {
      variables: {
        sectionByIdsInput: {
          fromTollId: fromTollData?.tollById.id as string,
          toTollId: toTollData?.tollById.id as string,
        },
      },
      onCompleted(data) {
        setFieldValue('distance', data.sectionByIds?.distance);
      },
      skip:
        fromTollLoading ||
        toTollLoading ||
        fromTollError !== undefined ||
        toTollError !== undefined,
    },
  );
  const {
    data: tollNetworkData,
    loading: tollNetworkLoading,
    error: tollNetworkError,
  } = useQuery(TOLL_NETWORK_BY_ID, {
    variables: {
      tollNetworkByIdInput: {
        id: fromTollData?.tollById.tollNetwork.id as string,
      },
    },
    skip:
      fromTollLoading ||
      toTollLoading ||
      sectionLoading ||
      fromTollError !== undefined ||
      toTollError !== undefined ||
      sectionError !== undefined,
  });
  const [editSection, { loading: addLoading, error: addError, data: addData }] =
    useMutation(EDIT_SECTION);
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
    validationSchema: editSectionValidationSchema,
    onSubmit(values) {
      editSection({
        variables: {
          editSectionInput: {
            fromTollId: values.fromTollId,
            toTollId: values.toTollId,
            distance: values.distance,
          },
        },
      });
    },
  });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <AdminDashboardLayout.Loading
          loading={
            fromTollLoading ||
            toTollLoading ||
            tollNetworkLoading ||
            sectionLoading
          }
        >
          <AdminDashboardLayout.Error
            error={
              fromTollError || toTollError || tollNetworkError || sectionError
            }
          >
            <FormPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>{t('EDIT_SECTION')}</Heading.Text>
              </Heading>
            </FormPageLayout.Title>
            <Table.Container className="mb-[2rem]">
              <Table>
                <Table.Body>
                  <Table.Body.Tr>
                    <Table.Body.Td className="text-primary-100 font-bold">
                      {t('FROM_TOLL')}
                    </Table.Body.Td>
                    <Table.Body.Td>
                      {fromTollData?.tollById?.name}
                    </Table.Body.Td>
                  </Table.Body.Tr>
                  <Table.Body.Tr>
                    <Table.Body.Td className="text-primary-100 font-bold">
                      {t('TO_TOLL')}
                    </Table.Body.Td>
                    <Table.Body.Td>{toTollData?.tollById?.name}</Table.Body.Td>
                  </Table.Body.Tr>
                  <Table.Body.Tr>
                    <Table.Body.Td className="text-primary-100 font-bold">
                      {t('TOLL_NETWORK')}
                    </Table.Body.Td>
                    <Table.Body.Td>
                      {tollNetworkData?.tollNetworkById.name}
                    </Table.Body.Td>
                  </Table.Body.Tr>
                </Table.Body>
              </Table>
            </Table.Container>

            <TextInput
              variant={
                errors.distance && touched.distance ? 'error' : 'edge-100'
              }
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>{t('DISTANCE')}</TextInput.Label>
                <TextInput.Field
                  name="distance"
                  value={values.distance}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter distance"
                  type="number"
                ></TextInput.Field>
                <TextInput.Icon position={'right'}>km</TextInput.Icon>
              </TextInput.Main>
              {errors.distance && touched.distance ? (
                <TextInput.InfoMessage>{errors.distance}</TextInput.InfoMessage>
              ) : null}
            </TextInput>

            {addData ? (
              <Alert variant={'success'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{t('OPERATION_SUCCESSFUL')}</Alert.Content>
              </Alert>
            ) : null}

            {addError ? (
              <Alert variant={'error'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{`${t(addError.message)}`}</Alert.Content>
              </Alert>
            ) : null}

            <Button type="submit" variant={'primary'} className="mt-[0.5rem]">
              {addLoading ? (
                <LoaderDots
                  dotProps={{ variant: 'color-content' }}
                ></LoaderDots>
              ) : (
                <>
                  <Button.Icon position={'left'}>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>{t('EDIT_SECTION')}</Button.Content>
                </>
              )}
            </Button>
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default EditSectionPage;
