import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { AppTheme } from '../theme/types/app-theme.type';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const DashboardNavbar = ({
  navigation,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
DrawerScreenProps<any>): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.sidebarButtonContainer}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesomeIcon
          icon={faBars}
          size={25}
          style={styles.sidebarButton}
        ></FontAwesomeIcon>
      </Pressable>
      <Image
        style={styles.logo}
        contentFit="contain"
        source={require('../assets/img/peage-pay-logo.png')}
      ></Image>
      <Text style={styles.logoText}>PeagePay</Text>
    </View>
  );
};
const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme['base-100'],
      borderColor: theme['edge-200'],
      borderBottomWidth: 1,
      alignItems: 'center',
      flexDirection: 'row',
    },
    logo: {
      height: 35,
      width: 35,
    },
    logoText: {
      fontFamily: 'Fugaz-One',
      color: theme['base-content'],
      fontSize: 20,
      marginLeft: 10,
    },
    sidebarButtonContainer: {
      color: theme['base-content'],
      paddingHorizontal: 10,
      padding: 17,
      alignItems: 'center',
    },
    sidebarButton: {
      color: theme['base-content'],
      paddingHorizontal: 20,
    },
  });

export default DashboardNavbar;
