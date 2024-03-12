import { useMutation, useQuery } from '@apollo/client';
import {
  faCheck,
  faExclamationCircle,
  faMapMarked,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Alert,
  Button,
  ButtonOutline,
  FormPageLayout,
  Heading,
  LoaderDots,
  LocationPicker,
  TextInput,
} from '@peage-pay-web/ui';
import { ADD_HIGHWAY, ADD_TOLL } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { TOLL_NETWORK_BY_ID } from '../../graphql/queries';

interface AddTollValues {
  name: string;
  latitude: number;
  longitude: number;
  wilayaId: string;
  highwayId: string;
  tollNetworkId: string;
}

const initialValues: AddTollValues = {
  name: '',
  latitude: 0,
  longitude: 0,
  wilayaId: '',
  highwayId: '',
  tollNetworkId: '',
};

const addTollValidationSchema = yup.object({
  name: yup.string().max(256).required(),
  code: yup.string().max(10).required(),
});

const AddTollPage = (): JSX.Element => {
  const { tollNetworkId } = useParams();
  const {
    loading: tollNetworkLoading,
    error: tollNetworkError,
    data: tollNetworkData,
  } = useQuery(TOLL_NETWORK_BY_ID, {
    variables: {
      tollNetworkByIdInput: {
        tollNetworkId: tollNetworkId as string,
      },
    },
    fetchPolicy: 'network-only',
  });
  const [addToll, { loading: addLoading, error: addError, data: addData }] =
    useMutation(ADD_TOLL);
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
    validationSchema: addTollValidationSchema,
    onSubmit(values, formikHelpers) {
      addToll({
        variables: {
          addTollInput: {
            name: values.name,
            latitude: values.latitude,
            longitude: values.longitude,
            wilayaId: values.wilayaId,
            highwayId: values.highwayId,
            tollNetworkId: values.tollNetworkId,
          },
        },
      });
    },
  });

  const locationPickerModalRef = useRef<HTMLDialogElement>(null);
  const wilayaPickerModalRef = useRef<HTMLDialogElement>(null);
  const highwayPickerModalRef = useRef<HTMLDialogElement>(null);

  const handleMapChange = (latLng: google.maps.LatLng | null) => {
    const latitude = latLng?.lat();
    const longitude = latLng?.lng();
    if (latitude && longitude) {
      setFieldValue('latitude', latitude);
      setFieldValue('longitude', longitude);
    }
  };

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <FormPageLayout.Loading loading={tollNetworkLoading}>
          <FormPageLayout.Error error={tollNetworkError}>
            <Heading className="text-[20pt] mb-[1rem]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Add toll</Heading.Text>
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
                  placeholder="Enter toll name"
                  type="text"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.name && touched.name ? (
                <TextInput.InfoMessage>{errors.name}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <TextInput
              variant={
                errors.latitude && touched.latitude ? 'error' : 'edge-100'
              }
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Latitude</TextInput.Label>
                <TextInput.Field
                  readOnly
                  name="latitude"
                  value={values.latitude}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter latitude"
                  type="number"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.latitude && touched.latitude ? (
                <TextInput.InfoMessage>{errors.latitude}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <TextInput
              variant={
                errors.longitude && touched.longitude ? 'error' : 'edge-100'
              }
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Longitude</TextInput.Label>
                <TextInput.Field
                  readOnly
                  name="longitude"
                  value={values.longitude}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter longitude"
                  type="number"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.longitude && touched.longitude ? (
                <TextInput.InfoMessage>
                  {errors.longitude}
                </TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <LocationPicker
              onChange={handleMapChange}
              modalRef={locationPickerModalRef}
            ></LocationPicker>
            <ButtonOutline
              type="button"
              onClick={() => locationPickerModalRef.current?.showModal()}
            >
              <ButtonOutline.Icon position={'left'}>
                <FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon>
              </ButtonOutline.Icon>
              <ButtonOutline.Content>Set location</ButtonOutline.Content>
            </ButtonOutline>

            {addData ? (
              <Alert variant={'success'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>Toll created</Alert.Content>
              </Alert>
            ) : null}

            {addError ? (
              <Alert variant={'error'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{`auth:errors.${addError.message}`}</Alert.Content>
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
                  <Button.Content>Add toll</Button.Content>
                </>
              )}
            </Button>
          </FormPageLayout.Error>
        </FormPageLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddTollPage;
