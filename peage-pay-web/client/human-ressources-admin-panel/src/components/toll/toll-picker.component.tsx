import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  Heading,
  ListPageLayout,
  SearchForm,
  Table,
  Button,
  SearchValues,
  Pagination,
  AdminDashboardLayout,
} from "@peage-pay-web/ui";
import { TollSearchFields, TollType } from "../../__generated__/graphql";
import { useQuery } from "@apollo/client";
import { TOLL_LIST } from "../../graphql/queries";
import TollPickerItem from "./toll-picker-item.component";
import { RefObject, useState } from "react";
import { Utils } from "@peage-pay-web/utils";

const initialValues: SearchValues<TollSearchFields> = {
  search: "",
  field: TollSearchFields.NameSearch,
};

interface TollPickerProps {
  value: TollType | null;
  onChange?: (toll: TollType | null) => void;
  modalRef: RefObject<HTMLDialogElement>;
}

const TollPicker = ({
  onChange,
  modalRef,
  value,
}: TollPickerProps): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(TOLL_LIST, {
    variables: {
      tollListInput: {
        take: 10,
        skip: 10 * (page - 1),
        [searchData.field]: searchData.search,
      },
    },
    fetchPolicy: "network-only",
  });
  const handleTollSelected = (toll: TollType) => {
    if (onChange) {
      onChange(toll);
    }
  };
  const handleTollUnselected = () => {
    if (onChange) {
      onChange(null);
    }
  };

  return (
    <Modal modalRef={modalRef} className="h-screen w-screen">
      <Modal.Window className="overflow-y-auto">
        <Modal.Header>
          <div className="flex items-center justify-between w-full">
            <div className="flex">Pick a toll</div>
            <Button
              onClick={() => modalRef.current?.close()}
              variant={"base-200"}
            >
              <Button.Icon position={"left"}>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Close</Button.Content>
            </Button>
          </div>
        </Modal.Header>
        <Modal.Content>
          <ListPageLayout>
            <SearchForm
              handleSearch={(searchData) => setSearchData(searchData)}
              initialFieldSearch={TollSearchFields.NameSearch}
              fieldSelectOptions={Utils.renderFieldOptions(TollSearchFields)}
            ></SearchForm>

            <ListPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={"left"}>
                  <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>Toll list</Heading.Text>
              </Heading>
            </ListPageLayout.Title>

            <AdminDashboardLayout.Loading loading={loading}>
              <AdminDashboardLayout.Error error={error}>
                <ListPageLayout.Empty list={data?.tollList.list}>
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
                        {data?.tollList.list.map((toll) => (
                          <TollPickerItem
                            key={toll.id}
                            toll={toll as TollType}
                            selectedToll={value}
                            onTollSelected={handleTollSelected}
                            onTollUnselected={handleTollUnselected}
                          ></TollPickerItem>
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
                    maxPages={Math.ceil(data.tollList.count / 10)}
                    handlePageChange={(page) => setPage(page)}
                  ></Pagination>
                ) : null}
              </ListPageLayout.Footer>
            </AdminDashboardLayout.Loading>
          </ListPageLayout>
        </Modal.Content>
      </Modal.Window>
    </Modal>
  );
};

export default TollPicker;
