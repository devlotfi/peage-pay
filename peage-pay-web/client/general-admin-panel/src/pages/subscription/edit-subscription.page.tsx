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
import { EDIT_SUBSCRIPTION } from "../../graphql/mutations";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { SUBSCRIPTION_BY_ID } from "../../graphql/queries";

interface EditSubscriptionValues {
  name: string;
  days: number;
  price: number;
}

const initialValues: EditSubscriptionValues = {
  name: "",
  days: 1,
  price: 1,
};

const editSubscriptionValidationSchema = yup.object({
  name: yup.string().max(256).required(),
  days: yup.number().integer().positive(),
  price: yup.number().integer().positive(),
});

const EditSubscriptionPage = (): JSX.Element => {
  const { subscriptionId } = useParams();
  const {
    loading: subscriptionLoading,
    error: subscriptionError,
    data: subscriptionData,
  } = useQuery(SUBSCRIPTION_BY_ID, {
    variables: {
      subscriptionByIdInput: {
        subscriptionId: subscriptionId as string,
      },
    },
    fetchPolicy: "network-only",
    onCompleted(data) {
      if (data.subscriptionById) {
        setValues({
          name: data.subscriptionById.name,
          days: data.subscriptionById.days,
          price: data.subscriptionById.price,
        });
      }
    },
  });
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
            <Heading className="text-[20pt]">
              <Heading.Icon position={"left"}>
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Edit subscription</Heading.Text>
            </Heading>
            <Heading className="text-[15pt] mb-[2rem]">
              <Heading.Text className="opacity-70">
                Subscription: {subscriptionData?.subscriptionById?.name}
              </Heading.Text>
            </Heading>
            <Table.Container className="mb-[2rem]">
              <Table>
                <Table.Body>
                  <Table.Body.Tr>
                    <Table.Body.Td className="text-primary-100 font-bold">
                      Subscription:
                    </Table.Body.Td>
                    <Table.Body.Td>
                      {subscriptionData?.subscriptionById?.name}
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
                  placeholder="Enter subscription name"
                  type="text"
                ></TextInput.Field>
              </TextInput.Main>
              {errors.name && touched.name ? (
                <TextInput.InfoMessage>{errors.name}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <TextInput
              variant={errors.days && touched.days ? "error" : "edge-100"}
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Days</TextInput.Label>
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
              variant={errors.price && touched.price ? "error" : "edge-100"}
              className="w-full mb-[1.3rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Price</TextInput.Label>
                <TextInput.Field
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter price"
                  type="number"
                  min={1}
                ></TextInput.Field>
                <TextInput.Icon position={"right"}>dzd/km</TextInput.Icon>
              </TextInput.Main>
              {errors.price && touched.price ? (
                <TextInput.InfoMessage>{errors.price}</TextInput.InfoMessage>
              ) : null}
            </TextInput>

            {editData ? (
              <Alert variant={"success"} className="mb-[0.5rem]">
                <Alert.Icon position={"left"}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>Subscription updated</Alert.Content>
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
                  <Button.Content>Edit highway</Button.Content>
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
