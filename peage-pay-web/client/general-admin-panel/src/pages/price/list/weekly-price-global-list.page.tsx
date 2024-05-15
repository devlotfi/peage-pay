import { useQuery } from '@apollo/client';
import {
  AdminDashboardLayout,
  Heading,
  ListPageLayout,
  Pagination,
  Table,
} from '@peage-pay-web/ui';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { WEEKLY_PRICE_GLOBAL_LIST } from '../../../graphql/queries';
import { WeeklyPriceType } from '../../../__generated__/graphql';
import WeeklyPriceListItem from '../../../components/price/item/weekly-price-item.component';
import { useTranslation } from 'react-i18next';

const WeeklyPriceGlobalListPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);

  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useQuery(WEEKLY_PRICE_GLOBAL_LIST, {
    variables: {
      priceListInput: {
        take: 10,
        skip: 10 * (page - 1),
      },
    },
    fetchPolicy: 'network-only',
  });

  return (
    <ListPageLayout>
      <ListPageLayout.Title>
        <Heading className="text-[20pt]">
          <Heading.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>{t('WEEKLY_PRICE_GLOBAL_LIST')}</Heading.Text>
        </Heading>
      </ListPageLayout.Title>

      <AdminDashboardLayout.Loading loading={listLoading}>
        <AdminDashboardLayout.Error error={listError}>
          <ListPageLayout.Empty list={listData?.weeklyPriceGlobalList.list}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>{t('DAYS_OF_WEEK')}</Table.Head.Th>
                    <Table.Head.Th>{t('PRICE')} (dzd/km)</Table.Head.Th>
                    <Table.Head.Th>{t('PRIORITY')}</Table.Head.Th>
                    <Table.Head.Th>{t('START_TIMESTAMP')}</Table.Head.Th>
                    <Table.Head.Th>{t('END_TIMESTAMP')}</Table.Head.Th>
                    <Table.Head.Th>{t('ID')}</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {listData?.weeklyPriceGlobalList.list.map((weeklyPrice) => (
                    <WeeklyPriceListItem
                      key={weeklyPrice.price.id}
                      weeklyPrice={weeklyPrice as WeeklyPriceType}
                    ></WeeklyPriceListItem>
                  ))}
                </Table.Body>
              </Table>
            </Table.Container>
          </ListPageLayout.Empty>
        </AdminDashboardLayout.Error>
      </AdminDashboardLayout.Loading>
      <ListPageLayout.Footer>
        {listData ? (
          <Pagination
            value={page}
            maxPages={Math.ceil(listData.weeklyPriceGlobalList.count / 10)}
            handlePageChange={(page) => setPage(page)}
          ></Pagination>
        ) : null}
      </ListPageLayout.Footer>
    </ListPageLayout>
  );
};

export default WeeklyPriceGlobalListPage;
