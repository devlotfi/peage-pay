import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import UIHeading from '../elements/ui-heading/ui-heading.component';
import {
  faCheck,
  faInfoCircle,
  faMoneyBill,
  faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import UITextInput from '../elements/ui-text-input/ui-text-input.component';
import UIButton from '../elements/ui-button/ui-button.component';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { DEPOSIT_AMOUNT } from '../graphql/mutations';
import UIAlert from '../elements/ui-alert/ui-alert.component';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { useTranslation } from 'react-i18next';
import { USER_INFO } from '../graphql/queries';
import { AppTheme } from '../theme/types/app-theme.type';
import DepositAmountModal from './deposit-amount-modal.component copy';
import UIText from '../elements/ui-text/ui-text.component';
import { Image } from 'expo-image';

const depositAmountValidationSchema = yup.object({
  amount: yup.number().min(200).max(2000).required(),
});

interface DepositAmountValues {
  amount: number;
}

const initialValues: DepositAmountValues = {
  amount: 0,
};

const DepositAmountForm = (): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { t } = useTranslation();

  const [depositAmount, { loading, error, data, reset }] = useMutation(
    DEPOSIT_AMOUNT,
    {
      refetchQueries: [USER_INFO],
      awaitRefetchQueries: true,
      onCompleted(data) {
        console.log(data);
      },
      onError(error) {
        console.log(JSON.stringify(error));
      },
    },
  );
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      validationSchema: depositAmountValidationSchema,
      initialValues,
      onSubmit(values) {
        depositAmount({
          variables: {
            depositAmountInput: {
              amount: +values.amount,
            },
          },
        });
      },
    });

  return (
    <ScrollView>
      {data ? (
        <DepositAmountModal
          animationType="fade"
          transparent={true}
          visible={data !== undefined}
          url={data.depositAmount!}
          onClose={() => reset()}
        ></DepositAmountModal>
      ) : undefined}

      <UIHeading style={{ marginLeft: 5, marginVertical: 20 }} size={25}>
        <UIHeading.Icon position="left" icon={faMoneyBill}></UIHeading.Icon>
        <UIHeading.Text>{t('DEPOSIT')}</UIHeading.Text>
      </UIHeading>

      <UITextInput
        variant={errors.amount && touched.amount ? 'error' : 'edge-100'}
        style={styles.input}
      >
        <UITextInput.Main>
          <UITextInput.Label>{t('AMOUNT')}</UITextInput.Label>
          <UITextInput.IconContainer position="left">
            <UITextInput.Icon icon={faMoneyBill}></UITextInput.Icon>
          </UITextInput.IconContainer>
          <UITextInput.Field
            placeholder={t('AMOUNT')}
            keyboardType="decimal-pad"
            autoCapitalize="none"
            value={`${values.amount}`}
            onChangeText={handleChange('amount')}
            onBlur={handleBlur('amount')}
          ></UITextInput.Field>
          <UITextInput.IconContainer position="right">
            <UIText>DZD</UIText>
          </UITextInput.IconContainer>
        </UITextInput.Main>
        {errors.amount && touched.amount ? (
          <UITextInput.InfoMessage>{errors.amount}</UITextInput.InfoMessage>
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
            <UIButton.Content>{t('DEPOSIT')}</UIButton.Content>
            <UIButton.Icon icon={faSignIn}></UIButton.Icon>
          </>
        )}
      </UIButton>

      <Image
        source={require('../assets/img/cards.png')}
        style={styles.image}
        contentFit="cover"
      ></Image>
    </ScrollView>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    image: {
      height: 300,
      marginTop: 20,
    },
    input: {},
    inputMain: {
      maxWidth: 70,
    },
    inputContainer: {
      flexDirection: 'row',
      maxWidth: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    alert: {
      marginTop: 10,
    },
    button: {
      marginTop: 20,
    },
  });

export default DepositAmountForm;
