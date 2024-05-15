import { faEllipsisH, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from '@peage-pay-web/ui';
import { useRef } from 'react';
import { RfidTagType } from '../../__generated__/graphql';
import DeleteRfidTagModal from './delete-rfid-tag-modal.component';
import { Utils } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

interface RfidTagItemProps {
  rfidTag: RfidTagType;
}

const RfidTagItem = ({ rfidTag }: RfidTagItemProps): JSX.Element => {
  const { t } = useTranslation();
  const deleteModalRef = useRef<HTMLDialogElement>(null);

  return (
    <Table.Body.Tr variant={'zebra'}>
      <Table.Body.Td>
        <Dropdown
          mainElement={
            <Dropdown.Main>
              <IconButtonOutline className="min-h-[2rem] min-w-[2rem] h-[2rem] w-[2rem]">
                <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
              </IconButtonOutline>
            </Dropdown.Main>
          }
        >
          <Dropdown.Content position={'bottom-left'}>
            <DeleteRfidTagModal
              modalRef={deleteModalRef}
              rfidTag={rfidTag}
            ></DeleteRfidTagModal>
            <MenuItem
              onClick={() => deleteModalRef.current?.showModal()}
              className="w-full"
              variant={'error'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('DELETE')}</MenuItem.Text>
            </MenuItem>
          </Dropdown.Content>
        </Dropdown>
      </Table.Body.Td>
      <Table.Body.Td>{rfidTag.rfid}</Table.Body.Td>
      <Table.Body.Td>{rfidTag.registrationNumber}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(rfidTag.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(rfidTag.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{rfidTag.id}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default RfidTagItem;
