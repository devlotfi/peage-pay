import { useQuery } from '@apollo/client';
import { SUBSCRIPTION_LIST } from '../../graphql/queries';
import {
  Heading,
  ListPageLayout,
  Pagination,
  SearchForm,
  SearchValues,
  Table,
} from '@peage-pay-web/ui';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { SubscriptionSearchFields } from '../../__generated__/graphql';
import SubscriptionListItem from '../../components/subscription/subscription-item.component';
import { Utils } from '@peage-pay-web/utils';

const initialValues: SearchValues<SubscriptionSearchFields> = {
  search: '',
  field: SubscriptionSearchFields.NameSearch,
};

const SubscriptionListPage = (): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(SUBSCRIPTION_LIST, {
    variables: {
      subscriptionListInput: {
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
        initialFieldSearch={SubscriptionSearchFields.NameSearch}
        fieldSelectOptions={Utils.renderFieldOptions(SubscriptionSearchFields)}
      ></SearchForm>

      <Heading className="text-[20pt] mb-[1rem]">
        <Heading.Icon position={'left'}>
          <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
        </Heading.Icon>
        <Heading.Text>Subscription list</Heading.Text>
      </Heading>

      <ListPageLayout.Loading loading={loading}>
        <ListPageLayout.Error error={error}>
          <ListPageLayout.Empty list={data?.subscriptionList.list}>
            <Table.Container className="h-full">
              <Table>
                <Table.Head>
                  <Table.Head.Tr>
                    <Table.Head.Th></Table.Head.Th>
                    <Table.Head.Th>Id</Table.Head.Th>
                    <Table.Head.Th>Name</Table.Head.Th>
                    <Table.Head.Th>Days</Table.Head.Th>
                    <Table.Head.Th>Price</Table.Head.Th>
                    <Table.Head.Th>Created at</Table.Head.Th>
                    <Table.Head.Th>Updated at</Table.Head.Th>
                  </Table.Head.Tr>
                </Table.Head>
                <Table.Body>
                  {data?.subscriptionList.list.map((subscription) => (
                    <SubscriptionListItem
                      key={subscription.id}
                      subscription={subscription}
                    ></SubscriptionListItem>
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
                maxPages={Math.ceil(data.subscriptionList.count / 10)}
                handlePageChange={(page) => setPage(page)}
              ></Pagination>
            ) : null}
          </div>
        </div>
      </ListPageLayout.Loading>
    </ListPageLayout>
  );
};

export default SubscriptionListPage;
