import { useQuery } from '@apollo/client';
import {
  GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL,
  TOLL_BY_ID,
} from '../../graphql/queries';
import { Heading, ListPageLayout, SearchForm, Table } from '@peage-pay-web/ui';
import { useState } from 'react';
import { GraphTollDistanceType } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import GraphTollDistanceItem from '../../components/graph-toll-distance/graph-toll-distance-item.component';

interface GraphTollDistanceListSearchValues {
  page: number;
}

const initialValues: GraphTollDistanceListSearchValues = {
  page: 1,
};

const GraphTollDistanceListPage = (): JSX.Element => {
  const { tollId } = useParams();
  const [searchData, setSearchData] = useState(initialValues);
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
  } = useQuery(GRAPH_TOLL_DISTANCE_LIST_FOR_TOLL, {
    variables: {
      graphTollDistanceListForTollInput: {
        take: 10,
        skip: 10 * (searchData.page - 1),
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
          <SearchForm
            pageOnly
            className="flex items-start mb-[1rem]"
            initialFieldSearch={{}}
            handleSearch={(searchData) => setSearchData(searchData)}
          ></SearchForm>

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
              <ListPageLayout.Empty
                list={listData?.graphTollDistanceListForToll}
              >
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
                      {listData?.graphTollDistanceListForToll.map(
                        (graphTollDistance) => (
                          <GraphTollDistanceItem
                            key={`${graphTollDistance.fromToll.id}-${graphTollDistance.toToll.id}`}
                            graphTollDistance={
                              graphTollDistance as GraphTollDistanceType
                            }
                          ></GraphTollDistanceItem>
                        ),
                      )}
                    </Table.Body>
                  </Table>
                </Table.Container>
              </ListPageLayout.Empty>
            </ListPageLayout.Error>
          </ListPageLayout.Loading>
        </ListPageLayout.Error>
      </ListPageLayout.Loading>
    </ListPageLayout>
  );
};

export default GraphTollDistanceListPage;
