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
import { DAILY_PRICE_GLOBAL_LIST } from "../../../graphql/queries";
import DailyPriceListItem from "../../../components/price/item/daily-price-item.component";
import { DailyPriceType } from "../../../__generated__/graphql";

const DailyPriceGlobalListPage = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);

  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useQuery(DAILY_PRICE_GLOBAL_LIST, {
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
          <ListPageLayout.Empty list={listData?.dailyPriceGlobalList.list}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>Id</Table.Head.Th>
                    <Table.Head.Th>Price (dzd/km)</Table.Head.Th>
                    <Table.Head.Th>Priority</Table.Head.Th>
                    <Table.Head.Th>Start time</Table.Head.Th>
                    <Table.Head.Th>End time</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {listData?.dailyPriceGlobalList.list.map((dailyPrice) => (
                    <DailyPriceListItem
                      key={dailyPrice.price.id}
                      dailyPrice={dailyPrice as DailyPriceType}
                    ></DailyPriceListItem>
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
              maxPages={Math.ceil(listData.dailyPriceGlobalList.count / 10)}
              handlePageChange={(page) => setPage(page)}
            ></Pagination>
          ) : null}
        </div>
      </div>
    </ListPageLayout>
  );
};

export default DailyPriceGlobalListPage;
