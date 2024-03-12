import { useQuery } from '@apollo/client';
import { HIGHWAY_LIST } from '../../graphql/queries';
import { ListPageLayout, SearchForm, Table } from '@peage-pay-web/ui';
import { useState } from 'react';
import { HighwaySearchFields } from '../../__generated__/graphql';
import HighwayItem from '../../components/highway-item.component';

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

  const renderData = () => {
    if (loading) {
      return <ListPageLayout.Loading></ListPageLayout.Loading>;
    } else if (error) {
      return <ListPageLayout.Error></ListPageLayout.Error>;
    } else {
      if (data?.highwayList && data.highwayList.length) {
        return (
          <Table.Container>
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
                  <HighwayItem highway={highway}></HighwayItem>
                ))}
              </Table.Body>
            </Table>
          </Table.Container>
        );
      } else {
        return <ListPageLayout.Empty></ListPageLayout.Empty>;
      }
    }
  };

  return (
    <ListPageLayout>
      <SearchForm
        className="mb-[1rem]"
        handleSearch={(searchData) => setSearchData(searchData)}
        initialFieldSearch={HighwaySearchFields.NameSearch}
        fieldSelectOptions={
          <>
            {Object.keys(HighwaySearchFields).map((key) => (
              <option
                value={
                  HighwaySearchFields[key as keyof typeof HighwaySearchFields]
                }
              >
                {HighwaySearchFields[key as keyof typeof HighwaySearchFields]}
              </option>
            ))}
          </>
        }
      ></SearchForm>
      {renderData()}
    </ListPageLayout>
  );
};

export default HighwayListPage;
