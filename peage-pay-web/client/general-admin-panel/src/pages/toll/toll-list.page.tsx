import { useQuery } from '@apollo/client';
import { TOLL_LIST, TOLL_NETWORK_BY_ID } from '../../graphql/queries';
import { Heading, ListPageLayout, SearchForm, Table } from '@peage-pay-web/ui';
import { useState } from 'react';
import { TollSearchFields, TollType } from '../../__generated__/graphql';
import TollListItem from '../../components/toll/toll-list-item.component';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';

interface TollListSearchValues {
  search: string;
  field: TollSearchFields;
  page: number;
}

const initialValues: TollListSearchValues = {
  search: '',
  field: TollSearchFields.NameSearch,
  page: 1,
};

const TollListPage = (): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const { tollNetworkId } = useParams();
  const {
    data: tollNetworkData,
    loading: tollNetworkLoading,
    error: tollNetworkError,
  } = useQuery(TOLL_NETWORK_BY_ID, {
    variables: {
      tollNetworkByIdInput: {
        tollNetworkId: tollNetworkId as string,
      },
    },
    fetchPolicy: 'network-only',
  });
  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useQuery(TOLL_LIST, {
    variables: {
      tollListInput: {
        take: 10,
        skip: 10 * (searchData.page - 1),
        [searchData.field]: searchData.search,
        tollNetworkId: tollNetworkId as string,
      },
    },
    skip: tollNetworkLoading || tollNetworkError !== undefined,
    fetchPolicy: 'network-only',
  });

  const renderFieldOptions = () => {
    return (
      <>
        {Object.keys(TollSearchFields).map((key) => {
          const keyValue =
            TollSearchFields[key as keyof typeof TollSearchFields];
          return (
            <option key={keyValue} value={keyValue}>
              {keyValue}
            </option>
          );
        })}
      </>
    );
  };

  return (
    <ListPageLayout>
      <ListPageLayout.Loading loading={tollNetworkLoading}>
        <ListPageLayout.Error error={tollNetworkError}>
          <SearchForm
            className="mb-[1rem]"
            handleSearch={(searchData) => setSearchData(searchData)}
            initialFieldSearch={TollSearchFields.NameSearch}
            fieldSelectOptions={renderFieldOptions()}
          ></SearchForm>

          <div className="flex flex-col md:flex-row md:justify-between items-start">
            <Heading className="text-[20pt]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Toll list</Heading.Text>
            </Heading>
            <Heading className="text-[15pt] mb-[2rem]">
              <Heading.Text className="opacity-70">
                Toll network: {tollNetworkData?.tollNetworkById.name}
              </Heading.Text>
            </Heading>
          </div>

          <ListPageLayout.Loading loading={listLoading}>
            <ListPageLayout.Error error={listError}>
              <ListPageLayout.Empty list={listData?.tollList}>
                <Table.Container className="h-full">
                  <Table>
                    <Table.Head>
                      <Table.Head.Tr>
                        <Table.Head.Th></Table.Head.Th>
                        <Table.Head.Th>Id</Table.Head.Th>
                        <Table.Head.Th>Name</Table.Head.Th>
                        <Table.Head.Th>Wilaya</Table.Head.Th>
                        <Table.Head.Th>Wilaya code</Table.Head.Th>
                        <Table.Head.Th>Highway</Table.Head.Th>
                        <Table.Head.Th>Highway code</Table.Head.Th>
                        <Table.Head.Th>Created at</Table.Head.Th>
                        <Table.Head.Th>Updated at</Table.Head.Th>
                      </Table.Head.Tr>
                    </Table.Head>
                    <Table.Body>
                      {listData?.tollList.map((toll) => (
                        <TollListItem
                          key={toll.id}
                          toll={toll as TollType}
                        ></TollListItem>
                      ))}
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

export default TollListPage;
