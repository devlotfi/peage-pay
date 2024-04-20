import { useQuery } from '@apollo/client';
import {
  AdminDashboardLayout,
  Heading,
  ListPageLayout,
  Pagination,
  SearchForm,
  SearchValues,
  Table,
} from '@peage-pay-web/ui';
import { useState } from 'react';
import { RfidTagSearchFields, RfidTagType } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Utils } from '@peage-pay-web/utils';
import { RFID_TAG_LIST } from '../../graphql/queries';
import { useParams } from 'react-router-dom';
import RfidTagItem from '../../components/rfid-tag/rfid-tag-item.component';

const initialValues: SearchValues<RfidTagSearchFields> = {
  search: '',
  field: RfidTagSearchFields.RfidSearch,
};

const RfisTagListPage = (): JSX.Element => {
  const { baseUserId } = useParams();
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(RFID_TAG_LIST, {
    variables: {
      rfidTagListInput: {
        baseUserId: baseUserId as string,
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
        handleSearch={(searchData) => setSearchData(searchData)}
        initialFieldSearch={RfidTagSearchFields.RfidSearch}
        fieldSelectOptions={Utils.renderFieldOptions(RfidTagSearchFields)}
      ></SearchForm>

      <ListPageLayout.Title>
        <Heading className="text-[20pt]">
          <Heading.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>Rfid tag list</Heading.Text>
        </Heading>
      </ListPageLayout.Title>

      <AdminDashboardLayout.Loading loading={loading}>
        <AdminDashboardLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.rfidTagList.list}>
            <Table.Container>
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>Rfid</Table.Head.Th>
                    <Table.Head.Th>Registration number</Table.Head.Th>
                    <Table.Head.Th>Created at</Table.Head.Th>
                    <Table.Head.Th>Updated at</Table.Head.Th>
                    <Table.Head.Th>Id</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {data?.rfidTagList.list.map((rfidTag) => (
                    <RfidTagItem
                      key={rfidTag.id}
                      rfidTag={rfidTag as RfidTagType}
                    ></RfidTagItem>
                  ))}
                </Table.Body>
              </Table>
            </Table.Container>
          </ListPageLayout.Empty>
        </AdminDashboardLayout.Error>

        <ListPageLayout.Footer>
          {data ? (
            <Pagination
              value={page}
              maxPages={Math.ceil(data.rfidTagList.count / 10)}
              handlePageChange={(page) => setPage(page)}
            ></Pagination>
          ) : null}
        </ListPageLayout.Footer>
      </AdminDashboardLayout.Loading>
    </ListPageLayout>
  );
};

export default RfisTagListPage;
