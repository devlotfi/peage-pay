import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { TripType } from '../../__generated__/graphql';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Utils } from '../../utils/utils';

interface TripItemProps {
  trip: TripType;
}

const TripItem = ({ trip }: TripItemProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = makeStyles(theme, trip);

  return (
    <View style={styles.main}>
      <UIText style={styles.statusText}>
        {trip.exitToll ? t('FINISHED') : t('IN_PROGRESS')}
      </UIText>
      {!trip.exitToll ? (
        <UIText style={styles.sectionName}>{t('DEPARTURE')}</UIText>
      ) : null}
      <View style={styles.tollView}>
        <View style={styles.infoRow}>
          <UIText style={styles.infoContent}>{trip.entryToll.name}</UIText>
        </View>
        <View style={styles.infoRow}>
          <UIText style={styles.infoContent}>
            {Utils.formatDateTime(new Date(trip.entryTimeStamp))}
          </UIText>
        </View>
      </View>

      {trip.exitToll && trip.exitTollPrice && trip.distance ? (
        <>
          <View style={styles.arrowConteiner}>
            <FontAwesomeIcon
              style={styles.arrowIcon}
              size={27}
              icon={faArrowDown}
            ></FontAwesomeIcon>
          </View>

          <View style={styles.tollView}>
            <View style={styles.infoRow}>
              <UIText style={styles.infoContent}>{trip.exitToll.name}</UIText>
            </View>
            <View style={styles.infoRow}>
              <UIText style={styles.infoContent}>
                {Utils.formatDateTime(new Date(trip.exitTimeStamp))}
              </UIText>
            </View>
          </View>
          <View style={styles.totalContainer}>
            <View style={styles.infoRow}>
              <UIText style={[styles.infoName, styles.coloredTitle]}>
                {t('DISTANCE')}
              </UIText>
              <UIText style={styles.infoContent}>{trip.distance} km</UIText>
            </View>
            <View style={styles.infoRow}>
              <UIText style={[styles.infoName, styles.coloredTitle]}>
                {t('APPLIED_PRICE')}
              </UIText>
              <UIText style={styles.infoContent}>
                {((trip.entryTollPrice + trip.exitTollPrice) / 2).toFixed(2)}{' '}
                dzd/km
              </UIText>
            </View>
            <View style={styles.infoRow}>
              <UIText style={[styles.infoName, styles.coloredTitle]}>
                {t('PAID')}
              </UIText>
              <UIText style={[styles.infoContent, { fontWeight: 'bold' }]}>
                {trip.distance *
                  ((trip.entryTollPrice + trip.exitTollPrice) / 2)}{' '}
                dzd
              </UIText>
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};

const makeStyles = (theme: AppTheme, trip: TripType) =>
  StyleSheet.create({
    main: {
      backgroundColor: theme['base-200'],
      padding: 10,
      borderRadius: 10,
      borderColor: theme['edge-200'],
      marginTop: 10,
      borderWidth: 1,
      marginHorizontal: 10,
    },
    statusText: {
      color: trip.exitToll ? theme['primary-100'] : theme['success-100'],
      fontWeight: 'bold',
      marginLeft: 10,
      marginBottom: 10,
    },
    tollView: {
      backgroundColor: theme['base-100'],
      borderColor: theme['edge-200'],
      borderWidth: 1,
      borderRadius: 7,
    },
    infoRow: {
      flexDirection: 'row',
      paddingVertical: 3,
    },
    infoName: {
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    sectionName: {
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    infoContent: {
      fontSize: 15,
      marginLeft: 10,
      flexWrap: 'wrap',
      flexShrink: 1,
    },
    coloredTitle: {
      color: theme['primary-100'],
    },
    arrowIcon: {
      color: theme['base-content'],
    },
    arrowConteiner: {
      alignItems: 'center',
      marginVertical: 5,
    },
    totalContainer: {
      backgroundColor: theme['base-100'],
      borderColor: theme['primary-100'],
      borderWidth: 1,
      borderRadius: 7,
      marginTop: 10,
    },
  });

export default TripItem;
