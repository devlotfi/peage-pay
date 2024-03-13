import { useQuery } from '@apollo/client';
import { TOLL_NETWORK_LIST } from '../../graphql/queries';
import { Heading, ListPageLayout, SearchForm, Table } from '@peage-pay-web/ui';
import { useState } from 'react';
import { TollNetworkSearchFields } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import TollNetworkItem from '../../components/toll-network/toll-network-item.component';

interface TollNetworkListSearchValues {
  search: string;
  field: TollNetworkSearchFields;
  page: number;
}

const initialValues: TollNetworkListSearchValues = {
  search: '',
  field: TollNetworkSearchFields.NameSearch,
  page: 1,
};

const TollNetworkListPage = (): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const { data, loading, error } = useQuery(TOLL_NETWORK_LIST, {
    variables: {
      tollNetworkListInput: {
        take: 10,
        skip: 10 * (searchData.page - 1),
        [searchData.field]: searchData.search,
      },
    },
    fetchPolicy: 'network-only',
  });

  const renderFieldOptions = () => {
    return (
      <>
        {Object.keys(TollNetworkSearchFields).map((key) => {
          const keyValue =
            TollNetworkSearchFields[
              key as keyof typeof TollNetworkSearchFields
            ];
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
      <SearchForm
        className="mb-[1rem]"
        handleSearch={(searchData) => setSearchData(searchData)}
        initialFieldSearch={TollNetworkSearchFields.NameSearch}
        fieldSelectOptions={renderFieldOptions()}
      ></SearchForm>

      <Heading className="text-[20pt] mb-[1rem]">
        <Heading.Icon position={'left'}>
          <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
        </Heading.Icon>
        <Heading.Text>Toll network list</Heading.Text>
      </Heading>

      <ListPageLayout.Loading loading={loading}>
        <ListPageLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.tollNetworkList}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>Id</Table.Head.Th>
                    <Table.Head.Th>Name</Table.Head.Th>
                    <Table.Head.Th>Created at</Table.Head.Th>
                    <Table.Head.Th>Updated at</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {data?.tollNetworkList.map((tollNetwork) => (
                    <TollNetworkItem
                      key={tollNetwork.id}
                      tollNetwork={tollNetwork}
                    ></TollNetworkItem>
                  ))}
                </Table.Body>
              </Table>
            </Table.Container>
          </ListPageLayout.Empty>
        </ListPageLayout.Error>
      </ListPageLayout.Loading>
    </ListPageLayout>
  );
};

export default TollNetworkListPage;
