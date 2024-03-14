import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Modal,
  Heading,
  ListPageLayout,
  SearchForm,
  Table,
  Button,
} from '@peage-pay-web/ui';
import {
  TollNetworkType,
  TollSearchFields,
  TollType,
} from '../../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { TOLL_LIST } from '../../graphql/queries';
import TollPickerItem from './toll-picker-item.component';

interface TollListSearchValues {
  search: string;
  field: TollSearchFields;
  page: number;
}

const initialValues: TollListSearchValues = {
  search: '',
  field: TollSearchFields.NameSearch,
  page: 1,
};

interface TollPickerProps {
  value: TollType | null;
  onChange?: (toll: TollType | null) => void;
  modalRef: React.RefObject<HTMLDialogElement>;
  tollNetwork: TollNetworkType;
}

const TollPicker = ({
  onChange,
  modalRef,
  value,
  tollNetwork,
}: TollPickerProps): JSX.Element => {
  const [searchData, setSearchData] = React.useState(initialValues);
  const { data, loading, error } = useQuery(TOLL_LIST, {
    variables: {
      tollListInput: {
        take: 10,
        skip: 10 * (searchData.page - 1),
        [searchData.field]: searchData.search,
        tollNetworkId: tollNetwork.id,
      },
    },
    fetchPolicy: 'network-only',
  });
  const renderFieldOptions = () => {
    return (
      <>
        {Object.keys(TollSearchFields).map((key) => {
          const keyValue =
            TollSearchFields[key as keyof typeof TollSearchFields];
          return (
            <option key={keyValue} value={keyValue}>
              {keyValue}
            </option>
          );
        })}
      </>
    );
  };
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
              initialFieldSearch={TollSearchFields.NameSearch}
              fieldSelectOptions={renderFieldOptions()}
            ></SearchForm>

            <Heading className="text-[20pt] mb-[1rem]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Toll list</Heading.Text>
            </Heading>

            <ListPageLayout.Loading loading={loading}>
              <ListPageLayout.Error error={error}>
                <ListPageLayout.Empty list={data?.tollList}>
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
                        {data?.tollList.map((toll) => (
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
              </ListPageLayout.Error>
            </ListPageLayout.Loading>
          </ListPageLayout>
        </Modal.Content>
      </Modal.Window>
    </Modal>
  );
};

export default TollPicker;
