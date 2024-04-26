import { ActivityIndicator, StyleSheet, View } from 'react-native';
import UIHeading from '../elements/ui-heading/ui-heading.component';
import {
  faCheck,
  faInfoCircle,
  faSignIn,
  faTicket,
} from '@fortawesome/free-solid-svg-icons';
import UITextInput from '../elements/ui-text-input/ui-text-input.component';
import UIButton from '../elements/ui-button/ui-button.component';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { REDEEM_CODE } from '../graphql/mutations';
import UIAlert from '../elements/ui-alert/ui-alert.component';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { useTranslation } from 'react-i18next';
import { USER_INFO } from '../graphql/queries';
import { AppTheme } from '../theme/types/app-theme.type';
import { Image } from 'expo-image';

const redeemCodeValidationSchema = yup.object({
  part1: yup.string().length(4).required(),
  part2: yup.string().length(4).required(),
  part3: yup.string().length(4).required(),
  part4: yup.string().length(4).required(),
});

interface RedeemCodeValues {
  part1: string;
  part2: string;
  part3: string;
  part4: string;
}

const initialValues: RedeemCodeValues = {
  part1: '',
  part2: '',
  part3: '',
  part4: '',
};

const RedeemCodeForm = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { t } = useTranslation();

  const [redeemCode, { loading, error, data }] = useMutation(REDEEM_CODE, {
    refetchQueries: [USER_INFO],
    awaitRefetchQueries: true,
  });
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      validationSchema: redeemCodeValidationSchema,
      initialValues,
      onSubmit(values) {
        redeemCode({
          variables: {
            redeemCodeInput: {
              code: `${values.part1}${values.part2}${values.part3}${values.part4}`,
            },
          },
        });
      },
    });

  return (
    <>
      <UIHeading style={{ marginLeft: 5, marginVertical: 20 }} size={25}>
        <UIHeading.Icon position="left" icon={faTicket}></UIHeading.Icon>
        <UIHeading.Text>{t('REDEEM_CODE')}</UIHeading.Text>
      </UIHeading>

      <View style={styles.inputContainer}>
        <UITextInput
          variant={errors.part1 && touched.part1 ? 'error' : 'edge-100'}
          style={styles.input}
        >
          <UITextInput.Main style={styles.inputMain}>
            <UITextInput.Field
              autoCapitalize="none"
              placeholder="_ _ _ _"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={styles.inputField as any}
              maxLength={4}
              value={values.part1}
              onChangeText={handleChange('part1')}
              onBlur={handleBlur('part1')}
            ></UITextInput.Field>
          </UITextInput.Main>
        </UITextInput>
        <View style={styles.separator}></View>
        <UITextInput
          variant={errors.part2 && touched.part2 ? 'error' : 'edge-100'}
          style={styles.input}
        >
          <UITextInput.Main style={styles.inputMain}>
            <UITextInput.Field
              autoCapitalize="none"
              placeholder="_ _ _ _"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={styles.inputField as any}
              maxLength={4}
              value={values.part2}
              onChangeText={handleChange('part2')}
              onBlur={handleBlur('part2')}
            ></UITextInput.Field>
          </UITextInput.Main>
        </UITextInput>
        <View style={styles.separator}></View>
        <UITextInput
          variant={errors.part3 && touched.part3 ? 'error' : 'edge-100'}
          style={styles.input}
        >
          <UITextInput.Main style={styles.inputMain}>
            <UITextInput.Field
              autoCapitalize="none"
              placeholder="_ _ _ _"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={styles.inputField as any}
              maxLength={4}
              value={values.part3}
              onChangeText={handleChange('part3')}
              onBlur={handleBlur('part3')}
            ></UITextInput.Field>
          </UITextInput.Main>
        </UITextInput>
        <View style={styles.separator}></View>
        <UITextInput
          variant={errors.part4 && touched.part4 ? 'error' : 'edge-100'}
          style={styles.input}
        >
          <UITextInput.Main style={styles.inputMain}>
            <UITextInput.Field
              autoCapitalize="none"
              placeholder="_ _ _ _"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={styles.inputField as any}
              maxLength={4}
              value={values.part4}
              onChangeText={handleChange('part4')}
              onBlur={handleBlur('part4')}
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
            <UIButton.Content>{t('REDEEM_CODE')}</UIButton.Content>
            <UIButton.Icon icon={faSignIn}></UIButton.Icon>
          </>
        )}
      </UIButton>

      <Image
        source={require('../assets/img/redeem-cards.png')}
        style={styles.image}
        contentFit="contain"
      ></Image>
    </>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    input: {
      flex: 1,
    },
    inputMain: {},
    image: {
      height: 250,
      marginTop: 30,
    },
    separator: {
      height: 3,
      minWidth: 10,
      backgroundColor: theme['base-content'],
      borderRadius: 100,
      marginHorizontal: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      maxWidth: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    inputField: {
      textAlign: 'center',
    },
    alert: {
      marginTop: 10,
    },
    button: {
      marginTop: 20,
    },
  });

export default RedeemCodeForm;
