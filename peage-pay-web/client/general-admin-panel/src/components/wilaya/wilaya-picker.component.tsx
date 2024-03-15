import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Modal,
  Heading,
  ListPageLayout,
  SearchForm,
  Table,
  Button,
  Pagination,
  SearchValues,
} from '@peage-pay-web/ui';
import { WilayaSearchFields, WilayaType } from '../../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { WILAYA_LIST } from '../../graphql/queries';
import WilayaItem from './wilaya-item.component';
import { useState } from 'react';

const initialValues: SearchValues<WilayaSearchFields> = {
  search: '',
  field: WilayaSearchFields.NameSearch,
};

interface WilayaPickerProps {
  value: WilayaType | null;
  onChange?: (wilaya: WilayaType | null) => void;
  modalRef: React.RefObject<HTMLDialogElement>;
}

const WilayaPicker = ({
  onChange,
  modalRef,
  value,
}: WilayaPickerProps): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(WILAYA_LIST, {
    variables: {
      wilayaListInput: {
        take: 10,
        skip: 10 * (page - 1),
        [searchData.field]: searchData.search,
      },
    },
    fetchPolicy: 'network-only',
  });
  const renderFieldOptions = () => {
    return (
      <>
        {Object.keys(WilayaSearchFields).map((key) => {
          const keyValue =
            WilayaSearchFields[key as keyof typeof WilayaSearchFields];
          return (
            <option key={keyValue} value={keyValue}>
              {keyValue}
            </option>
          );
        })}
      </>
    );
  };
  const handleWilayaSelected = (wilaya: WilayaType) => {
    if (onChange) {
      onChange(wilaya);
    }
  };
  const handleWilayaUnselected = () => {
    if (onChange) {
      onChange(null);
    }
  };

  return (
    <Modal modalRef={modalRef} className="h-screen w-screen">
      <Modal.Window className="overflow-y-auto">
        <Modal.Header>
          <div className="flex items-center justify-between w-full">
            <div className="flex">Pick a wilaya</div>
            <Button
              onClick={() => modalRef.current?.close()}
              variant={'base-200'}
            >
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>Close</Button.Content>
            </Button>
          </div>
        </Modal.Header>
        <Modal.Content>
          <ListPageLayout>
            <SearchForm
              className="mb-[1rem]"
              handleSearch={(searchData) => setSearchData(searchData)}
              initialFieldSearch={WilayaSearchFields.NameSearch}
              fieldSelectOptions={renderFieldOptions()}
            ></SearchForm>

            <Heading className="text-[20pt] mb-[1rem]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Wilaya list</Heading.Text>
            </Heading>

            <ListPageLayout.Loading loading={loading}>
              <ListPageLayout.Error error={error}>
                <ListPageLayout.Empty list={data?.wilayaList.list}>
                  <Table.Container className="h-full">
                    <Table>
                      <Table.Head>
                        <Table.Head.Tr>
                          <Table.Head.Th></Table.Head.Th>
                          <Table.Head.Th>Id</Table.Head.Th>
                          <Table.Head.Th>Name</Table.Head.Th>
                          <Table.Head.Th>Code</Table.Head.Th>
                        </Table.Head.Tr>
                      </Table.Head>
                      <Table.Body>
                        {data?.wilayaList.list.map((wilaya) => (
                          <WilayaItem
                            key={wilaya.id}
                            wilaya={wilaya}
                            selectedWilaya={value}
                            onWilayaSelected={handleWilayaSelected}
                            onWilayaUnselected={handleWilayaUnselected}
                          ></WilayaItem>
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
                      maxPages={Math.ceil(data.wilayaList.count / 10)}
                      handlePageChange={(page) => setPage(page)}
                    ></Pagination>
                  ) : null}
                </div>
              </div>
            </ListPageLayout.Loading>
          </ListPageLayout>
        </Modal.Content>
      </Modal.Window>
    </Modal>
  );
};

export default WilayaPicker;
