import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import UIHeading from '../../elements/ui-heading/ui-heading.component';
import {
  faCheck,
  faInfoCircle,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import UITextInput from '../../elements/ui-text-input/ui-text-input.component';
import UIButton from '../../elements/ui-button/ui-button.component';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { DEFINE_PIN } from '../../graphql/mutations';
import UIAlert from '../../elements/ui-alert/ui-alert.component';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { UserAuthUtils } from '../../utils/utils';

const definePinValidationSchema = yup.object({
  digit1: yup.number().min(0).max(9).required(),
  digit2: yup.number().min(0).max(9).required(),
  digit3: yup.number().min(0).max(9).required(),
  digit4: yup.number().min(0).max(9).required(),
  digit5: yup.number().min(0).max(9).required(),
});

interface DefinePinValues {
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
  digit5: string;
}

const initialValues: DefinePinValues = {
  digit1: '',
  digit2: '',
  digit3: '',
  digit4: '',
  digit5: '',
};

const DefinePinForm = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles();
  const { t } = useTranslation();

  const [definePin, { loading, error, data }] = useMutation(DEFINE_PIN);
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      validationSchema: definePinValidationSchema,
      initialValues,
      onSubmit(values) {
        const pin = `${values.digit1}${values.digit2}${values.digit3}${values.digit4}${values.digit5}`;
        UserAuthUtils.setPin(pin);
        definePin({
          variables: {
            definePinInput: {
              pin: pin,
            },
          },
        });
      },
    });

  const digit1Ref = useRef<TextInput>(null);
  const digit2Ref = useRef<TextInput>(null);
  const digit3Ref = useRef<TextInput>(null);
  const digit4Ref = useRef<TextInput>(null);
  const digit5Ref = useRef<TextInput>(null);

  return (
    <ScrollView>
      <UIHeading style={{ marginLeft: 5, marginVertical: 20 }} size={25}>
        <UIHeading.Icon position="left" icon={faKey}></UIHeading.Icon>
        <UIHeading.Text>Define Pin</UIHeading.Text>
      </UIHeading>

      <View style={styles.inputContainer}>
        <UITextInput
          variant={errors.digit1 && touched.digit1 ? 'error' : 'edge-100'}
          style={styles.input}
        >
          <UITextInput.Main>
            <UITextInput.Field
              style={styles.inputField as ViewStyle}
              fieldRef={digit1Ref}
              keyboardType="decimal-pad"
              maxLength={1}
              autoCapitalize="none"
              value={`${values.digit1}`}
              onChangeText={(e) => {
                if (e !== '') {
                  digit2Ref.current?.focus();
                }
                handleChange('digit1')(e);
              }}
              onBlur={handleBlur('digit1')}
            ></UITextInput.Field>
          </UITextInput.Main>
        </UITextInput>
        <UITextInput
          variant={errors.digit2 && touched.digit2 ? 'error' : 'edge-100'}
          style={styles.input}
        >
          <UITextInput.Main>
            <UITextInput.Field
              style={styles.inputField as ViewStyle}
              fieldRef={digit2Ref}
              keyboardType="decimal-pad"
              maxLength={1}
              autoCapitalize="none"
              value={`${values.digit2}`}
              onChangeText={(e) => {
                if (e !== '') {
                  digit3Ref.current?.focus();
                } else {
                  digit1Ref.current?.focus();
                }
                handleChange('digit2')(e);
              }}
              onBlur={handleBlur('digit2')}
            ></UITextInput.Field>
          </UITextInput.Main>
        </UITextInput>
        <UITextInput
          variant={errors.digit3 && touched.digit3 ? 'error' : 'edge-100'}
          style={styles.input}
        >
          <UITextInput.Main>
            <UITextInput.Field
              style={styles.inputField as ViewStyle}
              fieldRef={digit3Ref}
              keyboardType="decimal-pad"
              maxLength={1}
              autoCapitalize="none"
              value={`${values.digit3}`}
              onChangeText={(e) => {
                if (e !== '') {
                  digit4Ref.current?.focus();
                } else {
                  digit2Ref.current?.focus();
                }
                handleChange('digit3')(e);
              }}
              onBlur={handleBlur('digit3')}
            ></UITextInput.Field>
          </UITextInput.Main>
        </UITextInput>
        <UITextInput
          variant={errors.digit4 && touched.digit4 ? 'error' : 'edge-100'}
          style={styles.input}
        >
          <UITextInput.Main>
            <UITextInput.Field
              style={styles.inputField as ViewStyle}
              fieldRef={digit4Ref}
              keyboardType="decimal-pad"
              maxLength={1}
              autoCapitalize="none"
              value={`${values.digit4}`}
              onChangeText={(e) => {
                if (e !== '') {
                  digit5Ref.current?.focus();
                } else {
                  digit3Ref.current?.focus();
                }
                handleChange('digit4')(e);
              }}
              onBlur={handleBlur('digit4')}
            ></UITextInput.Field>
          </UITextInput.Main>
        </UITextInput>
        <UITextInput
          variant={errors.digit5 && touched.digit5 ? 'error' : 'edge-100'}
          style={styles.input}
        >
          <UITextInput.Main>
            <UITextInput.Field
              style={styles.inputField as ViewStyle}
              fieldRef={digit5Ref}
              keyboardType="decimal-pad"
              maxLength={1}
              autoCapitalize="none"
              value={`${values.digit5}`}
              onChangeText={(e) => {
                if (e === '') {
                  digit4Ref.current?.focus();
                }
                handleChange('digit5')(e);
              }}
              onBlur={handleBlur('digit5')}
            ></UITextInput.Field>
          </UITextInput.Main>
        </UITextInput>
      </View>

      {data ? (
        <UIAlert variant={'success'} style={styles.alert}>
          <UIAlert.Icon icon={faCheck} position={'left'}></UIAlert.Icon>
          <UIAlert.Content>{t('OPERATION_SUCCESSFUL')}</UIAlert.Content>
        </UIAlert>
      ) : null}
      {error ? (
        <UIAlert style={styles.alert} variant="error">
          <UIAlert.Icon position="left" icon={faInfoCircle}></UIAlert.Icon>
          <UIAlert.Content>{t(error.message)}</UIAlert.Content>
        </UIAlert>
      ) : undefined}
      <UIButton
        style={styles.button}
        onPress={() => handleSubmit()}
        variant="primary"
        iconPosition="right"
      >
        {loading ? (
          <ActivityIndicator
            size={30}
            color={theme['color-content']}
          ></ActivityIndicator>
        ) : (
          <>
            <UIButton.Content>Define pin</UIButton.Content>
            <UIButton.Icon icon={faKey}></UIButton.Icon>
          </>
        )}
      </UIButton>
    </ScrollView>
  );
};

const makeStyles = () =>
  StyleSheet.create({
    image: {
      height: 300,
      marginTop: 20,
    },
    input: {
      flex: 1,
      marginHorizontal: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      width: '100%',
    },
    inputField: {
      textAlign: 'center',
      fontSize: 23,
    },
    alert: {
      marginTop: 10,
    },
    button: {
      marginTop: 20,
    },
  });

export default DefinePinForm;
