import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import UIText from '../elements/ui-text/ui-text.component';
import type { StackScreenProps } from '@react-navigation/stack';
import { MainRouterParamList } from '../routers/main.router';
import { DashboardRouterParamList } from '../routers/dashboard.router';

type Props = StackScreenProps<DashboardRouterParamList, 'Home'>;

const ReloadPage = ({ navigation }: Props): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.page}>
      <UIText>reload</UIText>
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      backgroundColor: theme['base-100'],
      flex: 1,
    },
    image: {
      height: 200,
      width: 200,
    },
    imageText: {
      marginBottom: 10,
      fontSize: 30,
      textAlign: 'center',
      maxWidth: '70%',
      fontWeight: 'bold',
    },
    imageContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonsContainer: {
      padding: 10,
    },
  });

export default ReloadPage;
