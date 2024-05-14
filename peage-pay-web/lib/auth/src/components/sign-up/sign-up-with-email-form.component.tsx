import { useMutation } from '@apollo/client';
import {
  faAt,
  faExclamationCircle,
  faFilePen,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Button, LoaderDots, TextInput } from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { SIGN_UP_WITH_EMAIL } from '../../graphql/mutations';
import { AuthErrors } from '../../__generated__/graphql';
import { useRef } from 'react';
import VerifyEmailModal from '../verify-email-modal.component';
import { useTranslation } from 'react-i18next';

const signUpWithEmailValidationSchema = yup.object({
  firstName: yup.string().max(50).required(),
  lastName: yup.string().max(50).required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).max(512).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
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
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpWithEmailForm = (): JSX.Element => {
  const { t } = useTranslation();
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
    },
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
          variant={errors.firstName && touched.firstName ? 'error' : 'edge-100'}
          className="w-full mb-[1.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('FIRST_NAME')}</TextInput.Label>
            <TextInput.Icon position={'left'}>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="firstName"
              type="text"
              placeholder={t('ENTER_FIRST_NAME')}
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
          variant={errors.lastName && touched.lastName ? 'error' : 'edge-100'}
          className="w-full mb-[1.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('LAST_NAME')}</TextInput.Label>
            <TextInput.Icon position={'left'}>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="lastName"
              type="text"
              placeholder={t('ENTER_LAST_NAME')}
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
          variant={errors.email && touched.email ? 'error' : 'edge-100'}
          className="w-full mb-[1.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('EMAIL')}</TextInput.Label>
            <TextInput.Icon position={'left'}>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="email"
              type="email"
              placeholder={t('ENTER_EMAIL')}
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
          variant={errors.password && touched.password ? 'error' : 'edge-100'}
          className="w-full mb-[1.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('PASSWORD')}</TextInput.Label>
            <TextInput.Icon position={'left'}>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="password"
              type="password"
              placeholder={t('ENTER_PASSWORD')}
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
              ? 'error'
              : 'edge-100'
          }
          className="w-full mb-[1.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('CONFIRM_PASSWORD')}</TextInput.Label>
            <TextInput.Icon position={'left'}>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="confirmPassword"
              type="password"
              placeholder={t('ENTER_PASSWORD')}
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
          <Alert variant={'error'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>{`${t(error.message)}`}</Alert.Content>
          </Alert>
        ) : null}

        <Button className="w-full" variant={'primary'} type="submit">
          {loading ? (
            <Button.Content>
              <LoaderDots dotProps={{ variant: 'color-content' }}></LoaderDots>
            </Button.Content>
          ) : (
            <>
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>{t('SIGN_UP')}</Button.Content>
            </>
          )}
        </Button>
      </form>
    </>
  );
};

export default SignUpWithEmailForm;
