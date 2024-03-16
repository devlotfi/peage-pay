import { useQuery } from '@apollo/client';
import { HIGHWAY_LIST } from '../../graphql/queries';
import {
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

const initialValues: SearchValues<HighwaySearchFields> = {
  search: '',
  field: HighwaySearchFields.NameSearch,
};

const HighwayListPage = (): JSX.Element => {
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
        className="mb-[1rem]"
        handleSearch={(searchData) => setSearchData(searchData)}
        initialFieldSearch={HighwaySearchFields.NameSearch}
        fieldSelectOptions={ListPageLayout.renderFieldOptions(
          HighwaySearchFields,
        )}
      ></SearchForm>

      <Heading className="text-[20pt] mb-[1rem]">
        <Heading.Icon position={'left'}>
          <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
        </Heading.Icon>
        <Heading.Text>Highway list</Heading.Text>
      </Heading>

      <ListPageLayout.Loading loading={loading}>
        <ListPageLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.highwayList.list}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>Id</Table.Head.Th>
                    <Table.Head.Th>Name</Table.Head.Th>
                    <Table.Head.Th>Code</Table.Head.Th>
                    <Table.Head.Th>Created at</Table.Head.Th>
                    <Table.Head.Th>Updated at</Table.Head.Th>
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
        </ListPageLayout.Error>
        <div className="flex justify-center mt-[0.5rem]">
          <div className="overflow-x-auto">
            {data ? (
              <Pagination
                value={page}
                maxPages={Math.ceil(data.highwayList.count / 10)}
                handlePageChange={(page) => setPage(page)}
              ></Pagination>
            ) : null}
          </div>
        </div>
      </ListPageLayout.Loading>
    </ListPageLayout>
  );
};

export default HighwayListPage;
