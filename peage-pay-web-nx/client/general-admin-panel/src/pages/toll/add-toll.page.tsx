import { useMutation, useQuery } from '@apollo/client';
import {
  faCheck,
  faCity,
  faExclamationCircle,
  faMapMarked,
  faPlus,
  faRoad,
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
import { ADD_TOLL } from '../../graphql/mutations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TOLL_NETWORK_BY_ID } from '../../graphql/queries';
import LocationPicker from '../../components/toll/location-picker.component';
import WilayaPicker from '../../components/wilaya/wilaya-picker.component';
import { HighwayType, WilayaType } from '../../__generated__/graphql';
import HighwayPicker from '../../components/highway/highway-picker.component';

interface AddTollValues {
  name: string;
  latitude: number;
  longitude: number;
  wilayaId: string;
  highwayId: string;
}

const initialValues: AddTollValues = {
  name: '',
  latitude: 0,
  longitude: 0,
  wilayaId: '',
  highwayId: '',
};

const addTollValidationSchema = yup.object({
  name: yup.string().max(256).required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  wilayaId: yup.string().uuid().required(),
  highwayId: yup.string().uuid().required(),
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
            tollNetworkId: tollNetworkId as string,
          },
        },
      });
    },
  });
  const [selectedWilaya, setSelectedWilaya] = useState<WilayaType | null>(null);
  const [selectedHighway, setSelectedHighway] = useState<HighwayType | null>(
    null,
  );

  const locationPickerModalRef = useRef<HTMLDialogElement>(null);
  const wilayaPickerModalRef = useRef<HTMLDialogElement>(null);
  const highwayPickerModalRef = useRef<HTMLDialogElement>(null);

  const handleMapChange = (latLng: google.maps.LatLng | null) => {
    const latitude = latLng?.lat();
    const longitude = latLng?.lng();
    if (latitude && longitude) {
      setFieldValue('latitude', latitude);
      setFieldValue('longitude', longitude);
    } else {
      setFieldValue('latitude', 0);
      setFieldValue('longitude', 0);
    }
  };

  const handleWilayaChange = (wilaya: WilayaType | null) => {
    if (wilaya) {
      setFieldValue('wilayaId', wilaya?.id);
      setSelectedWilaya(wilaya);
    } else {
      setFieldValue('wilayaId', '');
      setSelectedWilaya(null);
    }
  };

  const handleHighwayChange = (highway: HighwayType | null) => {
    if (highway) {
      setFieldValue('highwayId', highway?.id);
      setSelectedHighway(highway);
    } else {
      setFieldValue('highwayId', '');
      setSelectedHighway(null);
    }
  };

  return (
    <FormPageLayout>
      <LocationPicker
        onChange={handleMapChange}
        modalRef={locationPickerModalRef}
      ></LocationPicker>
      <WilayaPicker
        value={selectedWilaya}
        onChange={handleWilayaChange}
        modalRef={wilayaPickerModalRef}
      ></WilayaPicker>
      <HighwayPicker
        value={selectedHighway}
        onChange={handleHighwayChange}
        modalRef={highwayPickerModalRef}
      ></HighwayPicker>

      <FormPageLayout.Form onSubmit={handleSubmit}>
        <AdminDashboardLayout.Loading loading={tollNetworkLoading}>
          <AdminDashboardLayout.Error error={tollNetworkError}>
            <div className="flex flex-col md:flex-row md:justify-between items-start">
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>Add toll</Heading.Text>
              </Heading>
              <Heading className="text-[15pt] mb-[2rem]">
                <Heading.Text className="opacity-70">
                  toll network: {tollNetworkData?.tollNetworkById?.name}
                </Heading.Text>
              </Heading>
            </div>

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
              className="w-full mb-[0.5rem]"
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
            <Button
              variant={'base-200'}
              className="mb-[1.3rem]"
              type="button"
              onClick={() => locationPickerModalRef.current?.showModal()}
            >
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Set location</Button.Content>
            </Button>

            <TextInput
              variant={
                errors.wilayaId && touched.wilayaId ? 'error' : 'edge-100'
              }
              className="w-full mb-[0.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Wilaya</TextInput.Label>
                <div className="flex items-center ml-[1rem]">
                  {selectedWilaya?.name} {selectedWilaya?.code}{' '}
                  {selectedWilaya?.id}
                </div>
              </TextInput.Main>
              {errors.wilayaId && touched.wilayaId ? (
                <TextInput.InfoMessage>{errors.wilayaId}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <Button
              className="mb-[1.3rem]"
              variant={'base-200'}
              type="button"
              onClick={() => wilayaPickerModalRef.current?.showModal()}
            >
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faCity}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Set wilaya</Button.Content>
            </Button>

            <TextInput
              variant={
                errors.highwayId && touched.highwayId ? 'error' : 'edge-100'
              }
              className="w-full mb-[0.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Highway</TextInput.Label>
                <div className="flex items-center ml-[1rem]">
                  {selectedHighway?.name} {selectedHighway?.code}{' '}
                  {selectedHighway?.id}
                </div>
              </TextInput.Main>
              {errors.highwayId && touched.highwayId ? (
                <TextInput.InfoMessage>
                  {errors.highwayId}
                </TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <Button
              className="mb-[0.5rem]"
              variant={'base-200'}
              type="button"
              onClick={() => highwayPickerModalRef.current?.showModal()}
            >
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faRoad}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Set highway</Button.Content>
            </Button>

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
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default AddTollPage;
