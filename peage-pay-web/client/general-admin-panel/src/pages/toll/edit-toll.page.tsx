import { useMutation, useQuery } from "@apollo/client";
import {
  faCheck,
  faCity,
  faExclamationCircle,
  faMapMarked,
  faPen,
  faPlus,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AdminDashboardLayout,
  Alert,
  Button,
  FormPageLayout,
  Heading,
  LoaderDots,
  Select,
  Table,
  TextInput,
} from "@peage-pay-web/ui";
import { EDIT_TOLL } from "../../graphql/mutations";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import {
  HIGHWAY_BY_ID,
  TOLL_BY_ID,
  TOLL_NETWORK_BY_ID,
  WILAYA_BY_ID,
} from "../../graphql/queries";
import { useState, useRef } from "react";
import {
  WilayaType,
  HighwayType,
  TollStatusType,
} from "../../__generated__/graphql";
import HighwayPicker from "../../components/highway/highway-picker.component";
import LocationPicker from "../../components/toll/location-picker.component";
import WilayaPicker from "../../components/wilaya/wilaya-picker.component";
import { Utils } from "@peage-pay-web/utils";

interface EditTollValues {
  name: string;
  status: TollStatusType;
  latitude: number;
  longitude: number;
  wilayaId: string;
  highwayId: string;
}

const initialValues: EditTollValues = {
  name: "",
  status: TollStatusType.NormalTraffic,
  latitude: 0,
  longitude: 0,
  wilayaId: "",
  highwayId: "",
};

const editTollValidationSchema = yup.object({
  name: yup.string().max(256).required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  wilayaId: yup.string().uuid().required(),
  highwayId: yup.string().uuid().required(),
});

