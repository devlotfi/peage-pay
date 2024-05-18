import { useQuery } from '@apollo/client';
import { AUTOMATIC_GATE_LIST } from '../../graphql/queries';
import {
  AdminDashboardLayout,
  Heading,
  ListPageLayout,
  Pagination,
  SearchForm,
  SearchValues,
  Table,
} from '@peage-pay-web/ui';
import { useContext, useState } from 'react';
import {
  AutomaticGateSearchFields,
  AutomaticGateType,
} from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import AutomaticGateItem from '../../components/automatic-gate/automatic-gate-item.component';
import { TollAdminInfoConext } from '../../context/toll-admin-info.context';
import { useTranslation } from 'react-i18next';
import { useRenderFieldOptions } from '@peage-pay-web/utils';

const initialValues: SearchValues<AutomaticGateSearchFields> = {
  search: '',
  field: AutomaticGateSearchFields.NameSearch,
};

const AutomaticGateListPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { renderFieldOptions } = useRenderFieldOptions();
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);
  const { tollAdmin } = useContext(TollAdminInfoConext);

  const { data, loading, error } = useQuery(AUTOMATIC_GATE_LIST, {
    variables: {
      automaticGateListInput: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        tollId: tollAdmin.toll?.id!,
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
        initialFieldSearch={AutomaticGateSearchFields.NameSearch}
        fieldSelectOptions={renderFieldOptions(AutomaticGateSearchFields)}
      ></SearchForm>

      <ListPageLayout.Title>
        <Heading className="text-[20pt]">
          <Heading.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>{t('AUTOMATIC_GATE_LIST')}</Heading.Text>
        </Heading>
      </ListPageLayout.Title>

      <AdminDashboardLayout.Loading loading={loading}>
        <AdminDashboardLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.automaticGateList.list}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>{t('NAME')}</Table.Head.Th>
                    <Table.Head.Th>{t('VARIANT')}</Table.Head.Th>
                    <Table.Head.Th>{t('DIRECTION')}</Table.Head.Th>
                    <Table.Head.Th>{t('CREATED_AT')}</Table.Head.Th>
                    <Table.Head.Th>{t('UPDATED_AT')}</Table.Head.Th>
                    <Table.Head.Th>{t('ID')}</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {data?.automaticGateList.list.map((automaticGate) => (
                    <AutomaticGateItem
                      key={automaticGate.id}
                      automaticGate={automaticGate as AutomaticGateType}
                    ></AutomaticGateItem>
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
              maxPages={Math.ceil(data.automaticGateList.count / 10)}
              handlePageChange={(page) => setPage(page)}
            ></Pagination>
          ) : null}
        </ListPageLayout.Footer>
      </AdminDashboardLayout.Loading>
    </ListPageLayout>
  );
};

export default AutomaticGateListPage;
