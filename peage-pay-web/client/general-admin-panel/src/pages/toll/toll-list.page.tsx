import { useQuery } from '@apollo/client';
import { TOLL_LIST, TOLL_NETWORK_BY_ID } from '../../graphql/queries';
import {
  AdminDashboardLayout,
  Heading,
  ListPageLayout,
  Pagination,
  SearchForm,
  SearchValues,
  Table,
} from '@peage-pay-web/ui';
import { useState } from 'react';
import { TollSearchFields, TollType } from '../../__generated__/graphql';
import TollListItem from '../../components/toll/toll-list-item.component';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useRenderFieldOptions } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

const initialValues: SearchValues<TollSearchFields> = {
  search: '',
  field: TollSearchFields.NameSearch,
};

const TollListPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { renderFieldOptions } = useRenderFieldOptions();
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);
  const { tollNetworkId } = useParams();

  const { loading: tollNetworkLoading, error: tollNetworkError } = useQuery(
    TOLL_NETWORK_BY_ID,
    {
      variables: {
        tollNetworkByIdInput: {
          id: tollNetworkId as string,
        },
      },
      fetchPolicy: 'network-only',
    },
  );
  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useQuery(TOLL_LIST, {
    variables: {
      tollListInput: {
        take: 10,
        skip: 10 * (page - 1),
        [searchData.field]: searchData.search,
        tollNetworkId: tollNetworkId as string,
      },
    },
    skip: tollNetworkLoading || tollNetworkError !== undefined,
    fetchPolicy: 'network-only',
  });
  return (
    <ListPageLayout>
      <AdminDashboardLayout.Loading loading={tollNetworkLoading}>
        <AdminDashboardLayout.Error error={tollNetworkError}>
          <SearchForm
            handleSearch={(searchData) => setSearchData(searchData)}
            initialFieldSearch={TollSearchFields.NameSearch}
            fieldSelectOptions={renderFieldOptions(TollSearchFields)}
          ></SearchForm>

          <ListPageLayout.Title>
            <Heading className="text-[20pt]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>{t('TOLL_LIST')}</Heading.Text>
            </Heading>
          </ListPageLayout.Title>

          <AdminDashboardLayout.Loading loading={listLoading}>
            <AdminDashboardLayout.Error error={listError}>
              <ListPageLayout.Empty list={listData?.tollList.list}>
                <Table.Container className="flex-1">
                  <Table>
                    <Table.Head>
                      <Table.Head.Tr>
                        <Table.Head.Th></Table.Head.Th>
                        <Table.Head.Th>{t('NAME')}</Table.Head.Th>
                        <Table.Head.Th>{t('WILAYA')}</Table.Head.Th>
                        <Table.Head.Th>
                          {t('CODE')} ({t('WILAYA')})
                        </Table.Head.Th>
                        <Table.Head.Th>{t('HIGHWAY')}</Table.Head.Th>
                        <Table.Head.Th>
                          {t('CODE')} ({t('HIGHWAY')})
                        </Table.Head.Th>
                        <Table.Head.Th>{t('CREATED_AT')}</Table.Head.Th>
                        <Table.Head.Th>{t('UPDATED_AT')}</Table.Head.Th>
                        <Table.Head.Th>{t('ID')}</Table.Head.Th>
                      </Table.Head.Tr>
                    </Table.Head>
                    <Table.Body>
                      {listData?.tollList.list.map((toll) => (
                        <TollListItem
                          key={toll.id}
                          toll={toll as TollType}
                        ></TollListItem>
                      ))}
                    </Table.Body>
                  </Table>
                </Table.Container>
              </ListPageLayout.Empty>
            </AdminDashboardLayout.Error>
            <ListPageLayout.Footer>
              {listData ? (
                <Pagination
                  value={page}
                  maxPages={Math.ceil(listData.tollList.count / 10)}
                  handlePageChange={(page) => setPage(page)}
                ></Pagination>
              ) : null}
            </ListPageLayout.Footer>
          </AdminDashboardLayout.Loading>
        </AdminDashboardLayout.Error>
      </AdminDashboardLayout.Loading>
    </ListPageLayout>
  );
};

export default TollListPage;
