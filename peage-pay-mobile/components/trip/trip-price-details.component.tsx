import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { TollType } from '../../__generated__/graphql';
import { faArrowDown, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import UIButton from '../../elements/ui-button/ui-button.component';
import FullScreenLoading from '../../layout/full-screen-loading.component';
import { TRIP_PRICE } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import FullScreenError from '../../layout/full-screen-error.component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface TripPriceDetailsProps {
  fromToll: TollType;
  toToll: TollType;
  onBack: () => void;
}

const TripPriceDetails = ({
  fromToll,
  toToll,
  onBack,
}: TripPriceDetailsProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  const { loading, error, data } = useQuery(TRIP_PRICE, {
    variables: {
      tripPriceInput: {
        fromTollId: fromToll.id,
        toTollId: toToll.id,
      },
    },
    fetchPolicy: 'network-only',
    onCompleted(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });

  const calculateAplliedPrice = () => {
    if (data) {
      return (data.tripPrice.fromTollPrice + data.tripPrice.toTollPrice) / 2;
    }
    return 0;
  };

  const calculateTotal = () => {
    if (data) {
      return calculateAplliedPrice() * data.tripPrice.distance;
    }
    return 0;
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <UIButton onPress={onBack} variant="base-200">
          <UIButton.Icon icon={faCaretLeft}></UIButton.Icon>
          <UIButton.Content>Retour</UIButton.Content>
        </UIButton>
      </View>

      <FullScreenLoading loading={loading} logo={false}>
        <FullScreenError error={error}>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <UIText style={styles.infoName}>Arrivée:</UIText>
              <UIText style={styles.infoContent}>{fromToll.name}</UIText>
            </View>
            <View style={styles.infoRow}>
              <UIText style={styles.infoName}>Tarif:</UIText>
              <UIText style={styles.infoContent}>
                {data?.tripPrice.fromTollPrice} DZD/KM
              </UIText>
            </View>
          </View>
          <View style={styles.arrowContainer}>
            <FontAwesomeIcon
              size={30}
              style={styles.arrowIcon}
              icon={faArrowDown}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <UIText style={styles.infoName}>Arrivée:</UIText>
              <UIText style={styles.infoContent}>{toToll.name}</UIText>
            </View>
            <View style={styles.infoRow}>
              <UIText style={styles.infoName}>Tarif:</UIText>
              <UIText style={styles.infoContent}>
                {data?.tripPrice.toTollPrice} DZD/KM
              </UIText>
            </View>
          </View>

          <View style={styles.totalContainer}>
            <View style={styles.totalInfoCard}>
              <View style={styles.infoRow}>
                <UIText style={styles.infoName}>Tarif appliqué:</UIText>
                <UIText style={styles.infoContent}>
                  {calculateAplliedPrice()} DZD/KM
                </UIText>
              </View>
              <View style={styles.infoRow}>
                <UIText style={styles.infoName}>Distance:</UIText>
                <UIText style={styles.infoContent}>
                  {data?.tripPrice.distance} KM
                </UIText>
              </View>
              <View style={styles.infoRow}>
                <UIText style={[styles.infoName, styles.totalInfoName]}>
                  Total:
                </UIText>
                <UIText style={styles.infoContent}>
                  {calculateTotal().toFixed(2)} DZD
                </UIText>
              </View>
            </View>
          </View>
        </FullScreenError>
      </FullScreenLoading>
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
      height: '100%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: theme['edge-100'],
      borderBottomWidth: 1,
      paddingBottom: 10,
      alignItems: 'center',
    },
    loaderContainer: {
      paddingVertical: 30,
    },
    arrowContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 10,
    },
    arrowIcon: {
      color: theme['base-content'],
    },
    infoCard: {
      backgroundColor: theme['base-200'],
      padding: 3,
      borderColor: theme['edge-200'],
      borderWidth: 1,
      borderRadius: 7,
      marginTop: 10,
    },
    totalContainer: {
      borderColor: theme['edge-100'],
      borderTopWidth: 1,
      marginTop: 10,
    },
    totalInfoCard: {
      backgroundColor: theme['base-100'],
      padding: 3,
      borderColor: theme['success-100'],
      borderWidth: 1,
      borderRadius: 7,
      marginTop: 10,
    },
    infoRow: {
      flexDirection: 'row',
      paddingVertical: 3,
    },
    infoName: {
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 10,
      color: theme['primary-100'],
    },
    totalInfoName: {
      color: theme['success-100'],
    },
    infoContent: {
      fontSize: 17,
      marginLeft: 10,
    },
  });

export default TripPriceDetails;
