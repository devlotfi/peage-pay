import { useQuery } from '@apollo/client';
import { HIGHWAY_LIST } from '../../graphql/queries';
import { Heading, ListPageLayout, SearchForm, Table } from '@peage-pay-web/ui';
import { useState } from 'react';
import { HighwaySearchFields } from '../../__generated__/graphql';
import HighwayListItem from '../../components/highway/highway-list-item.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

interface HighwayListSearchValues {
  search: string;
  field: HighwaySearchFields;
  page: number;
}

const initialValues: HighwayListSearchValues = {
  search: '',
  field: HighwaySearchFields.NameSearch,
  page: 1,
};

const HighwayListPage = (): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const { data, loading, error } = useQuery(HIGHWAY_LIST, {
    variables: {
      highwayListInput: {
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
        {Object.keys(HighwaySearchFields).map((key) => {
          const keyValue =
            HighwaySearchFields[key as keyof typeof HighwaySearchFields];
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
        initialFieldSearch={HighwaySearchFields.NameSearch}
        fieldSelectOptions={renderFieldOptions()}
      ></SearchForm>

      <Heading className="text-[20pt] mb-[1rem]">
        <Heading.Icon position={'left'}>
          <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
        </Heading.Icon>
        <Heading.Text>Highway list</Heading.Text>
      </Heading>

      <ListPageLayout.Loading loading={loading}>
        <ListPageLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.highwayList}>
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
                  {data?.highwayList.map((highway) => (
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
      </ListPageLayout.Loading>
    </ListPageLayout>
  );
};

export default HighwayListPage;
