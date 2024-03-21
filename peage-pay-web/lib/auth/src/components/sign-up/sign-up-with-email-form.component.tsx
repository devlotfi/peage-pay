import { useMutation } from "@apollo/client";
import {
  faAt,
  faExclamationCircle,
  faKey,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Button, LoaderDots, TextInput } from "@peage-pay-web/ui";
import { useFormik } from "formik";
import * as yup from "yup";
import { SIGN_UP_WITH_EMAIL } from "../../graphql/mutations";
import { AuthErrors } from "../../__generated__/graphql";
import { useRef } from "react";
import VerifyEmailModal from "../verify-email-modal.component";

const signUpWithEmailValidationSchema = yup.object({
  firstName: yup.string().max(50).required(),
  lastName: yup.string().max(50).required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).max(512).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});

interface SignUpWithEmailValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: SignUpWithEmailValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpWithEmailForm = (): JSX.Element => {
  const [signInWithEmail, { loading, error }] = useMutation(
    SIGN_UP_WITH_EMAIL,
    {
      onCompleted() {
        verifyEmailModalRef.current?.showModal();
      },
      onError(error) {
        switch (error.message) {
          case AuthErrors.VerificationRequestPending:
            verifyEmailModalRef.current?.showModal();
            break;
        }
      },
    }
  );
  const verifyEmailModalRef = useRef<HTMLDialogElement>(null);

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      validationSchema: signUpWithEmailValidationSchema,
      initialValues,
      onSubmit(values) {
        signInWithEmail({
          variables: {
            signUpWithEmailInput: {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            },
          },
        });
      },
    });

  return (
    <>
      <VerifyEmailModal
        modalRef={verifyEmailModalRef}
        email={values.email}
      ></VerifyEmailModal>

      <form onSubmit={handleSubmit} className="mt-[2rem]">
        <TextInput
          variant={errors.firstName && touched.firstName ? "error" : "edge-100"}
          className="w-full mb-[1.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>First name</TextInput.Label>
            <TextInput.Icon position={"left"}>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="firstName"
              type="text"
              placeholder="Enter first name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextInput.Field>
          </TextInput.Main>
          {errors.firstName && touched.firstName ? (
            <TextInput.InfoMessage>{errors.firstName}</TextInput.InfoMessage>
          ) : null}
        </TextInput>
        <TextInput
          variant={errors.lastName && touched.lastName ? "error" : "edge-100"}
          className="w-full mb-[1.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>Last name</TextInput.Label>
            <TextInput.Icon position={"left"}>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="lastName"
              type="text"
              placeholder="Enter last name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextInput.Field>
          </TextInput.Main>
          {errors.lastName && touched.lastName ? (
            <TextInput.InfoMessage>{errors.lastName}</TextInput.InfoMessage>
          ) : null}
        </TextInput>
        <TextInput
          variant={errors.email && touched.email ? "error" : "edge-100"}
          className="w-full mb-[1.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>E-mail</TextInput.Label>
            <TextInput.Icon position={"left"}>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="email"
              type="email"
              placeholder="Enter e-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextInput.Field>
          </TextInput.Main>
          {errors.email && touched.email ? (
            <TextInput.InfoMessage>{errors.email}</TextInput.InfoMessage>
          ) : null}
        </TextInput>
        <TextInput
          variant={errors.password && touched.password ? "error" : "edge-100"}
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
              placeholder="Enter password"
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

        {error ? (
          <Alert variant={"error"} className="mb-[0.5rem]">
            <Alert.Icon position={"left"}>
              <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>{`auth:errors.${error.message}`}</Alert.Content>
          </Alert>
        ) : null}

        <Button className="w-full" variant={"primary"} type="submit">
          {loading ? (
            <Button.Content>
              <LoaderDots dotProps={{ variant: "color-content" }}></LoaderDots>
            </Button.Content>
          ) : (
            <>
              <Button.Icon position={"left"}>
                <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Sign up</Button.Content>
            </>
          )}
        </Button>
      </form>
    </>
  );
};

export default SignUpWithEmailForm;
