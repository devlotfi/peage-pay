import { ScrollView, StyleSheet, View } from 'react-native';
import { AppTheme } from '../theme/types/app-theme.type';
import { useAppTheme } from '../hooks/use-app-theme.hook';
import { DrawerScreenProps } from '@react-navigation/drawer';
import FullScreenLoading from '../layout/full-screen-loading.component';
import { useQuery } from '@apollo/client';
import { USER_RFID_TAG_LIST } from '../graphql/queries';
import { BottomTabsNavigatorParamList } from '../navigators/router';
import UIHeading from '../elements/ui-heading/ui-heading.component';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import FullScreenError from '../layout/full-screen-error.component';
import EmptyList from '../layout/empty-list.component';
import RfidTagItem from '../components/rfid-tag/rfid-tag-item.component';
import { RfidTagType } from '../__generated__/graphql';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = DrawerScreenProps<BottomTabsNavigatorParamList, 'Badges'>;

const BadgesScreen = (): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  const {
    loading: rfidTagListLoading,
    error: rfidTagListError,
    data: rfidTagListData,
  } = useQuery(USER_RFID_TAG_LIST, {
    fetchPolicy: 'network-only',
  });

  const renderRfidTagList = () => {
    if (rfidTagListData && rfidTagListData.userRfidTagList.length > 0) {
      return rfidTagListData.userRfidTagList.map((rfidTag) => (
        <RfidTagItem
          key={rfidTag.id}
          rfidTag={rfidTag as RfidTagType}
        ></RfidTagItem>
      ));
    } else {
      return <EmptyList></EmptyList>;
    }
  };

  return (
    <FullScreenLoading loading={rfidTagListLoading}>
      <FullScreenError error={rfidTagListError}>
        <ScrollView
          style={styles.page}
          contentContainerStyle={styles.pageScrollContent}
        >
          <UIHeading style={{ marginLeft: 20 }} size={25}>
            <UIHeading.Icon position="left" icon={faIdBadge}></UIHeading.Icon>
            <UIHeading.Text>{t('BADGES')}</UIHeading.Text>
          </UIHeading>

          <View style={styles.rfidTagList}>{renderRfidTagList()}</View>
        </ScrollView>
      </FullScreenError>
    </FullScreenLoading>
  );
};

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    page: {
      backgroundColor: theme['base-100'],
      flex: 1,
    },
    pageScrollContent: {
      paddingBottom: 30,
    },
    balanceContainer: {
      borderRadius: 20,
      marginHorizontal: 15,
      padding: 20,
      minHeight: 170,
      justifyContent: 'space-between',
    },
    balanceTitle: {
      fontSize: 20,
      color: theme['color-content'],
    },
    balanceValue: {
      fontSize: 35,
      fontWeight: 'bold',
      color: theme['color-content'],
    },
    balanceUser: {
      color: theme['color-content'],
    },
    rfidTagList: {
      paddingHorizontal: 10,
    },
  });

export default BadgesScreen;
