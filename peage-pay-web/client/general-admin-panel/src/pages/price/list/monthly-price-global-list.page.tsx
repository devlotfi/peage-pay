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
import { MONTHLY_PRICE_GLOBAL_LIST } from "../../../graphql/queries";
import { MonthlyPriceType } from "../../../__generated__/graphql";
import MonthlyPriceListItem from "../../../components/price/item/monthly-price-item.component";

const MonthlyPriceGlobalListPage = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);

  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useQuery(MONTHLY_PRICE_GLOBAL_LIST, {
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
      <ListPageLayout.Title>
        <Heading className="text-[20pt]">
          <Heading.Icon position={"left"}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Heading.Icon>
          <Heading.Text>Monthly price global list</Heading.Text>
        </Heading>
      </ListPageLayout.Title>

      <AdminDashboardLayout.Loading loading={listLoading}>
        <AdminDashboardLayout.Error error={listError}>
          <ListPageLayout.Empty list={listData?.monthlyPriceGlobalList.list}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>Id</Table.Head.Th>
                    <Table.Head.Th>Start day</Table.Head.Th>
                    <Table.Head.Th>End day</Table.Head.Th>
                    <Table.Head.Th>Months</Table.Head.Th>
                    <Table.Head.Th>Price (dzd/km)</Table.Head.Th>
                    <Table.Head.Th>Priority</Table.Head.Th>
                    <Table.Head.Th>Start time</Table.Head.Th>
                    <Table.Head.Th>End time</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {listData?.monthlyPriceGlobalList.list.map((monthlyPrice) => (
                    <MonthlyPriceListItem
                      key={monthlyPrice.price.id}
                      monthlyPrice={monthlyPrice as MonthlyPriceType}
                    ></MonthlyPriceListItem>
                  ))}
                </Table.Body>
              </Table>
            </Table.Container>
          </ListPageLayout.Empty>
        </AdminDashboardLayout.Error>
      </AdminDashboardLayout.Loading>
      <ListPageLayout.Footer>
        {listData ? (
          <Pagination
            value={page}
            maxPages={Math.ceil(listData.monthlyPriceGlobalList.count / 10)}
            handlePageChange={(page) => setPage(page)}
          ></Pagination>
        ) : null}
      </ListPageLayout.Footer>
    </ListPageLayout>
  );
};

export default MonthlyPriceGlobalListPage;
