import { useMutation } from '@apollo/client';
import { VERIFY_EMAIL } from '../graphql/mutations';
import { Alert, Button, LoaderDots, MinimalNavbar } from '@peage-pay-web/ui';
import { useSearchParams } from 'react-router-dom';
import { MailSent } from '@peage-pay-web/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { AuthErrors } from '../../__generated__/graphql';

const verifyEmailvalidationSchema = yup.object({
  userId: yup.string().uuid().required(),
  token: yup.string().length(128).required(),
});

const VerifyEmailPage = (): JSX.Element => {
  const [params] = useSearchParams();
  const [verifyEmail, { loading, error, data }] = useMutation(VERIFY_EMAIL, {
    onError(error, clientOptions) {
      switch (error.message) {
        case AuthErrors.InvalidVerificationToken:
          setFieldError('password', 'auth:errors.INVALID_VERIFICATION_TOKEN');
          break;
      }
    },
  });

  const { handleSubmit, setFieldError } = useFormik({
    validationSchema: verifyEmailvalidationSchema,
    initialValues: {
      userId: params.get('userId'),
      token: params.get('token'),
    },
    onSubmit(values, formikHelpers) {
      if (values.token && values.userId) {
        verifyEmail({
          variables: {
            verifyEmailInput: {
              userId: values.userId,
              token: values.token,
            },
          },
        });
      }
    },
  });

  return (
    <div className="h-screen w-screen flex flex-col bg-base-200">
      <MinimalNavbar>
        <MinimalNavbar.LeftContent></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <div className="flex h-full flex-col justify-center items-center">
        <div className="flex flex-col rounded-xl border-edge-200 border-[1px] bg-base-100 p-[1rem] w-[90%] lg:w-full max-w-[30rem]">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <img
              className="max-h-[10rem] my-[2rem]"
              src={MailSent}
              alt="mail"
            />

            {data ? (
              <Alert variant={'success'}>
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>Account verified</Alert.Content>
              </Alert>
            ) : null}

            {error ? (
              <Alert variant={'error'}>
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{error.message}</Alert.Content>
              </Alert>
            ) : null}

            <Button className="mt-[0.5rem]" variant={'primary'} type="submit">
              {loading ? (
                <LoaderDots
                  dotProps={{ variant: 'color-content' }}
                ></LoaderDots>
              ) : (
                <>
                  <Button.Icon position={'left'}>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </Button.Icon>
                  <Button.Content>Verify email</Button.Content>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
