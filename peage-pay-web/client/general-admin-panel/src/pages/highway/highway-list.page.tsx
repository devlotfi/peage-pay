import { useQuery } from '@apollo/client';
import { HIGHWAY_LIST } from '../../graphql/queries';
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
import { HighwaySearchFields } from '../../__generated__/graphql';
import HighwayListItem from '../../components/highway/highway-list-item.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Utils } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

const initialValues: SearchValues<HighwaySearchFields> = {
  search: '',
  field: HighwaySearchFields.NameSearch,
};

const HighwayListPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(HIGHWAY_LIST, {
    variables: {
      highwayListInput: {
        take: 10,
        skip: 10 * (page - 1),
        [searchData.field]: searchData.search,
      },
    },
    fetchPolicy: 'network-only',
  });
  return (
    <ListPageLayout>
      <SearchForm
        handleSearch={(searchData) => setSearchData(searchData)}
        initialFieldSearch={HighwaySearchFields.NameSearch}
        fieldSelectOptions={Utils.renderFieldOptions(HighwaySearchFields)}
      ></SearchForm>

      <ListPageLayout.Title>
        <Heading className="text-[20pt]">
          <Heading.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>{t('HIGHWAY_LIST')}</Heading.Text>
        </Heading>
      </ListPageLayout.Title>

      <AdminDashboardLayout.Loading loading={loading}>
        <AdminDashboardLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.highwayList.list}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>{t('NAME')}</Table.Head.Th>
                    <Table.Head.Th>{t('CODE')}</Table.Head.Th>
                    <Table.Head.Th>{t('CREATED_AT')}</Table.Head.Th>
                    <Table.Head.Th>{t('UPDATED_AT')}</Table.Head.Th>
                    <Table.Head.Th>{t('ID')}</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {data?.highwayList.list.map((highway) => (
                    <HighwayListItem
                      key={highway.id}
                      highway={highway}
                    ></HighwayListItem>
                  ))}
                </Table.Body>
              </Table>
            </Table.Container>
          </ListPageLayout.Empty>
        </AdminDashboardLayout.Error>

        <ListPageLayout.Footer>
          {data ? (
            <Pagination
              value={page}
              maxPages={Math.ceil(data.highwayList.count / 10)}
              handlePageChange={(page) => setPage(page)}
            ></Pagination>
          ) : null}
        </ListPageLayout.Footer>
      </AdminDashboardLayout.Loading>
    </ListPageLayout>
  );
};

export default HighwayListPage;
