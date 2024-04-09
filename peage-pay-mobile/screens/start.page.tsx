import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import MinimalNavbar from '../layout/minimal-navbar.component';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import UIText from '../elements/ui-text/ui-text.component';
import UIButton from '../elements/ui-button/ui-button.component';
import { faFilePen, faSignIn } from '@fortawesome/free-solid-svg-icons';
import UIButtonOutline from '../elements/ui-button-outline/ui-button-outline.component';
import type { StackScreenProps } from '@react-navigation/stack';
import { MainStackRouterParamList } from '../navigators/router';
import { LinearGradient } from 'expo-linear-gradient';

type Props = StackScreenProps<MainStackRouterParamList, 'Start'>;

const StartPage = ({ navigation }: Props): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <LinearGradient
      colors={[theme['base-100'], theme['base-200'], theme['base-100']]}
      style={styles.page}
    >
      <MinimalNavbar></MinimalNavbar>
      <View style={styles.imageContainer}>
        <UIText style={styles.imageText}>Welcome to PeagePay App</UIText>
        <Image
          style={styles.image}
          contentFit="contain"
          source={require('../assets/img/toll.png')}
        ></Image>
      </View>
      <View style={styles.buttonsContainer}>
        <UIButton
          onPress={() => navigation.push('SignIn')}
          variant="primary"
          iconPosition="right"
        >
          <UIButton.Content>Sign In</UIButton.Content>
          <UIButton.Icon icon={faSignIn}></UIButton.Icon>
        </UIButton>
        <UIButtonOutline
          onPress={() => navigation.push('SignUp')}
          style={{ marginTop: 10 }}
          variant="primary"
          iconPosition="right"
        >
          <UIButtonOutline.Content>Sign Up</UIButtonOutline.Content>
          <UIButtonOutline.Icon icon={faFilePen}></UIButtonOutline.Icon>
        </UIButtonOutline>
      </View>
    </LinearGradient>
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

export default StartPage;
