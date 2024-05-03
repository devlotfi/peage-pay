import { StyleSheet, View, ViewStyle } from 'react-native';
import { AppTheme } from '../../theme/types/app-theme.type';
import { useAppTheme } from '../../hooks/use-app-theme.hook';
import UIText from '../../elements/ui-text/ui-text.component';
import { TollType } from '../../__generated__/graphql';
import {
  faArrowRightArrowLeft,
  faCalculator,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import UIButton from '../../elements/ui-button/ui-button.component';
import UIButtonOutline from '../../elements/ui-button-outline/ui-button-outline.component';

interface TripSelectionDetailsProps {
  fromToll: TollType | null;
  toToll: TollType | null;
  onClose: () => void;
  onSwitch: () => void;
  onResetFromToll: () => void;
  onResetToToll: () => void;
  onCalculatePrice: () => void;
}

const TripSelectionDetails = ({
  fromToll,
  toToll,
  onClose,
  onSwitch,
  onResetFromToll,
  onResetToToll,
  onCalculatePrice,
}: TripSelectionDetailsProps): JSX.Element => {
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <UIText style={styles.title}>Definir trajet</UIText>
        <UIButton onPress={onClose} variant="base-200">
          <UIButton.Icon
            style={{ marginRight: 0 } as ViewProps}
            icon={faTimes}
          ></UIButton.Icon>
        </UIButton>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.textContainer}>
          <UIText style={styles.infoName}>Depart:</UIText>
          <UIText style={[styles.infoContent, !fromToll && styles.notDefined]}>
            {fromToll?.name ? fromToll?.name : 'Non Defini'}
          </UIText>
        </View>

        {fromToll ? (
          <UIButton
            onPress={onResetFromToll}
            style={styles.clearBtn}
            variant="error"
          >
            <UIButton.Icon
              style={{ marginRight: 0 } as ViewProps}
              icon={faTimes}
            ></UIButton.Icon>
          </UIButton>
        ) : null}
      </View>

      <View style={styles.switchBtnContainer}>
        <UIButton
          onPress={onSwitch}
          variant="base-200"
          style={styles.switchBtn}
        >
          <View style={{ transform: 'rotate(90deg)' }}>
            <UIButton.Icon
              style={{ marginRight: 0 } as ViewStyle}
              icon={faArrowRightArrowLeft}
            ></UIButton.Icon>
          </View>
        </UIButton>
      </View>
      <View style={styles.infoCard}>
        <View style={styles.textContainer}>
          <UIText style={styles.infoName}>Arrivée:</UIText>
          <UIText style={[styles.infoContent, !toToll && styles.notDefined]}>
            {toToll?.name ? toToll?.name : 'Non Defini'}
          </UIText>
        </View>

        {toToll ? (
          <UIButton
            onPress={onResetToToll}
            style={styles.clearBtn}
            variant="error"
          >
            <UIButton.Icon
              style={{ marginRight: 0 } as ViewProps}
              icon={faTimes}
            ></UIButton.Icon>
          </UIButton>
        ) : null}
      </View>
      <UIButtonOutline
        onPress={onCalculatePrice}
        style={styles.calculateBtn}
        variant="primary"
      >
        <UIButtonOutline.Icon icon={faCalculator}></UIButtonOutline.Icon>
        <UIButtonOutline.Content>Calculer prix</UIButtonOutline.Content>
      </UIButtonOutline>
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
    switchBtnContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    switchBtn: {
      marginTop: 10,
      minHeight: 45,
    },
    textContainer: {
      flexDirection: 'row',
    },
    infoCard: {
      backgroundColor: theme['base-200'],
      flexDirection: 'row',
      minHeight: 45,
      borderColor: theme['edge-200'],
      borderWidth: 1,
      borderRadius: 7,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    clearBtn: {
      minHeight: 35,
      width: 35,
      marginRight: 5,
    },
    infoName: {
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 10,
      color: theme['primary-100'],
    },
    infoContent: {
      fontSize: 17,
      marginLeft: 10,
    },
    notDefined: {
      color: theme['error-100'],
    },
    calculateBtn: {
      marginTop: 10,
    },
  });

export default TripSelectionDetails;
