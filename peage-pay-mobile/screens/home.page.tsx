import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import UIText from '../elements/ui-text/ui-text.component';
import { DashboardRouterParamList } from '../navigators/dashboard.router';
import { DrawerScreenProps } from '@react-navigation/drawer';
import UIButton from '../elements/ui-button/ui-button.component';
import DashboardNavbar from '../layout/dashboard-navbar.component';

type Props = DrawerScreenProps<DashboardRouterParamList, 'Home'>;

const HomePage = (props: Props): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.page}>
      <UIText>home</UIText>
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

export default HomePage;
