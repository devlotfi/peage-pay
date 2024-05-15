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
  AdminDashboardLayout,
} from '@peage-pay-web/ui';
import { HighwaySearchFields, HighwayType } from '../../__generated__/graphql';
import { useQuery } from '@apollo/client';
import { HIGHWAY_LIST } from '../../graphql/queries';
import HighwayPickerItem from './highway-picker-item.component';
import { useState } from 'react';
import { Utils } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
            <div className="flex">{t('PICK_HIGHWAY')}</div>
            <Button
              onClick={() => modalRef.current?.close()}
              variant={'base-200'}
            >
              <Button.Icon position={'left'}>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </Button.Icon>
              <Button.Content>{t('CLOSE')}</Button.Content>
            </Button>
          </div>
        </Modal.Header>
        <Modal.Content>
          <ListPageLayout>
            <SearchForm
              handleSearch={(searchData) => setSearchData(searchData)}
              initialFieldSearch={HighwaySearchFields.NameSearch}
              fieldSelectOptions={Utils.renderFieldOptions(HighwaySearchFields)}
            ></SearchForm>

            <ListPageLayout.Title>
              <Heading className="text-[20pt]">
                <Heading.Icon position={'left'}>
                  <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>{t('HIGHWAY_LIST')}</Heading.Text>
              </Heading>
            </ListPageLayout.Title>

            <AdminDashboardLayout.Loading loading={loading}>
              <AdminDashboardLayout.Error error={error}>
                <ListPageLayout.Empty list={data?.highwayList.list}>
                  <Table.Container className="h-full">
                    <Table>
                      <Table.Head>
                        <Table.Head.Tr>
                          <Table.Head.Th></Table.Head.Th>
                          <Table.Head.Th>{t('NAME')}</Table.Head.Th>
                          <Table.Head.Th>{t('CODE')}</Table.Head.Th>
                          <Table.Head.Th>{t('CREATED_AT')}</Table.Head.Th>
                          <Table.Head.Th>{t('UPDATED_AT')}</Table.Head.Th>
                          <Table.Head.Th>{t('ID')}</Table.Head.Th>
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
              </AdminDashboardLayout.Error>
              <ListPageLayout.Footer>
                {data ? (
                  <Pagination
                    value={page}
                    maxPages={Math.ceil(data.highwayList.count / 10)}
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

export default HighwayPicker;
