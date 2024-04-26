import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import UIText from '../elements/ui-text/ui-text.component';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import UIButton from '../elements/ui-button/ui-button.component';
import { faPowerOff, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@apollo/client';
import { SIGN_OUT } from '../graphql/mutations';
import { UserAuthUtils } from '../utils/utils';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const CustomDrawerContent = (
  props: DrawerContentComponentProps,
): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { authData, setAuthData } = useContext(AuthContext);

  const [signOut, { loading }] = useMutation(SIGN_OUT, {
    variables: {
      signOutInput: {
        refreshToken: UserAuthUtils.getRefreshToken()!,
      },
    },
    onCompleted() {
      UserAuthUtils.clearAccessToken();
      UserAuthUtils.clearRefreshToken();
      setAuthData(null);
    },
    onError() {
      UserAuthUtils.clearAccessToken();
      UserAuthUtils.clearRefreshToken();
      setAuthData(null);
    },
  });

  return (
    <DrawerContentScrollView style={styles.page} {...props}>
      <View style={styles.page}>
        <View></View>
        <View style={styles.card}>
          <FontAwesomeIcon
            size={70}
            style={styles.icon}
            icon={faUserCircle}
          ></FontAwesomeIcon>
          <UIText style={styles.name}>
            {authData?.baseUser.firstName} {authData?.baseUser.lastName}
          </UIText>
        </View>
        <UIButton variant="error" onPress={() => signOut()}>
          {loading ? (
            <UIText>Loading</UIText>
          ) : (
            <>
              <UIButton.Icon icon={faPowerOff}></UIButton.Icon>
              <UIButton.Content>Sign out</UIButton.Content>
            </>
          )}
        </UIButton>
      </View>
    </DrawerContentScrollView>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      backgroundColor: theme['base-200'],
      flex: 1,
      padding: 10,
    },
    icon: {
      marginTop: -50,
      color: theme['primary-100'],
    },
    name: {
      fontSize: 15,
      marginTop: 15,
      fontWeight: 'bold',
    },
    card: {
      borderRadius: 10,
      backgroundColor: theme['base-100'],
      padding: 10,
      marginTop: 50,
      marginBottom: 20,
      alignItems: 'center',
      borderColor: theme['edge-200'],
      borderWidth: 1,
    },
  });

export default CustomDrawerContent;
