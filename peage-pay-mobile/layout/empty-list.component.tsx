import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { Image } from 'expo-image';
import UIText from '../elements/ui-text/ui-text.component';
import { useTranslation } from 'react-i18next';

const EmptyList = () => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.page}>
      <Image
        source={require('../assets/img/no-data.png')}
        style={styles.image}
        contentFit="contain"
      ></Image>
      <UIText style={styles.text}>{t('NO_DATA')}</UIText>
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      backgroundColor: theme['base-100'],
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 200,
      width: 200,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default EmptyList;
