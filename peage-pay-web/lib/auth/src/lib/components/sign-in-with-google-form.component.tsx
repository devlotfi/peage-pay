import { Google } from '@peage-pay-web/assets';
import { Button } from '@peage-pay-web/ui';
import { useGoogleLogin } from '@react-oauth/google';
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

const SignInWithGoogleForm = (): JSX.Element => {
  const { handleSubmit } = useFormik({
    validationSchema: signInWithEmailValidationSchema,
    initialValues,
    onSubmit(values, formikHelpers) {
      return;
    },
  });

  const googleLogin = useGoogleLogin({
    onSuccess(tokenResponse) {
      console.log(tokenResponse);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="mt-[2rem]">
      <Button
        onClick={() => googleLogin()}
        className="w-full"
        variant={'base-200'}
      >
        <Button.Icon position={'left'}>
          <img src={Google} alt="" />
        </Button.Icon>
        <Button.Content>Sign in with google</Button.Content>
      </Button>
    </form>
  );
};

export default SignInWithGoogleForm;
