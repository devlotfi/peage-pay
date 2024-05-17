import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { TollType } from '../../__generated__/graphql';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import UIButton from '../../elements/ui-button/ui-button.component';
import { useTranslation } from 'react-i18next';

interface TollDetailsProps {
  toll: TollType;
  onClose: () => void;
}

const TollDetails = ({ toll, onClose }: TollDetailsProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <UIText style={styles.title}>{t('TOLL_INFO')}</UIText>
        <UIButton onPress={() => onClose()} variant="base-200">
          <UIButton.Icon
            style={{ marginRight: 0 } as ViewProps}
            icon={faTimes}
          ></UIButton.Icon>
        </UIButton>
      </View>
      <View style={styles.infoContainer}>
        <UIText style={styles.infoName}>{t('NAME')}:</UIText>
        <UIText style={styles.infoContent}>{toll.name}</UIText>
      </View>
      <View style={styles.infoContainer}>
        <UIText style={styles.infoName}>{t('HIGHWAY')}:</UIText>
        <UIText style={styles.infoContent}>{toll.highway.name}</UIText>
      </View>
    </View>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    main: {
      backgroundColor: theme['base-100'],
      padding: 7,
      borderRadius: 10,
      borderColor: theme['edge-200'],
      borderWidth: 1,
      width: '100%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: theme['edge-100'],
      borderBottomWidth: 1,
      paddingBottom: 10,
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
      color: theme['primary-100'],
    },
    infoContainer: {
      flexDirection: 'row',
      paddingVertical: 5,
      alignItems: 'center',
    },
    infoName: {
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    infoContent: {
      fontSize: 17,
      marginLeft: 10,
    },
    statusContainer: {
      borderRadius: 7,
      borderColor: theme['edge-200'],
      borderWidth: 1,
    },
  });

export default TollDetails;
