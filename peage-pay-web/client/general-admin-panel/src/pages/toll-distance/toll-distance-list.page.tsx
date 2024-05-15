import { useQuery } from '@apollo/client';
import { TOLL_DISTANCE_LIST } from '../../graphql/queries';
import {
  AdminDashboardLayout,
  Button,
  Heading,
  ListPageLayout,
  Pagination,
  Table,
} from '@peage-pay-web/ui';
import { useRef, useState } from 'react';
import { TollDistanceType } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faRecycle } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import TollDistanceItem from '../../components/toll-distance/toll-distance-item.component';
import GenerateTollDistancesModal from '../../components/toll-distance/generate-toll-distances-modal.component';
import { useTranslation } from 'react-i18next';

const TollDistanceListPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { tollNetworkId } = useParams();
  const [page, setPage] = useState<number>(1);
  const generateTollDistancesModalRef = useRef<HTMLDialogElement>(null);

  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useQuery(TOLL_DISTANCE_LIST, {
    variables: {
      tollDistanceListInput: {
        take: 10,
        skip: 10 * (page - 1),
        id: tollNetworkId as string,
      },
    },
    fetchPolicy: 'network-only',
  });

  return (
    <ListPageLayout>
      <GenerateTollDistancesModal
        modalRef={generateTollDistancesModalRef}
        tollNetworkId={tollNetworkId!}
      ></GenerateTollDistancesModal>

      <ListPageLayout.Title className="flex-col lg:flex-row justify-between">
        <Heading className="text-[20pt]">
          <Heading.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>{t('TOLL_DISTANCE_LIST')}</Heading.Text>
        </Heading>
        <Button
          onClick={() => generateTollDistancesModalRef.current?.showModal()}
          variant={'base-200'}
        >
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>{t('GENERATE_TOLL_DISTANCES')}</Button.Content>
        </Button>
      </ListPageLayout.Title>
      <AdminDashboardLayout.Loading loading={listLoading}>
        <AdminDashboardLayout.Error error={listError}>
          <ListPageLayout.Empty list={listData?.tollDistanceList.list}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th>{t('FROM_TOLL')}</Table.Head.Th>
                    <Table.Head.Th>{t('TO_TOLL')}</Table.Head.Th>
                    <Table.Head.Th>{t('DISTANCE')} (km)</Table.Head.Th>
                    <Table.Head.Th>
                      {t('FROM_TOLL')} ({t('ID')})
                    </Table.Head.Th>
                    <Table.Head.Th>
                      {t('TO_TOLL')} ({t('ID')})
                    </Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {listData?.tollDistanceList.list.map((tollDistance) => (
                    <TollDistanceItem
                      key={`${tollDistance.fromToll.id}||${tollDistance.toToll.id}`}
                      tollDistance={tollDistance as TollDistanceType}
                    ></TollDistanceItem>
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
              maxPages={Math.ceil(listData.tollDistanceList.count / 10)}
              handlePageChange={(page) => setPage(page)}
            ></Pagination>
          ) : null}
        </ListPageLayout.Footer>
      </AdminDashboardLayout.Loading>
    </ListPageLayout>
  );
};

export default TollDistanceListPage;
