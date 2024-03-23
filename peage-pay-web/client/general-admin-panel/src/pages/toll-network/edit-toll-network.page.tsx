import { useMutation, useQuery } from "@apollo/client";
import {
  faCheck,
  faExclamationCircle,
  faPen,
  faPlus,
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
import { EDIT_TOLL_NETWORK } from "../../graphql/mutations";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { TOLL_NETWORK_BY_ID } from "../../graphql/queries";

interface EditTollNetworkValues {
  name: string;
}

const initialValues: EditTollNetworkValues = {
  name: "",
};

const editTollNetworkValidationSchema = yup.object({
  name: yup.string().max(256).required(),
});

const EditTollNetworkPage = (): JSX.Element => {
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
    fetchPolicy: "network-only",
    onCompleted(data) {
      if (data.tollNetworkById) {
        setValues({
          name: data.tollNetworkById.name,
        });
      }
    },
  });
  const [
    editTollNetwork,
    { loading: editLoading, error: editError, data: editData },
  ] = useMutation(EDIT_TOLL_NETWORK);
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
    validationSchema: editTollNetworkValidationSchema,
    onSubmit(values) {
      if (tollNetworkId) {
        editTollNetwork({
          variables: {
            editTollNetworkInput: {
              tollNetworkId,
              name: values.name,
            },
          },
        });
      }
    },
  });

  return (
    <FormPageLayout>
      <FormPageLayout.Form onSubmit={handleSubmit}>
        <AdminDashboardLayout.Loading loading={tollNetworkLoading}>
          <AdminDashboardLayout.Error error={tollNetworkError}>
            <Heading className="text-[20pt]">
              <Heading.Icon position={"left"}>
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Edit toll network</Heading.Text>
            </Heading>
            <Table.Container className="mb-[2rem]">
              <Table>
                <Table.Body>
                  <Table.Body.Tr>
                    <Table.Body.Td className="text-primary-100 font-bold">
                      Toll network:
                    </Table.Body.Td>
                    <Table.Body.Td>
                      {tollNetworkData?.tollNetworkById?.name}
                    </Table.Body.Td>
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
                  placeholder="Enter toll network name"
                  type="text"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.name && touched.name ? (
                <TextInput.InfoMessage>{errors.name}</TextInput.InfoMessage>
              ) : null}
            </TextInput>

            {editData ? (
              <Alert variant={"success"} className="mb-[0.5rem]">
                <Alert.Icon position={"left"}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>Toll network updated</Alert.Content>
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
                  <Button.Content>Edit toll network</Button.Content>
                </>
              )}
            </Button>
          </AdminDashboardLayout.Error>
        </AdminDashboardLayout.Loading>
      </FormPageLayout.Form>
    </FormPageLayout>
  );
};

export default EditTollNetworkPage;
