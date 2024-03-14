import { useQuery } from '@apollo/client';
import { BASE_USER_LIST } from '../../graphql/queries';
import { Heading, ListPageLayout, SearchForm, Table } from '@peage-pay-web/ui';
import { useState } from 'react';
import { BaseUserSearchFields } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import BaseUserItem from '../../components/base-user/base-user-item.component';

interface HighwayListSearchValues {
  search: string;
  field: BaseUserSearchFields;
  page: number;
}

const initialValues: HighwayListSearchValues = {
  search: '',
  field: BaseUserSearchFields.FirstNameSearch,
  page: 1,
};

const HighwayListPage = (): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const { data, loading, error } = useQuery(BASE_USER_LIST, {
    variables: {
      baseUserListInput: {
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
        {Object.keys(BaseUserSearchFields).map((key) => {
          const keyValue =
            BaseUserSearchFields[key as keyof typeof BaseUserSearchFields];
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
        initialFieldSearch={initialValues.field}
        fieldSelectOptions={renderFieldOptions()}
      ></SearchForm>

      <Heading className="text-[20pt] mb-[1rem]">
        <Heading.Icon position={'left'}>
          <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
        </Heading.Icon>
        <Heading.Text>User list</Heading.Text>
      </Heading>

      <ListPageLayout.Loading loading={loading}>
        <ListPageLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.baseUserList}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>Id</Table.Head.Th>
                    <Table.Head.Th>Roles</Table.Head.Th>
                    <Table.Head.Th>First name</Table.Head.Th>
                    <Table.Head.Th>Last name</Table.Head.Th>
                    <Table.Head.Th>Created at</Table.Head.Th>
                    <Table.Head.Th>Updated at</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {data?.baseUserList.map((baseUser) => (
                    <BaseUserItem
                      key={baseUser.id}
                      baseUser={baseUser}
                    ></BaseUserItem>
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
