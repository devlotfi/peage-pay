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
import { HighwaySearchFields, HighwayType } from '../../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { HIGHWAY_LIST } from '../../graphql/queries';
import HighwayPickerItem from './highway-picker-item.component';

interface HighwayListSearchValues {
  search: string;
  field: HighwaySearchFields;
  page: number;
}

const initialValues: HighwayListSearchValues = {
  search: '',
  field: HighwaySearchFields.NameSearch,
  page: 1,
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
  const [searchData, setSearchData] = React.useState(initialValues);
  const { data, loading, error } = useQuery(HIGHWAY_LIST, {
    variables: {
      highwayListInput: {
        take: 10,
        skip: 10 * (searchData.page - 1),
        [searchData.field]: searchData.search,
      },
    },
    fetchPolicy: 'network-only',
  });
  const renderFieldOptions = () => {
    return (
      <>
        {Object.keys(HighwaySearchFields).map((key) => {
          const keyValue =
            HighwaySearchFields[key as keyof typeof HighwaySearchFields];
          return (
            <option key={keyValue} value={keyValue}>
              {keyValue}
            </option>
          );
        })}
      </>
    );
  };
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
              fieldSelectOptions={renderFieldOptions()}
            ></SearchForm>

            <Heading className="text-[20pt] mb-[1rem]">
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Highway list</Heading.Text>
            </Heading>

            <ListPageLayout.Loading loading={loading}>
              <ListPageLayout.Error error={error}>
                <ListPageLayout.Empty list={data?.highwayList}>
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
                        {data?.highwayList.map((highway) => (
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
            </ListPageLayout.Loading>
          </ListPageLayout>
        </Modal.Content>
      </Modal.Window>
    </Modal>
  );
};

export default HighwayPicker;
