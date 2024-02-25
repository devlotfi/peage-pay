import { faAt, faKey, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Link, TextInput } from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';

const signInWithEmailValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

interface Values {
  email: string;
  password: string;
}

const initialValues: Values = {
  email: '',
  password: '',
};

const SignInWithEmailForm = (): JSX.Element => {
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      validationSchema: signInWithEmailValidationSchema,
      initialValues,
      onSubmit(values, formikHelpers) {
        return;
      },
    });

  return (
    <form onSubmit={handleSubmit} className="mt-[2rem]">
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
      <TextInput
        variant={errors.password && touched.password ? 'error' : 'edge-100'}
        className="w-full mb-[1.5rem]"
      >
        <TextInput.Main>
          <TextInput.Label>Password</TextInput.Label>
          <TextInput.Icon position={'left'}>
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
      <Link className="mb-[1rem]">Reset password</Link>

      <Button className="w-full" variant={'primary'}>
        <Button.Icon position={'left'}>
          <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
        </Button.Icon>
        <Button.Content>Sign in</Button.Content>
      </Button>
    </form>
  );
};

export default SignInWithEmailForm;
