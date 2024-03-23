import { useQuery } from "@apollo/client";
import {
  AdminDashboardLayout,
  Heading,
  ListPageLayout,
  Pagination,
  Table,
} from "@peage-pay-web/ui";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { YEARLY_PRICE_GLOBAL_LIST } from "../../../graphql/queries";
import { YearlyPriceType } from "../../../__generated__/graphql";
import YearlyPriceListItem from "../../../components/price/item/yearly-price-item.component";

const YearlyPriceGlobalListPage = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);

  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useQuery(YEARLY_PRICE_GLOBAL_LIST, {
    variables: {
      priceListInput: {
        take: 10,
        skip: 10 * (page - 1),
      },
    },
    fetchPolicy: "network-only",
  });

  return (
    <ListPageLayout>
      <div className="flex flex-col md:flex-row md:justify-between items-start">
        <Heading className="text-[20pt]">
          <Heading.Icon position={"left"}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>Daily price global list</Heading.Text>
        </Heading>
      </div>

      <AdminDashboardLayout.Loading loading={listLoading}>
        <AdminDashboardLayout.Error error={listError}>
          <ListPageLayout.Empty list={listData?.yearlyPriceGlobalList.list}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>Id</Table.Head.Th>
                    <Table.Head.Th>Start date</Table.Head.Th>
                    <Table.Head.Th>End date</Table.Head.Th>
                    <Table.Head.Th>Price</Table.Head.Th>
                    <Table.Head.Th>Priority</Table.Head.Th>
                    <Table.Head.Th>Start time</Table.Head.Th>
                    <Table.Head.Th>End time</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {listData?.yearlyPriceGlobalList.list.map((yearlyPrice) => (
                    <YearlyPriceListItem
                      key={yearlyPrice.price.id}
                      yearlyPrice={yearlyPrice as YearlyPriceType}
                    ></YearlyPriceListItem>
                  ))}
                </Table.Body>
              </Table>
            </Table.Container>
          </ListPageLayout.Empty>
        </AdminDashboardLayout.Error>
      </AdminDashboardLayout.Loading>
      <div className="flex justify-center mt-[0.5rem]">
        <div className="overflow-x-auto">
          {listData ? (
            <Pagination
              value={page}
              maxPages={Math.ceil(listData.yearlyPriceGlobalList.count / 10)}
              handlePageChange={(page) => setPage(page)}
            ></Pagination>
          ) : null}
        </div>
      </div>
    </ListPageLayout>
  );
};

export default YearlyPriceGlobalListPage;
