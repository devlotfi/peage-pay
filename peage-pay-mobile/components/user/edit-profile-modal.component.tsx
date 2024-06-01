import {
  ActivityIndicator,
  Modal,
  ModalProps,
  StyleSheet,
  View,
} from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIButton from '../../elements/ui-button/ui-button.component';
import {
  faCheck,
  faInfoCircle,
  faPen,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useFormik } from 'formik';
import UIHeading from '../../elements/ui-heading/ui-heading.component';
import UITextInput from '../../elements/ui-text-input/ui-text-input.component';
import { useMutation } from '@apollo/client';
import { EDIT_PROFILE } from '../../graphql/mutations';
import UIAlert from '../../elements/ui-alert/ui-alert.component';
import { SIGN_IN_WITH_REFRESH_TOKEN_INITIAL } from '../../graphql/queries';

const editProfileValidationSchema = yup.object({
  firstName: yup.string().min(2).max(256).required(),
  lastName: yup.string().min(2).max(256).required(),
});

interface EditProfileValues {
  firstName: string;
  lastName: string;
}

const initialValues: EditProfileValues = {
  firstName: '',
  lastName: '',
};

interface EditProfileModalProps extends ModalProps {
  onClose: () => void;
}

const EditProfileModal = ({
  onClose,
  ...props
}: EditProfileModalProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  const [editProfile, { loading, error, data }] = useMutation(EDIT_PROFILE, {
    refetchQueries: [SIGN_IN_WITH_REFRESH_TOKEN_INITIAL],
    awaitRefetchQueries: true,
  });

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      validationSchema: editProfileValidationSchema,
      initialValues,
      onSubmit(values) {
        console.log(values);
        editProfile({
          variables: {
            editProfileInput: {
              firstName: values.firstName,
              lastName: values.lastName,
            },
          },
        });
      },
    });

  return (
    <Modal {...props}>
      <View style={styles.container}>
        <View style={styles.window}>
          <UIHeading size={25}>
            <UIHeading.Icon position="left" icon={faPen}></UIHeading.Icon>
            <UIHeading.Text>{t('EDIT_PROFILE')}</UIHeading.Text>
          </UIHeading>

          <UITextInput
            variant={
              errors.firstName && touched.firstName ? 'error' : 'edge-100'
            }
            style={styles.input}
          >
            <UITextInput.Main>
              <UITextInput.Label>{t('FIRST_NAME')}</UITextInput.Label>
              <UITextInput.IconContainer position="left">
                <UITextInput.Icon icon={faUser}></UITextInput.Icon>
              </UITextInput.IconContainer>
              <UITextInput.Field
                placeholder={t('FIRST_NAME')}
                autoCapitalize="none"
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
              ></UITextInput.Field>
            </UITextInput.Main>
            {errors.firstName && touched.firstName ? (
              <UITextInput.InfoMessage>
                {errors.firstName}
              </UITextInput.InfoMessage>
            ) : undefined}
          </UITextInput>
          <UITextInput
            variant={errors.lastName && touched.lastName ? 'error' : 'edge-100'}
            style={styles.input}
          >
            <UITextInput.Main>
              <UITextInput.Label>{t('LAST_NAME')}</UITextInput.Label>
              <UITextInput.IconContainer position="left">
                <UITextInput.Icon icon={faUser}></UITextInput.Icon>
              </UITextInput.IconContainer>
              <UITextInput.Field
                placeholder={t('LAST_NAME')}
                autoCapitalize="none"
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
              ></UITextInput.Field>
            </UITextInput.Main>
            {errors.lastName && touched.lastName ? (
              <UITextInput.InfoMessage>
                {errors.lastName}
              </UITextInput.InfoMessage>
            ) : undefined}
          </UITextInput>

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
                <UIButton.Content>{t('EDIT_PROFILE')}</UIButton.Content>
                <UIButton.Icon icon={faPen}></UIButton.Icon>
              </>
            )}
          </UIButton>
          <UIButton
            variant="base-200"
            iconPosition="right"
            onPress={() => onClose()}
          >
            <UIButton.Content>{t('CLOSE')}</UIButton.Content>
            <UIButton.Icon icon={faTimes}></UIButton.Icon>
          </UIButton>
        </View>
      </View>
    </Modal>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#00000070',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 50,
    },
    alert: {
      marginTop: 10,
      width: '100%',
    },
    button: {
      marginVertical: 20,
      width: '100%',
    },
    input: {
      width: '100%',
      marginTop: 20,
    },
    window: {
      backgroundColor: theme['base-100'],
      borderColor: theme['edge-200'],
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      width: '90%',
    },
    image: {
      height: 150,
      width: 150,
      marginTop: 20,
    },
    infoText: {
      fontSize: 20,
      maxWidth: '70%',
      textAlign: 'center',
      marginVertical: 10,
    },
  });

export default EditProfileModal;
