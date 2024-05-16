import { useMutation } from '@apollo/client';
import {
  faExclamationCircle,
  faKey,
  faRoadBarrier,
  faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Alert,
  AutomaticGatePicker,
  Button,
  LoaderDots,
  TextInput,
  TollPicker,
} from '@peage-pay-web/ui';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useContext, useRef, useState } from 'react';
import { AutomaticGateAuthContext } from '../context/automatic-gate-auth.context';
import { SIGN_IN_AUTOMATIC_GATE } from '../graphql/mutations';
import { AutomaticGateType, TollType } from '../__generated__/graphql';
import { AutomaticGateAuthUtils } from '../utils';
import { useTranslation } from 'react-i18next';

const signInAutomaticGateValidationSchema = yup.object({
  tollId: yup.string().uuid().required(),
  automaticGateId: yup.string().uuid().required(),
  password: yup.string().required(),
});

interface SignInAutomaticGateValues {
  tollId: string;
  automaticGateId: string;
  password: string;
}

const initialValues: SignInAutomaticGateValues = {
  tollId: '',
  automaticGateId: '', //
  password: '',
};

const SignInAutomaticGateForm = (): JSX.Element => {
  const { t } = useTranslation();
  const { setAutomaticGateAuthData } = useContext(AutomaticGateAuthContext);
  const [signInWithEmail, { loading, error }] = useMutation(
    SIGN_IN_AUTOMATIC_GATE,
    {
      onCompleted(data) {
        AutomaticGateAuthUtils.setRefreshToken(
          data.signInAutomaticGate.refreshToken,
        );
        AutomaticGateAuthUtils.setAccessToken(
          data.signInAutomaticGate.accessToken,
        );
        setAutomaticGateAuthData({
          // @ts-ignore
          automaticGate: data.signInAutomaticGate.automaticGate,
        });
      },
    },
  );

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema: signInAutomaticGateValidationSchema,
    initialValues,
    onSubmit(values) {
      signInWithEmail({
        variables: {
          signInAutomaticGateInput: {
            tollId: values.tollId,
            automaticGateId: values.automaticGateId,
            password: values.password,
          },
        },
      });
    },
  });

  const tollPickerModalRef = useRef<HTMLDialogElement>(null);
  const automaticGatePickerModalRef = useRef<HTMLDialogElement>(null);

  const [selectedToll, setSelectedToll] = useState<TollType | null>(null);
  const [selectedAutomaticGate, setSelectedAutomaticGate] =
    useState<AutomaticGateType | null>(null);

  const handleTollSeleted = (toll: TollType | null) => {
    if (toll) {
      setFieldValue('tollId', toll.id);
      setSelectedToll(toll);
    } else {
      setFieldValue('tollId', '');
      setSelectedToll(null);
    }
  };

  const handleAutomaticGateSeleted = (
    automaticGate: AutomaticGateType | null,
  ) => {
    if (automaticGate) {
      setFieldValue('automaticGateId', automaticGate.id);
      setSelectedAutomaticGate(automaticGate);
    } else {
      setFieldValue('automaticGateId', '');
      setSelectedAutomaticGate(null);
    }
  };

  return (
    <>
      <TollPicker
        onChange={handleTollSeleted as any}
        modalRef={tollPickerModalRef}
        value={selectedToll}
      ></TollPicker>
      {selectedToll ? (
        <AutomaticGatePicker
          toll={selectedToll}
          onChange={(automaticGate) =>
            handleAutomaticGateSeleted(automaticGate as AutomaticGateType)
          }
          modalRef={automaticGatePickerModalRef}
          value={selectedAutomaticGate}
        ></AutomaticGatePicker>
      ) : undefined}

      <form onSubmit={handleSubmit} className="mt-[2rem]">
        <TextInput
          variant={errors.tollId && touched.tollId ? 'error' : 'edge-100'}
          className="w-full mb-[0.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('TOLL')}</TextInput.Label>
            <div className="flex items-center ml-[1rem]">
              {selectedToll?.name}
              {selectedToll?.id}
            </div>
          </TextInput.Main>
          {errors.tollId && touched.tollId ? (
            <TextInput.InfoMessage>{errors.tollId}</TextInput.InfoMessage>
          ) : null}
        </TextInput>
        <Button
          className="w-full mb-[1.5rem]"
          variant={'base-200'}
          type="button"
          onClick={() => tollPickerModalRef.current?.showModal()}
        >
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faRoadBarrier}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>{t('PICK_TOLL')}</Button.Content>
        </Button>

        <TextInput
          variant={
            errors.automaticGateId && touched.automaticGateId
              ? 'error'
              : 'edge-100'
          }
          className="w-full mb-[0.5rem]"
        >
          <TextInput.Main>
            <TextInput.Label>{t('GATE')}</TextInput.Label>
            <div className="flex items-center ml-[1rem]">
              {selectedAutomaticGate?.name}
              {selectedAutomaticGate?.id}
            </div>
          </TextInput.Main>
          {errors.automaticGateId && touched.automaticGateId ? (
            <TextInput.InfoMessage>
              {errors.automaticGateId}
            </TextInput.InfoMessage>
          ) : null}
        </TextInput>
        <Button
          className="w-full mb-[1.5rem]"
          variant={'base-200'}
          type="button"
          onClick={() => automaticGatePickerModalRef.current?.showModal()}
        >
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faRoadBarrier}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>{t('PICK_AUTOMATIC_GATE')}</Button.Content>
        </Button>

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

        {error ? (
          <Alert variant={'error'} className="mb-[0.5rem]">
            <Alert.Icon position={'left'}>
              <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            </Alert.Icon>
            <Alert.Content>{`auth:errors.${error.message}`}</Alert.Content>
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
                <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>{t('SIGN_IN_AUTOMATIC_GATE')}</Button.Content>
            </>
          )}
        </Button>
      </form>
    </>
  );
};

export default SignInAutomaticGateForm;
