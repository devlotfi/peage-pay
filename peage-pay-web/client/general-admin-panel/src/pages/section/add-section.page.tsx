import { useMutation, useQuery } from '@apollo/client';
import {
  faCheck,
  faExclamationCircle,
  faPlus,
  faRoadBarrier,
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
  TollPicker,
} from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { TOLL_NETWORK_BY_ID } from '../../graphql/queries';
import { useRef, useState } from 'react';
import { TollType } from '../../__generated__/graphql';
import { ADD_SECTION } from '../../graphql/mutations';
import { useTranslation } from 'react-i18next';

interface AddSectionValues {
  fromTollId: string;
  toTollId: string;
  distance: number;
}

const initialValues: AddSectionValues = {
  fromTollId: '',
  toTollId: '',
  distance: 0,
};

const addSectionValidationSchema = yup.object({
  fromTollId: yup.string().uuid().required(),
  toTollId: yup.string().uuid().required(),
  distance: yup.number().min(0).required(),
});

const AddSectionPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { tollNetworkId } = useParams();
  const [fromToll, setFromToll] = useState<TollType | null>(null);
  const [toToll, setToToll] = useState<TollType | null>(null);
  const {
    data: tollNetworkData,
    loading: tollNetworkLoading,
    error: tollNetworkError,
  } = useQuery(TOLL_NETWORK_BY_ID, {
    variables: {
      tollNetworkByIdInput: {
        id: tollNetworkId as string,
      },
    },
  });
  const [addSection, { loading: addLoading, error: addError, data: addData }] =
    useMutation(ADD_SECTION);
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
    validationSchema: addSectionValidationSchema,
    onSubmit(values) {
      addSection({
        variables: {
          addSectionInput: {
            fromTollId: values.fromTollId,
            toTollId: values.toTollId,
            distance: values.distance,
          },
        },
      });
    },
  });

  const fromTollPickerModalRef = useRef<HTMLDialogElement>(null);
  const toTollPickerModalRef = useRef<HTMLDialogElement>(null);

  const handleFromTollChange = (toll: TollType | null) => {
    if (toll) {
      setFieldValue('fromTollId', toll.id);
      setFromToll(toll);
    } else {
      setFieldValue('fromTollId', '');
      setFromToll(null);
    }
  };

  const handleToTollChange = (toll: TollType | null) => {
    if (toll) {
      setFieldValue('toTollId', toll.id);
      setToToll(toll);
    } else {
      setFieldValue('toTollId', '');
      setToToll(null);
    }
  };

  return (
    <FormPageLayout>
      {tollNetworkData ? (
        <>
          <TollPicker
            value={fromToll as any}
            onChange={handleFromTollChange}
            modalRef={fromTollPickerModalRef}
            tollNetwork={tollNetworkData.tollNetworkById}
          ></TollPicker>
          <TollPicker
            value={toToll as any}
            onChange={handleToTollChange}
            modalRef={toTollPickerModalRef}
            tollNetwork={tollNetworkData.tollNetworkById}
          ></TollPicker>
        </>
      ) : null}

      <FormPageLayout.Form onSubmit={handleSubmit}>
        <AdminDashboardLayout.Loading loading={tollNetworkLoading}>
          <AdminDashboardLayout.Error error={tollNetworkError}>
            <FormPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>{t('ADD_SECTION')}</Heading.Text>
              </Heading>
            </FormPageLayout.Title>

            <TextInput
              variant={
                errors.fromTollId && touched.fromTollId ? 'error' : 'edge-100'
              }
              className="w-full mb-[0.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>{t('FROM_TOLL')}</TextInput.Label>
                <div className="flex items-center ml-[1rem]">
                  {fromToll?.name} {fromToll?.id}
                </div>
              </TextInput.Main>
              {errors.fromTollId && touched.fromTollId ? (
                <TextInput.InfoMessage>
                  {errors.fromTollId}
                </TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <Button
              className="mb-[1.3rem]"
              variant={'base-200'}
              type="button"
              onClick={() => fromTollPickerModalRef.current?.showModal()}
            >
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faRoadBarrier}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>{t('SET_TOLL')}</Button.Content>
            </Button>

            <TextInput
              variant={
                errors.toTollId && touched.toTollId ? 'error' : 'edge-100'
              }
              className="w-full mb-[0.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>{t('TO_TOLL')}</TextInput.Label>
                <div className="flex items-center ml-[1rem]">
                  {toToll?.name} {toToll?.id}
                </div>
              </TextInput.Main>
              {errors.toTollId && touched.toTollId ? (
                <TextInput.InfoMessage>{errors.toTollId}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <Button
              className="mb-[1.3rem]"
              variant={'base-200'}
              type="button"
              onClick={() => toTollPickerModalRef.current?.showModal()}
            >
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faRoadBarrier}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>{t('SET_TOLL')}</Button.Content>
            </Button>

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
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>{t('ADD_SECTION')}</Button.Content>
                </>
              )}
            </Button>
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddSectionPage;
