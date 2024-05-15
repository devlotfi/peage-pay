import { useQuery } from '@apollo/client';
import { SECTION_LIST_FOR_TOLL_NETWORK_PAGINATED } from '../../graphql/queries';
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
import { useParams } from 'react-router-dom';
import SectionItem from '../../components/section/section-item.component';
import { SectionType } from '../../__generated__/graphql';
import { useTranslation } from 'react-i18next';

const SectionListPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { tollNetworkId } = useParams();
  const [page, setPage] = useState<number>(1);

  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useQuery(SECTION_LIST_FOR_TOLL_NETWORK_PAGINATED, {
    variables: {
      sectionListForTollNetworkPaginatedInput: {
        take: 10,
        skip: 10 * (page - 1),
        id: tollNetworkId as string,
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
          <Heading.Text>{t('SECTION_LIST')}</Heading.Text>
        </Heading>
      </ListPageLayout.Title>

      <AdminDashboardLayout.Loading loading={listLoading}>
        <AdminDashboardLayout.Error error={listError}>
          <ListPageLayout.Empty
            list={listData?.sectionListForTollNetworkPaginated.list}
          >
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>{t('FROM_TOLL')}</Table.Head.Th>
                    <Table.Head.Th>{t('TO_TOLL')}</Table.Head.Th>
                    <Table.Head.Th>{t('DISTANCE')} (km)</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {listData?.sectionListForTollNetworkPaginated.list.map(
                    (section) => (
                      <SectionItem
                        key={`${section.fromToll.id}-${section.toToll.id}`}
                        section={section as SectionType}
                      ></SectionItem>
                    ),
                  )}
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
            maxPages={Math.ceil(
              listData.sectionListForTollNetworkPaginated.count / 10,
            )}
            handlePageChange={(page) => setPage(page)}
          ></Pagination>
        ) : null}
      </ListPageLayout.Footer>
    </ListPageLayout>
  );
};

export default SectionListPage;
