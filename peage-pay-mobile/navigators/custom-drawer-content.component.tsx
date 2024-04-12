import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import UIText from '../elements/ui-text/ui-text.component';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import UIButton from '../elements/ui-button/ui-button.component';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@apollo/client';
import { SIGN_OUT } from '../graphql/mutations';
import { UserAuthUtils } from '../utils/utils';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const CustomDrawerContent = (
  props: DrawerContentComponentProps,
): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);
  const { setAuthData } = useContext(AuthContext);

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
        <UIText>home</UIText>
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
  });

export default CustomDrawerContent;
