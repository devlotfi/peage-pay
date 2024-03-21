import { useMutation } from "@apollo/client";
import {
  faAt,
  faExclamationCircle,
  faKey,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  CustomLink,
  LoaderDots,
  TextInput,
} from "@peage-pay-web/ui";
import { useFormik } from "formik";
import * as yup from "yup";
import { SIGN_IN_WITH_EMAIL } from "../../graphql/mutations";
import { AuthErrors, RefreshTokenMode } from "../../__generated__/graphql";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/auth.context";
import VerifyEmailModal from "../verify-email-modal.component";
import { Link } from "react-router-dom";

const signInWithEmailValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

interface SignInWithEmailValues {
  email: string;
  password: string;
}

const initialValues: SignInWithEmailValues = {
  email: "",
  password: "",
};

const SignInWithEmailForm = (): JSX.Element => {
  const { setAuthData, setAccessToken } = useContext(AuthContext);
  const [signInWithEmail, { loading, error }] = useMutation(
    SIGN_IN_WITH_EMAIL,
    {
      onCompleted(data) {
        setAuthData({
          // @ts-ignore
          baseUser: data.signInWithEmail.baseUser,
          userRoles: data.signInWithEmail.roles,
        });
        setAccessToken(data.signInWithEmail.accessToken);
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
      validationSchema: signInWithEmailValidationSchema,
      initialValues,
      onSubmit(values) {
        signInWithEmail({
          variables: {
            signInWithEmailInput: {
              email: values.email,
              password: values.password,
            },
            refreshTokenMode: RefreshTokenMode.Cookie,
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
        <Link to={"/send-password-reset-email"}>
          <CustomLink className="mb-[1rem]">Reset password</CustomLink>
        </Link>

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
              <Button.Content>Sign in</Button.Content>
            </>
          )}
        </Button>
      </form>
    </>
  );
};

export default SignInWithEmailForm;
