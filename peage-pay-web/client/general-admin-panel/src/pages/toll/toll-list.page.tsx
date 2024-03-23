import { useQuery } from "@apollo/client";
import { TOLL_LIST, TOLL_NETWORK_BY_ID } from "../../graphql/queries";
import {
  AdminDashboardLayout,
  Heading,
  ListPageLayout,
  Pagination,
  SearchForm,
  SearchValues,
  Table,
} from "@peage-pay-web/ui";
import { useState } from "react";
import { TollSearchFields, TollType } from "../../__generated__/graphql";
import TollListItem from "../../components/toll/toll-list-item.component";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { Utils } from "@peage-pay-web/utils";

const initialValues: SearchValues<TollSearchFields> = {
  search: "",
  field: TollSearchFields.NameSearch,
};

const TollListPage = (): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);
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
    fetchPolicy: "network-only",
  });
  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useQuery(TOLL_LIST, {
    variables: {
      tollListInput: {
        take: 10,
        skip: 10 * (page - 1),
        [searchData.field]: searchData.search,
        tollNetworkId: tollNetworkId as string,
      },
    },
    skip: tollNetworkLoading || tollNetworkError !== undefined,
    fetchPolicy: "network-only",
  });
  return (
    <ListPageLayout>
      <AdminDashboardLayout.Loading loading={tollNetworkLoading}>
        <AdminDashboardLayout.Error error={tollNetworkError}>
          <SearchForm
            className="mb-[1rem]"
            handleSearch={(searchData) => setSearchData(searchData)}
            initialFieldSearch={TollSearchFields.NameSearch}
            fieldSelectOptions={Utils.renderFieldOptions(TollSearchFields)}
          ></SearchForm>

          <Heading className="text-[20pt]">
            <Heading.Icon position={"left"}>
              <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
            </Heading.Icon>
            <Heading.Text>Toll list</Heading.Text>
          </Heading>
          <Table.Container className="mb-[2rem]">
            <Table>
              <Table.Body>
                <Table.Body.Tr>
                  <Table.Body.Td className="text-primary-100 font-bold">
                    Toll network:
                  </Table.Body.Td>
                  <Table.Body.Td>
                    {tollNetworkData?.tollNetworkById.name}
                  </Table.Body.Td>
                </Table.Body.Tr>
              </Table.Body>
            </Table>
          </Table.Container>

          <AdminDashboardLayout.Loading loading={listLoading}>
            <AdminDashboardLayout.Error error={listError}>
              <ListPageLayout.Empty list={listData?.tollList.list}>
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
                      {listData?.tollList.list.map((toll) => (
                        <TollListItem
                          key={toll.id}
                          toll={toll as TollType}
                        ></TollListItem>
                      ))}
                    </Table.Body>
                  </Table>
                </Table.Container>
              </ListPageLayout.Empty>
            </AdminDashboardLayout.Error>
            <div className="flex justify-center mt-[0.5rem]">
              <div className="overflow-x-auto">
                {listData ? (
                  <Pagination
                    value={page}
                    maxPages={Math.ceil(listData.tollList.count / 10)}
                    handlePageChange={(page) => setPage(page)}
                  ></Pagination>
                ) : null}
              </div>
            </div>
          </AdminDashboardLayout.Loading>
        </AdminDashboardLayout.Error>
      </AdminDashboardLayout.Loading>
    </ListPageLayout>
  );
};

export default TollListPage;
