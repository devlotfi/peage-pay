import { useQuery } from '@apollo/client';
import { TOLL_ADMIN_LIST } from '../../graphql/queries';
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
import {
  BaseUserSearchFields,
  TollAdminType,
} from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Utils } from '@peage-pay-web/utils';
import TollAdminItem from '../../components/toll-admin/toll-admin-item.component';
import { useTranslation } from 'react-i18next';

const initialValues: SearchValues<BaseUserSearchFields> = {
  search: '',
  field: BaseUserSearchFields.FirstNameSearch,
};

const TollAdminListPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(TOLL_ADMIN_LIST, {
    variables: {
      tollAdminListInput: {
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
        initialFieldSearch={initialValues.field}
        fieldSelectOptions={Utils.renderFieldOptions(BaseUserSearchFields)}
      ></SearchForm>

      <ListPageLayout.Title>
        <Heading className="text-[20pt]">
          <Heading.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>{t('TOLL_ADMIN_LIST')}</Heading.Text>
        </Heading>
      </ListPageLayout.Title>

      <AdminDashboardLayout.Loading loading={loading}>
        <AdminDashboardLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.tollAdminList.list}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>{t('FIRST_NAME')}</Table.Head.Th>
                    <Table.Head.Th>{t('LAST_NAME')}</Table.Head.Th>
                    <Table.Head.Th>{t('TOLL')}</Table.Head.Th>
                    <Table.Head.Th>{t('CREATED_AT')}</Table.Head.Th>
                    <Table.Head.Th>{t('UPDATED_AT')}</Table.Head.Th>
                    <Table.Head.Th>{t('ID')}</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {data?.tollAdminList.list.map((tollAdmin) => (
                    <TollAdminItem
                      key={tollAdmin.baseUser.id}
                      tollAdmin={tollAdmin as TollAdminType}
                    ></TollAdminItem>
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
              maxPages={Math.ceil(data.tollAdminList.count / 10)}
              handlePageChange={(page) => setPage(page)}
            ></Pagination>
          ) : null}
        </ListPageLayout.Footer>
      </AdminDashboardLayout.Loading>
    </ListPageLayout>
  );
};

export default TollAdminListPage;
