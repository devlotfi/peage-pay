import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons';
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
} from '@peage-pay-web/ui';
import { useQuery } from '@apollo/client';
import AutomaticGatePickerItem from './automatic-gate-picker-item.component';
import { RefObject, useState } from 'react';
import { Utils } from '@peage-pay-web/utils';
import {
  TollType,
  AutomaticGateSearchFields,
  AutomaticGateType,
} from '../../../__generated__/graphql';
import { AUTOMATIC_GATE_LIST } from '../../../graphql/queries';

const initialValues: SearchValues<AutomaticGateSearchFields> = {
  search: '',
  field: AutomaticGateSearchFields.NameSearch,
};

interface AutomaticGatePickerProps {
  value: AutomaticGateType | null;
  onChange?: (automaticGate: AutomaticGateType | null) => void;
  modalRef: RefObject<HTMLDialogElement>;
  toll: TollType;
}

const AutomaticGatePicker = ({
  onChange,
  modalRef,
  value,
  toll,
}: AutomaticGatePickerProps): JSX.Element => {
  const [searchData, setSearchData] = useState(initialValues);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useQuery(AUTOMATIC_GATE_LIST, {
    variables: {
      automaticGateListInput: {
        take: 10,
        skip: 10 * (page - 1),
        [searchData.field]: searchData.search,
        tollId: toll.id,
      },
    },
    fetchPolicy: 'network-only',
  });
  const handleSelected = (automaticGate: AutomaticGateType) => {
    if (onChange) {
      onChange(automaticGate);
    }
  };
  const handleUnselected = () => {
    if (onChange) {
      onChange(null);
    }
  };

  return (
    <Modal modalRef={modalRef} className="h-screen w-screen">
      <Modal.Window className="overflow-y-auto">
        <Modal.Header>
          <div className="flex items-center justify-between w-full">
            <div className="flex">Pick an automatic gate</div>
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
              handleSearch={(searchData) => setSearchData(searchData)}
              initialFieldSearch={AutomaticGateSearchFields.NameSearch}
              fieldSelectOptions={Utils.renderFieldOptions(
                AutomaticGateSearchFields,
              )}
            ></SearchForm>

            <ListPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>Automatic gate list</Heading.Text>
              </Heading>
            </ListPageLayout.Title>

            <AdminDashboardLayout.Loading loading={loading}>
              <AdminDashboardLayout.Error error={error}>
                <ListPageLayout.Empty list={data?.automaticGateList.list}>
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
                        {data?.automaticGateList.list.map((automaticGate) => (
                          <AutomaticGatePickerItem
                            key={automaticGate.id}
                            automaticGate={automaticGate as AutomaticGateType}
                            selectedAutomaticGate={value}
                            onAutomaticGateSelected={handleSelected}
                            onAutomaticGateUnselected={handleUnselected}
                          ></AutomaticGatePickerItem>
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
                    maxPages={Math.ceil(data.automaticGateList.count / 10)}
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

export default AutomaticGatePicker;
