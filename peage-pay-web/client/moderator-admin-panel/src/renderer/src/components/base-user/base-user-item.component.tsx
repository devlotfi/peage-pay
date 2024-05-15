import {
  faEllipsisH,
  faList,
  faPlus,
  faUserMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
  UserRolesDropdown,
} from '@peage-pay-web/ui';
import { BaseUserType } from '../../__generated__/graphql';
import { useRef } from 'react';
import DeleteBaseUserModal from './delete-base-user-modal.component';
import { useNavigate } from 'react-router-dom';
import { Utils } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

interface BaseUserItemProps {
  baseUser: BaseUserType;
}

const BaseUserItem = ({ baseUser }: BaseUserItemProps): JSX.Element => {
  const { t } = useTranslation();
  const deleteUserModalRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

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
            <DeleteBaseUserModal
              modalRef={deleteUserModalRef}
              baseUser={baseUser}
            ></DeleteBaseUserModal>

            <MenuItem
              onClick={() =>
                navigate(`/dashboard/rfid-tag/list/${baseUser.id}`)
              }
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('RFID_TAG_LIST')}</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/dashboard/rfid-tag/add/${baseUser.id}`)}
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('ADD_RFID_TAG')}</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => deleteUserModalRef.current?.showModal()}
              className="w-full"
              variant={'error'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('DELETE')}</MenuItem.Text>
            </MenuItem>
          </Dropdown.Content>
        </Dropdown>
      </Table.Body.Td>
      <Table.Body.Td>
        <UserRolesDropdown userRoles={baseUser.roles}></UserRolesDropdown>
      </Table.Body.Td>
      <Table.Body.Td>{baseUser.firstName}</Table.Body.Td>
      <Table.Body.Td>{baseUser.lastName}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(baseUser.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(baseUser.updatedAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{baseUser.id}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default BaseUserItem;