const EditTollPage = (): JSX.Element => {
  const { tollId } = useParams();
  const {
    loading: tollLoading,
    error: tollError,
    data: tollData,
  } = useQuery(TOLL_BY_ID, {
    variables: {
      tollByIdInput: {
        tollId: tollId as string,
      },
    },
    fetchPolicy: "network-only",
    onCompleted(data) {
      if (data.tollById) {
        setValues({
          name: data.tollById.name,
          status: data.tollById.status,
          latitude: data.tollById.latitude,
          longitude: data.tollById.longitude,
          highwayId: data.tollById.highway.id,
          wilayaId: data.tollById.wilaya.id,
        });
      }
    },
  });
  const { loading: highwayLoading, error: highwayError } = useQuery(
    HIGHWAY_BY_ID,
    {
      variables: {
        highwayByIdInput: {
          highwayId: tollData?.tollById.highway.id as string,
        },
      },
      onCompleted(data) {
        if (data.highwayById) {
          setSelectedHighway(data.highwayById);
        }
      },
      fetchPolicy: "network-only",
      skip: tollLoading || tollError !== undefined,
    }
  );
  const { loading: tollNetworkLoading, error: tollNetworkError } = useQuery(
    TOLL_NETWORK_BY_ID,
    {
      variables: {
        tollNetworkByIdInput: {
          tollNetworkId: tollData?.tollById.tollNetwork.id as string,
        },
      },
      fetchPolicy: "network-only",
      skip: tollLoading || tollError !== undefined,
    }
  );
  const { loading: wilayaLoading, error: wilayaError } = useQuery(
    WILAYA_BY_ID,
    {
      variables: {
        wilayaByIdInput: {
          wilayaId: tollData?.tollById.wilaya.id as string,
        },
      },
      onCompleted(data) {
        if (data.wilayaById) {
          setSelectedWilaya(data.wilayaById);
        }
      },
      fetchPolicy: "network-only",
      skip: tollLoading || tollError !== undefined,
    }
  );
  const [editToll, { loading: editLoading, error: editError, data: editData }] =
    useMutation(EDIT_TOLL);
  const {
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: editTollValidationSchema,
    onSubmit(values) {
      if (tollId) {
        editToll({
          variables: {
            editTollInput: {
              name: values.name,
              latitude: values.latitude,
              longitude: values.longitude,
              wilayaId: values.wilayaId,
              highwayId: values.highwayId,
              status: values.status,
              tollId: tollId,
            },
          },
        });
      }
    },
  });

  const [selectedWilaya, setSelectedWilaya] = useState<WilayaType | null>(null);
  const [selectedHighway, setSelectedHighway] = useState<HighwayType | null>(
    null
  );

  const locationPickerModalRef = useRef<HTMLDialogElement>(null);
  const wilayaPickerModalRef = useRef<HTMLDialogElement>(null);
  const highwayPickerModalRef = useRef<HTMLDialogElement>(null);

  const handleMapChange = (latLng: google.maps.LatLng | null) => {
    const latitude = latLng?.lat();
    const longitude = latLng?.lng();
    if (latitude && longitude) {
      setFieldValue("latitude", latitude);
      setFieldValue("longitude", longitude);
    } else {
      setFieldValue("latitude", 0);
      setFieldValue("longitude", 0);
    }
  };

  const handleWilayaChange = (wilaya: WilayaType | null) => {
    if (wilaya) {
      setFieldValue("wilayaId", wilaya.id);
      setSelectedWilaya(wilaya);
    } else {
      setFieldValue("wilayaId", "");
      setSelectedWilaya(null);
    }
  };

  const handleHighwayChange = (highway: HighwayType | null) => {
    if (highway) {
      setFieldValue("highwayId", highway.id);
      setSelectedHighway(highway);
    } else {
      setFieldValue("highwayId", "");
      setSelectedHighway(null);
    }
  };

  return (
    <FormPageLayout>
      {tollData ? (
        <LocationPicker
          initialValue={{
            lat: tollData.tollById.latitude,
            lng: tollData.tollById.longitude,
          }}
          onChange={handleMapChange}
          modalRef={locationPickerModalRef}
        ></LocationPicker>
      ) : null}
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
        <AdminDashboardLayout.Loading
          loading={
            tollLoading || wilayaLoading || highwayLoading || tollNetworkLoading
          }
        >
          <AdminDashboardLayout.Error
            error={tollError || wilayaError || highwayError || tollNetworkError}
          >
            <FormPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={"left"}>
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>Edit toll</Heading.Text>
              </Heading>
            </FormPageLayout.Title>
            <Table.Container className="mb-[2rem]">
              <Table>
                <Table.Body>
                  <Table.Body.Tr>
                    <Table.Body.Td className="text-primary-100 font-bold">
                      Toll:
                    </Table.Body.Td>
                    <Table.Body.Td>{tollData?.tollById?.name}</Table.Body.Td>
                  </Table.Body.Tr>
                </Table.Body>
              </Table>
            </Table.Container>

            <TextInput
              variant={errors.name && touched.name ? "error" : "edge-100"}
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
            <Select
              variant={errors.status && touched.status ? "error" : "edge-100"}
              className="w-full mb-[1.3rem]"
            >
              <Select.Main>
                <Select.Label>Status</Select.Label>
                <Select.Field
                  name="status"
                  value={values.status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {Utils.renderFieldOptions(TollStatusType)}
                </Select.Field>
              </Select.Main>
              {errors.status && touched.status ? (
                <Select.InfoMessage>{errors.status}</Select.InfoMessage>
              ) : null}
            </Select>
            <TextInput
              variant={
                errors.latitude && touched.latitude ? "error" : "edge-100"
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
                errors.longitude && touched.longitude ? "error" : "edge-100"
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
              variant={"base-200"}
              className="mb-[1.3rem]"
              type="button"
              onClick={() => locationPickerModalRef.current?.showModal()}
            >
              <Button.Icon position={"left"}>
                <FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Set location</Button.Content>
            </Button>

            <TextInput
              variant={
                errors.wilayaId && touched.wilayaId ? "error" : "edge-100"
              }
              className="w-full mb-[0.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Wilaya</TextInput.Label>
                <div className="flex items-center ml-[1rem]">
                  {selectedWilaya?.name} {selectedWilaya?.code}{" "}
                  {selectedWilaya?.id}
                </div>
              </TextInput.Main>
              {errors.wilayaId && touched.wilayaId ? (
                <TextInput.InfoMessage>{errors.wilayaId}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <Button
              className="mb-[1.3rem]"
              variant={"base-200"}
              type="button"
              onClick={() => wilayaPickerModalRef.current?.showModal()}
            >
              <Button.Icon position={"left"}>
                <FontAwesomeIcon icon={faCity}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Set wilaya</Button.Content>
            </Button>

            <TextInput
              variant={
                errors.highwayId && touched.highwayId ? "error" : "edge-100"
              }
              className="w-full mb-[0.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Highway</TextInput.Label>
                <div className="flex items-center ml-[1rem]">
                  {selectedHighway?.name} {selectedHighway?.code}{" "}
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
              variant={"base-200"}
              type="button"
              onClick={() => highwayPickerModalRef.current?.showModal()}
            >
              <Button.Icon position={"left"}>
                <FontAwesomeIcon icon={faRoad}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Set highway</Button.Content>
            </Button>

            {editData ? (
              <Alert variant={"success"} className="mb-[0.5rem]">
                <Alert.Icon position={"left"}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>Toll updated</Alert.Content>
              </Alert>
            ) : null}

            {editError ? (
              <Alert variant={"error"} className="mb-[0.5rem]">
                <Alert.Icon position={"left"}>
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{`auth:errors.${editError.message}`}</Alert.Content>
              </Alert>
            ) : null}

            <Button type="submit" variant={"primary"} className="mt-[0.5rem]">
              {editLoading ? (
                <LoaderDots
                  dotProps={{ variant: "color-content" }}
                ></LoaderDots>
              ) : (
                <>
                  <Button.Icon position={"left"}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>Edit toll</Button.Content>
                </>
              )}
            </Button>
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default EditTollPage;
