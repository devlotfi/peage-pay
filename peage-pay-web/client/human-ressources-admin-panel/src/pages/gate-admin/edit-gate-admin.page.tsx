import { useMutation, useQuery } from "@apollo/client";
import {
  faCheck,
  faExclamationCircle,
  faPlus,
  faRoadBarrier,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AdminDashboardLayout,
  Alert,
  Button,
  FormPageLayout,
  Heading,
  LoaderDots,
  Table,
  TextInput,
} from "@peage-pay-web/ui";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { TollType } from "../../__generated__/graphql";
import TollPicker from "../../components/toll/toll-picker.component";
import { CHANGE_GATE_ADMIN_TOLL } from "../../graphql/mutations";
import { GATE_ADMIN_BY_ID } from "../../graphql/queries";

interface EditGateAdminValues {
  tollId: string;
}

const initialValues: EditGateAdminValues = {
  tollId: "",
};

const editGateAdminValidationSchema = yup.object({
  tollId: yup.string().uuid(),
});

const EditGateAdminPage = (): JSX.Element => {
  const { baseUserId } = useParams();
  const [toll, setToll] = useState<TollType | null>(null);

  const {
    loading: tollAdminLoading,
    error: tollAdminError,
    data: tollAdminData,
  } = useQuery(GATE_ADMIN_BY_ID, {
    variables: {
      gateAdminByIdInput: {
        id: baseUserId as string,
      },
    },
    onCompleted(data) {
      setFieldValue("tollId", data.gateAdminById?.toll?.id);
      setToll(data.gateAdminById?.toll as TollType);
    },
    fetchPolicy: "network-only",
  });

  const [
    editGateAdmin,
    { loading: addLoading, error: addError, data: addData },
  ] = useMutation(CHANGE_GATE_ADMIN_TOLL);
  const { errors, touched, handleSubmit, values, setFieldValue } = useFormik({
    initialValues,
    validationSchema: editGateAdminValidationSchema,
    onSubmit() {
      editGateAdmin({
        variables: {
          changeGateAdminTollInput: {
            tollId: values.tollId !== "" ? values.tollId : null,
            baseUserId: baseUserId as string,
          },
        },
      });
    },
  });

  const tollPickerModalRef = useRef<HTMLDialogElement>(null);

  const handleTollChange = (toll: TollType | null) => {
    if (toll) {
      setFieldValue("tollId", toll.id);
      setToll(toll);
    } else {
      setFieldValue("tollId", "");
      setToll(null);
    }
  };

  return (
    <FormPageLayout>
      <AdminDashboardLayout.Loading loading={tollAdminLoading}>
        <AdminDashboardLayout.Error error={tollAdminError}>
          <TollPicker
            value={toll}
            onChange={handleTollChange}
            modalRef={tollPickerModalRef}
          ></TollPicker>

          <FormPageLayout.Form onSubmit={handleSubmit}>
            <FormPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={"left"}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>Update gate admin</Heading.Text>
              </Heading>
            </FormPageLayout.Title>
            <Table.Container className="mb-[2rem]">
              <Table>
                <Table.Body>
                  <Table.Body.Tr>
                    <Table.Body.Td className="text-primary-100 font-bold">
                      Gate admin:
                    </Table.Body.Td>
                    <Table.Body.Td>
                      {tollAdminData?.gateAdminById?.baseUser.firstName}{" "}
                      {tollAdminData?.gateAdminById?.baseUser.lastName}
                    </Table.Body.Td>
                  </Table.Body.Tr>
                </Table.Body>
              </Table>
            </Table.Container>

            <TextInput
              variant={errors.tollId && touched.tollId ? "error" : "edge-100"}
              className="w-full mb-[0.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Destination toll</TextInput.Label>
                <div className="flex items-center ml-[1rem]">
                  {toll?.name} {toll?.id}
                </div>
              </TextInput.Main>
              {errors.tollId && touched.tollId ? (
                <TextInput.InfoMessage>{errors.tollId}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            {toll ? (
              <Button
                className="mb-[1.3rem]"
                variant={"error"}
                type="button"
                onClick={() => handleTollChange(null)}
              >
                <Button.Icon position={"left"}>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Unassign</Button.Content>
              </Button>
            ) : (
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
            )}

            {addData ? (
              <Alert variant={"success"} className="mb-[0.5rem]">
                <Alert.Icon position={"left"}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>Gate admin updated</Alert.Content>
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
                  <Button.Content>Update gate admin</Button.Content>
                </>
              )}
            </Button>
          </FormPageLayout.Form>
        </AdminDashboardLayout.Error>
      </AdminDashboardLayout.Loading>
    </FormPageLayout>
  );
};

export default EditGateAdminPage;
