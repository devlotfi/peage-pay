import { useMutation, useQuery } from "@apollo/client";
import {
  faCheck,
  faExclamationCircle,
  faPlus,
  faRoadBarrier,
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
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { TOLL_BY_ID, TOLL_NETWORK_BY_ID } from "../../graphql/queries";
import { useRef, useState } from "react";
import { SectionStatusType, TollType } from "../../__generated__/graphql";
import TollPicker from "../../components/toll/toll-picker.component";
import { ADD_SECTION } from "../../graphql/mutations";
import { Utils } from "@peage-pay-web/utils";

interface AddSectionValues {
  fromTollId: string;
  toTollId: string;
  distance: number;
  status: SectionStatusType;
}

const initialValues: AddSectionValues = {
  fromTollId: "",
  toTollId: "",
  distance: 0,
  status: SectionStatusType.NormalTraffic,
};

const addSectionValidationSchema = yup.object({
  fromTollId: yup.string().uuid().required(),
  toTollId: yup.string().uuid().required(),
  distance: yup.number().min(0).required(),
});

const AddSectionPage = (): JSX.Element => {
  const { tollId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [toToll, setToToll] = useState<TollType | null>(null);
  const {
    data: tollData,
    loading: tollLoading,
    error: tollError,
  } = useQuery(TOLL_BY_ID, {
    variables: {
      tollByIdInput: {
        tollId: tollId as string,
      },
    },
    onCompleted(data) {
      if (data.tollById) {
        setFieldValue("fromTollId", data.tollById.id);
      }
    },
  });
  const {
    data: tollNetworkData,
    loading: tollNetworkLoading,
    error: tollNetworkError,
  } = useQuery(TOLL_NETWORK_BY_ID, {
    variables: {
      tollNetworkByIdInput: {
        tollNetworkId: tollData?.tollById.tollNetwork.id as string,
      },
    },
    skip: tollLoading,
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
            status: values.status,
          },
        },
      });
    },
  });

  const tollPickerModalRef = useRef<HTMLDialogElement>(null);

  const handleTollChange = (toll: TollType | null) => {
    if (toll) {
      setFieldValue("toTollId", toll.id);
      setToToll(toll);
    } else {
      setFieldValue("toTollId", "");
      setToToll(null);
    }
  };

  return (
    <FormPageLayout>
      {tollNetworkData ? (
        <TollPicker
          value={toToll}
          onChange={handleTollChange}
          modalRef={tollPickerModalRef}
          tollNetwork={tollNetworkData.tollNetworkById}
        ></TollPicker>
      ) : null}

      <FormPageLayout.Form onSubmit={handleSubmit}>
        <AdminDashboardLayout.Loading
          loading={tollLoading || tollNetworkLoading}
        >
          <AdminDashboardLayout.Error error={tollError || tollNetworkError}>
            <Heading className="text-[20pt]">
              <Heading.Icon position={"left"}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Add toll distance</Heading.Text>
            </Heading>
            <Table.Container className="mb-[2rem]">
              <Table>
                <Table.Body>
                  <Table.Body.Tr>
                    <Table.Body.Td className="text-primary-100 font-bold">
                      Toll:
                    </Table.Body.Td>
                    <Table.Body.Td>{tollData?.tollById?.name}</Table.Body.Td>
                  </Table.Body.Tr>
                  <Table.Body.Tr>
                    <Table.Body.Td className="text-primary-100 font-bold">
                      Toll network:
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
                errors.toTollId && touched.toTollId ? "error" : "edge-100"
              }
              className="w-full mb-[0.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Destination toll</TextInput.Label>
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
              variant={"base-200"}
              type="button"
              onClick={() => tollPickerModalRef.current?.showModal()}
            >
              <Button.Icon position={"left"}>
                <FontAwesomeIcon icon={faRoadBarrier}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Set toll</Button.Content>
            </Button>

            <TextInput
              variant={
                errors.distance && touched.distance ? "error" : "edge-100"
              }
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Distance</TextInput.Label>
                <TextInput.Field
                  name="distance"
                  value={values.distance}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter distance"
                  type="number"
                ></TextInput.Field>
                <TextInput.Icon position={"right"}>km</TextInput.Icon>
              </TextInput.Main>
              {errors.distance && touched.distance ? (
                <TextInput.InfoMessage>{errors.distance}</TextInput.InfoMessage>
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
                  {Utils.renderFieldOptions(SectionStatusType)}
                </Select.Field>
              </Select.Main>
              {errors.status && touched.status ? (
                <Select.InfoMessage>{errors.status}</Select.InfoMessage>
              ) : null}
            </Select>

            {addData ? (
              <Alert variant={"success"} className="mb-[0.5rem]">
                <Alert.Icon position={"left"}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>Toll distance created</Alert.Content>
              </Alert>
            ) : null}

            {addError ? (
              <Alert variant={"error"} className="mb-[0.5rem]">
                <Alert.Icon position={"left"}>
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{`auth:errors.${addError.message}`}</Alert.Content>
              </Alert>
            ) : null}

            <Button type="submit" variant={"primary"} className="mt-[0.5rem]">
              {addLoading ? (
                <LoaderDots
                  dotProps={{ variant: "color-content" }}
                ></LoaderDots>
              ) : (
                <>
                  <Button.Icon position={"left"}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>Add toll distance</Button.Content>
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
