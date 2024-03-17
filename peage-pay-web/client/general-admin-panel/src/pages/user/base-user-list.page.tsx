import { useQuery } from '@apollo/client';
import { BASE_USER_LIST } from '../../graphql/queries';
import {
  Heading,
  ListPageLayout,
  Pagination,
  SearchForm,
  SearchValues,
  Table,
} from '@peage-pay-web/ui';
import { useState } from 'react';
import { BaseUserSearchFields } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import BaseUserItem from '../../components/base-user/base-user-item.component';
import { Utils } from '@peage-pay-web/utils';

const initialValues: SearchValues<BaseUserSearchFields> = {
  search: '',
  field: BaseUserSearchFields.FirstNameSearch,
};

const HighwayListPage = (): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(BASE_USER_LIST, {
    variables: {
      baseUserListInput: {
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
        initialFieldSearch={initialValues.field}
        fieldSelectOptions={Utils.renderFieldOptions(BaseUserSearchFields)}
      ></SearchForm>

      <Heading className="text-[20pt] mb-[1rem]">
        <Heading.Icon position={'left'}>
          <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
        </Heading.Icon>
        <Heading.Text>User list</Heading.Text>
      </Heading>

      <ListPageLayout.Loading loading={loading}>
        <ListPageLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.baseUserList.list}>
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
                  {data?.baseUserList.list.map((baseUser) => (
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
        <div className="flex justify-center mt-[0.5rem]">
          <div className="overflow-x-auto">
            {data ? (
              <Pagination
                value={page}
                maxPages={Math.ceil(data.baseUserList.count / 10)}
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
