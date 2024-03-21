import { useMutation } from "@apollo/client";
import { faCheck, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Heading,
  LoaderDots,
  MinimalNavbar,
  TextInput,
} from "@peage-pay-web/ui";
import { useFormik } from "formik";
import { useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { RESET_PASSWORD } from "../graphql/mutations";
import { AuthErrors } from "../__generated__/graphql";

const resetPasswordValidationSchema = yup.object({
  password: yup.string().min(7).max(512).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
  userId: yup.string().uuid().required(),
  token: yup.string().length(128).required(),
});

const ResetPasswordPage = () => {
  const [params] = useSearchParams();
  const [resetPassword, { loading, data }] = useMutation(RESET_PASSWORD, {
    onCompleted(data, clientOptions) {
      return;
    },
    onError(error, clientOptions) {
      switch (error.message) {
        case AuthErrors.InvalidVerificationToken:
          setFieldError("password", "auth:errors.INVALID_VERIFICATION_TOKEN");
          break;
      }
    },
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldError,
  } = useFormik({
    validationSchema: resetPasswordValidationSchema,
    initialValues: {
      password: "",
      confirmPassword: "",
      userId: params.get("userId"),
      token: params.get("token"),
    },
    onSubmit(values, formikHelpers) {
      if (values.token && values.userId) {
        resetPassword({
          variables: {
            resetPasswordInput: {
              password: values.password,
              userId: values.userId,
              token: values.token,
            },
          },
        });
      }
    },
  });

  return (
    <div className="h-screen w-screen bg-base-200 flex flex-col">
      <MinimalNavbar>
        <MinimalNavbar.LeftContent></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex bg-base-100 border-edge-200 border-[1px] rounded-xl p-[1rem] w-full max-w-[40rem]">
          <form onSubmit={handleSubmit} className="w-full">
            <Heading className="mb-[2rem] text-[20pt]">
              <Heading.Icon position={"left"}>
                <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Reset password</Heading.Text>
            </Heading>

            {data ? (
              <Alert variant={"success"} className="mb-[2rem]">
                <Alert.Icon position={"left"}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>Password reset</Alert.Content>
              </Alert>
            ) : null}

            <TextInput
              variant={
                errors.password && touched.password ? "error" : "edge-100"
              }
              className="w-full mb-[1.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Password</TextInput.Label>
                <TextInput.Icon position={"left"}>
                  <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                </TextInput.Icon>
                <TextInput.Field
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></TextInput.Field>
              </TextInput.Main>
              {errors.password && touched.password ? (
                <TextInput.InfoMessage>{errors.password}</TextInput.InfoMessage>
              ) : null}
            </TextInput>
            <TextInput
              variant={
                errors.confirmPassword && touched.confirmPassword
                  ? "error"
                  : "edge-100"
              }
              className="w-full mb-[1.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>Confirm password</TextInput.Label>
                <TextInput.Icon position={"left"}>
                  <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                </TextInput.Icon>
                <TextInput.Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></TextInput.Field>
              </TextInput.Main>
              {errors.confirmPassword && touched.confirmPassword ? (
                <TextInput.InfoMessage>
                  {errors.confirmPassword}
                </TextInput.InfoMessage>
              ) : null}
            </TextInput>

            {data ? null : (
              <Button className="w-full" variant={"primary"} type="submit">
                {loading ? (
                  <Button.Content>
                    <LoaderDots
                      dotProps={{ variant: "color-content" }}
                    ></LoaderDots>
                  </Button.Content>
                ) : (
                  <>
                    <Button.Icon position={"left"}>
                      <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                    </Button.Icon>
                    <Button.Content>Reset password</Button.Content>
                  </>
                )}
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
