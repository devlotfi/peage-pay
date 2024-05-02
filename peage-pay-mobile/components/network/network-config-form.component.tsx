import { StyleSheet, View } from 'react-native';
import UIHeading from '../../elements/ui-heading/ui-heading.component';
import { faAt, faSignIn } from '@fortawesome/free-solid-svg-icons';
import UITextInput from '../../elements/ui-text-input/ui-text-input.component';
import UIButton from '../../elements/ui-button/ui-button.component';
import * as yup from 'yup';
import { useFormik } from 'formik';
import * as SecureStore from 'expo-secure-store';
import { SecureStoreKeys } from '../../constants/secure-store-keys';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';

const networkConfigValidationSchema = yup.object({
  serverUrl: yup.string().required(),
  wsServerUrl: yup.string().required(),
});

interface networkConfig {
  serverUrl: string;
  wsServerUrl: string;
}

const initialValues: networkConfig = {
  serverUrl: '',
  wsServerUrl: '',
};

const NetworkConfigForm = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      validationSchema: networkConfigValidationSchema,
      initialValues,
      onSubmit(values) {
        SecureStore.setItem(SecureStoreKeys.SERVER_URL, values.serverUrl);
        SecureStore.setItem(SecureStoreKeys.WS_SERVER_URL, values.wsServerUrl);
      },
    });

  return (
    <View style={styles.page}>
      <UIHeading size={25}>
        <UIHeading.Icon position="left" icon={faSignIn}></UIHeading.Icon>
        <UIHeading.Text>Network Config</UIHeading.Text>
      </UIHeading>

      <UITextInput
        variant={errors.serverUrl && touched.serverUrl ? 'error' : 'edge-100'}
        style={styles.input}
      >
        <UITextInput.Main>
          <UITextInput.Label>Server Url</UITextInput.Label>
          <UITextInput.IconContainer position="left">
            <UITextInput.Icon icon={faAt}></UITextInput.Icon>
          </UITextInput.IconContainer>
          <UITextInput.Field
            placeholder={'Server Url'}
            autoCapitalize="none"
            value={values.serverUrl}
            onChangeText={handleChange('serverUrl')}
            onBlur={handleBlur('serverUrl')}
          ></UITextInput.Field>
        </UITextInput.Main>
        {errors.serverUrl && touched.serverUrl ? (
          <UITextInput.InfoMessage>{errors.serverUrl}</UITextInput.InfoMessage>
        ) : undefined}
      </UITextInput>
      <UITextInput
        variant={
          errors.wsServerUrl && touched.wsServerUrl ? 'error' : 'edge-100'
        }
        style={styles.input}
      >
        <UITextInput.Main>
          <UITextInput.Label>Server Url</UITextInput.Label>
          <UITextInput.IconContainer position="left">
            <UITextInput.Icon icon={faAt}></UITextInput.Icon>
          </UITextInput.IconContainer>
          <UITextInput.Field
            placeholder={'Server Url'}
            autoCapitalize="none"
            value={values.wsServerUrl}
            onChangeText={handleChange('wsServerUrl')}
            onBlur={handleBlur('wsServerUrl')}
          ></UITextInput.Field>
        </UITextInput.Main>
        {errors.wsServerUrl && touched.wsServerUrl ? (
          <UITextInput.InfoMessage>
            {errors.wsServerUrl}
          </UITextInput.InfoMessage>
        ) : undefined}
      </UITextInput>

      <UIButton
        style={styles.button}
        onPress={() => handleSubmit()}
        variant="primary"
        iconPosition="right"
      >
        <UIButton.Content>Save config</UIButton.Content>
        <UIButton.Icon icon={faSignIn}></UIButton.Icon>
      </UIButton>
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      padding: 10,
      backgroundColor: theme['base-100'],
    },
    input: {
      width: '100%',
      marginTop: 20,
    },
    alert: {
      marginTop: 10,
    },
    button: {
      marginTop: 20,
    },
  });

export default NetworkConfigForm;
