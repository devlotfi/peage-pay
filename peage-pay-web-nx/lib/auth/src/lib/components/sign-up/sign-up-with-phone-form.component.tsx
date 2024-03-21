import { faPhone, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dz } from '@peage-pay-web/assets';
import { Button, TextInput } from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';

const signInWithEmailValidationSchema = yup.object({
  phoneNumber: yup
    .string()
    .matches(/^(00213|\+213|0)(5|6|7)[0-9]{8}$/)
    .required(),
});

interface Values {
  phoneNumber: string;
}

const initialValues: Values = {
  phoneNumber: '',
};

const SignInWithPhoneForm = (): JSX.Element => {
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
        variant={
          errors.phoneNumber && touched.phoneNumber ? 'error' : 'edge-100'
        }
        className="w-full mb-[1.5rem]"
      >
        <TextInput.Main>
          <TextInput.Label>Phone number</TextInput.Label>
          <TextInput.Icon position={'left'}>
            <div className="flex items-center">
              <img className="h-[1.7rem] w-[1.7rem]" src={Dz} alt="" />
              <div className="flex text-[10pt] mx-[0.5rem]">+213</div>
            </div>
          </TextInput.Icon>
          <TextInput.Field
            name="phoneNumber"
            type="phoneNumber"
            placeholder="Enter phone number"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextInput.Field>
          <TextInput.Icon position={'right'}>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          </TextInput.Icon>
        </TextInput.Main>
        {errors.phoneNumber && touched.phoneNumber ? (
          <TextInput.InfoMessage>{errors.phoneNumber}</TextInput.InfoMessage>
        ) : null}
      </TextInput>

      <Button className="w-full" variant={'primary'}>
        <Button.Icon position={'left'}>
          <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
        </Button.Icon>
        <Button.Content>Sign in</Button.Content>
      </Button>
    </form>
  );
};

export default SignInWithPhoneForm;
