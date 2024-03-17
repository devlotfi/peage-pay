import { useQuery } from '@apollo/client';
import { SECTION_LIST_FOR_TOLL, TOLL_BY_ID } from '../../graphql/queries';
import { Heading, ListPageLayout, Pagination, Table } from '@peage-pay-web/ui';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import SectionItem from '../../components/section/section-item.component';
import { SectionType } from '../../__generated__/graphql';

const SectionListPage = (): JSX.Element => {
  const { tollId } = useParams();
  const [page, setPage] = useState<number>(1);

  const {
    data: tollData,
    loading: tollLoading,
    error: tollError,
  } = useQuery(TOLL_BY_ID, {
    variables: {
      tollByIdInput: {
        tollId: tollId as string,
      },
    },
  });
  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useQuery(SECTION_LIST_FOR_TOLL, {
    variables: {
      sectionListForTollInput: {
        take: 10,
        skip: 10 * (page - 1),
        tollId: tollId as string,
      },
    },
    skip: tollLoading || tollError !== undefined,
    fetchPolicy: 'network-only',
  });

  return (
    <ListPageLayout>
      <ListPageLayout.Loading loading={tollLoading}>
        <ListPageLayout.Error error={tollError}>
          <div className="flex flex-col md:flex-row md:justify-between items-start">
            <Heading className="text-[20pt]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Graph links list</Heading.Text>
            </Heading>
            <Heading className="text-[15pt]">
              <Heading.Text className="opacity-70">
                Toll: {tollData?.tollById.name}
              </Heading.Text>
            </Heading>
          </div>

          <ListPageLayout.Loading loading={listLoading}>
            <ListPageLayout.Error error={listError}>
              <ListPageLayout.Empty list={listData?.sectionListForToll.list}>
                <Table.Container className="h-full">
                  <Table>
                    <Table.Head>
                      <Table.Head.Tr>
                        <Table.Head.Th></Table.Head.Th>
                        <Table.Head.Th>From toll</Table.Head.Th>
                        <Table.Head.Th>To toll</Table.Head.Th>
                        <Table.Head.Th>Distance</Table.Head.Th>
                      </Table.Head.Tr>
                    </Table.Head>
                    <Table.Body>
                      {listData?.sectionListForToll.list.map((section) => (
                        <SectionItem
                          key={`${section.fromToll.id}-${section.toToll.id}`}
                          section={section as SectionType}
                        ></SectionItem>
                      ))}
                    </Table.Body>
                  </Table>
                </Table.Container>
              </ListPageLayout.Empty>
            </ListPageLayout.Error>
          </ListPageLayout.Loading>
          <div className="flex justify-center mt-[0.5rem]">
            <div className="overflow-x-auto">
              {listData ? (
                <Pagination
                  value={page}
                  maxPages={Math.ceil(listData.sectionListForToll.count / 10)}
                  handlePageChange={(page) => setPage(page)}
                ></Pagination>
              ) : null}
            </div>
          </div>
        </ListPageLayout.Error>
      </ListPageLayout.Loading>
    </ListPageLayout>
  );
};

export default SectionListPage;
