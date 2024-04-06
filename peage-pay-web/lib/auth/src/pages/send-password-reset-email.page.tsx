import { useMutation } from '@apollo/client';
import {
  faAt,
  faCheck,
  faEnvelope,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Alert,
  Button,
  Heading,
  LoaderDots,
  MinimalNavbar,
  TextInput,
} from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { SEND_PASSWORD_RESET_EMAIL } from '../graphql/mutations';
import { cva, VariantProps } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { Utils } from '@peage-pay-web/utils';

const sendPasswordResetEmailValidationSchema = yup.object({
  email: yup.string().email().required(),
});

interface SendPasswordResetEmailValues {
  email: string;
}

const initialValues: SendPasswordResetEmailValues = {
  email: '',
};

const sendPasswordResetEmailVariants = cva(
  'h-screen w-screen flex flex-col bg-base-200',
  {
    variants: {
      usage: {
        desktop: 'min-h-[cacl(100vh-2.5rem)] flex-1 overflow-y-auto',
      },
    },
  },
);

interface SendPasswordResetEmailProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sendPasswordResetEmailVariants> {}

const SendPasswordResetEmailPage = ({
  className,
  usage,
  ...props
}: SendPasswordResetEmailProps): JSX.Element => {
  const [sendPasswordResetEmail, { loading, data, error }] = useMutation(
    SEND_PASSWORD_RESET_EMAIL,
  );

  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    useFormik({
      validationSchema: sendPasswordResetEmailValidationSchema,
      initialValues,
      onSubmit(values) {
        sendPasswordResetEmail({
          variables: {
            sendPasswordResetEmailInput: {
              email: values.email,
            },
          },
        });
      },
    });

  return (
    <div
      className={Utils.cn(sendPasswordResetEmailVariants({ className, usage }))}
      {...props}
    >
      <MinimalNavbar>
        <MinimalNavbar.LeftContent></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <div className="flex flex-col lg:justify-center items-center h-full">
        <div className="flex flex-col bg-base-100 lg:border-edge-200 lg:border-[1px] h-full lg:h-auto lg:rounded-xl w-full lg:max-w-[40rem] p-[1rem]">
          <form onSubmit={handleSubmit}>
            <Heading className="text-[20pt] mb-[2rem]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Send password reset email</Heading.Text>
            </Heading>

            {error ? (
              <Alert variant={'error'} className="mb-[0.5rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>{`auth:errors.${error.message}`}</Alert.Content>
              </Alert>
            ) : null}

            {data ? (
              <Alert variant={'success'} className="mb-[2rem]">
                <Alert.Icon position={'left'}>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </Alert.Icon>
                <Alert.Content>Password reset email sent</Alert.Content>
              </Alert>
            ) : null}

            <TextInput
              variant={errors.email && touched.email ? 'error' : 'edge-100'}
              className="w-full mb-[1.5rem]"
            >
              <TextInput.Main>
                <TextInput.Label>E-mail</TextInput.Label>
                <TextInput.Icon position={'left'}>
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

            {data ? null : (
              <Button className="w-full" variant={'primary'} type="submit">
                {loading ? (
                  <Button.Content>
                    <LoaderDots
                      dotProps={{ variant: 'color-content' }}
                    ></LoaderDots>
                  </Button.Content>
                ) : (
                  <>
                    <Button.Icon position={'left'}>
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </Button.Icon>
                    <Button.Content>Send e-mail</Button.Content>
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

export default SendPasswordResetEmailPage;
