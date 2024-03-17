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
import { HighwaySearchFields, HighwayType } from '../../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { HIGHWAY_LIST } from '../../graphql/queries';
import HighwayPickerItem from './highway-picker-item.component';
import { useState } from 'react';
import { Utils } from '@peage-pay-web/utils';

const initialValues: SearchValues<HighwaySearchFields> = {
  search: '',
  field: HighwaySearchFields.NameSearch,
};

interface HighwayPickerProps {
  value: HighwayType | null;
  onChange?: (highway: HighwayType | null) => void;
  modalRef: React.RefObject<HTMLDialogElement>;
}

const HighwayPicker = ({
  onChange,
  modalRef,
  value,
}: HighwayPickerProps): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(HIGHWAY_LIST, {
    variables: {
      highwayListInput: {
        take: 10,
        skip: 10 * (page - 1),
        [searchData.field]: searchData.search,
      },
    },
    fetchPolicy: 'network-only',
  });
  const handleHighwaySelected = (highway: HighwayType) => {
    if (onChange) {
      onChange(highway);
    }
  };
  const handleHighwayUnselected = () => {
    if (onChange) {
      onChange(null);
    }
  };

  return (
    <Modal modalRef={modalRef} className="h-screen w-screen">
      <Modal.Window className="flex overflow-y-auto">
        <Modal.Header>
          <div className="flex items-center justify-between w-full">
            <div className="flex">Pick a highway</div>
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
              initialFieldSearch={HighwaySearchFields.NameSearch}
              fieldSelectOptions={Utils.renderFieldOptions(HighwaySearchFields)}
            ></SearchForm>

            <Heading className="text-[20pt] mb-[1rem]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Highway list</Heading.Text>
            </Heading>

            <ListPageLayout.Loading loading={loading}>
              <ListPageLayout.Error error={error}>
                <ListPageLayout.Empty list={data?.highwayList.list}>
                  <Table.Container className="h-full">
                    <Table>
                      <Table.Head>
                        <Table.Head.Tr>
                          <Table.Head.Th></Table.Head.Th>
                          <Table.Head.Th>Id</Table.Head.Th>
                          <Table.Head.Th>Name</Table.Head.Th>
                          <Table.Head.Th>Code</Table.Head.Th>
                          <Table.Head.Th>Created At</Table.Head.Th>
                          <Table.Head.Th>Updated At</Table.Head.Th>
                        </Table.Head.Tr>
                      </Table.Head>
                      <Table.Body>
                        {data?.highwayList.list.map((highway) => (
                          <HighwayPickerItem
                            key={highway.id}
                            highway={highway}
                            selectedHighway={value}
                            onHighwaySelected={handleHighwaySelected}
                            onHighwayUnselected={handleHighwayUnselected}
                          ></HighwayPickerItem>
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
                      maxPages={Math.ceil(data.highwayList.count / 10)}
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

export default HighwayPicker;
