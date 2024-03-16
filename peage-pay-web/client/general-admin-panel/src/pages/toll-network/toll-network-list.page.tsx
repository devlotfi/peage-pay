import { useQuery } from '@apollo/client';
import { TOLL_NETWORK_LIST } from '../../graphql/queries';
import {
  Heading,
  ListPageLayout,
  Pagination,
  SearchForm,
  SearchValues,
  Table,
} from '@peage-pay-web/ui';
import { useState } from 'react';
import { TollNetworkSearchFields } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import TollNetworkItem from '../../components/toll-network/toll-network-item.component';

const initialValues: SearchValues<TollNetworkSearchFields> = {
  search: '',
  field: TollNetworkSearchFields.NameSearch,
};

const TollNetworkListPage = (): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(TOLL_NETWORK_LIST, {
    variables: {
      tollNetworkListInput: {
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
        className="mb-[1rem]"
        handleSearch={(searchData) => setSearchData(searchData)}
        initialFieldSearch={TollNetworkSearchFields.NameSearch}
        fieldSelectOptions={ListPageLayout.renderFieldOptions(
          TollNetworkSearchFields,
        )}
      ></SearchForm>

      <Heading className="text-[20pt] mb-[1rem]">
        <Heading.Icon position={'left'}>
          <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
        </Heading.Icon>
        <Heading.Text>Toll network list</Heading.Text>
      </Heading>

      <ListPageLayout.Loading loading={loading}>
        <ListPageLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.tollNetworkList.list}>
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
                  {data?.tollNetworkList.list.map((tollNetwork) => (
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
        <div className="flex justify-center mt-[0.5rem]">
          <div className="overflow-x-auto">
            {data ? (
              <Pagination
                value={page}
                maxPages={Math.ceil(data.tollNetworkList.count / 10)}
                handlePageChange={(page) => setPage(page)}
              ></Pagination>
            ) : null}
          </div>
        </div>
      </ListPageLayout.Loading>
    </ListPageLayout>
  );
};

export default TollNetworkListPage;
