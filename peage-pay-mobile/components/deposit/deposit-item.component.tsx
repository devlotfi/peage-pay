import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { DepositType } from '../../__generated__/graphql';
import { Utils } from '../../utils/utils';

interface DepositItemProps {
  deposit: DepositType;
}

const DepositItem = ({ deposit }: DepositItemProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.main}>
      <UIText style={styles.priceText}>{deposit.amount} DZD</UIText>
      <UIText style={styles.dateText}>
        {Utils.formatDateTime(new Date(deposit.createdAt))}
      </UIText>
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    main: {
      backgroundColor: theme['base-200'],
      padding: 10,
      borderRadius: 10,
      borderColor: theme['edge-200'],
      marginTop: 10,
      borderWidth: 1,
    },
    priceText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme['primary-100'],
      marginBottom: 7,
    },
    dateText: {
      fontSize: 15,
    },
  });

export default DepositItem;
