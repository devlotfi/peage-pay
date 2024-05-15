import {
  faEllipsisH,
  faList,
  faNetworkWired,
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from '@peage-pay-web/ui';
import { useRef } from 'react';
import { TollNetworkType } from '../../__generated__/graphql';
import { useNavigate } from 'react-router-dom';
import DeleteTollNetworkModal from './delete-toll-network-modal.component';
import { Utils } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

interface TollNetworkItemProps {
  tollNetwork: TollNetworkType;
}

const TollNetworkItem = ({
  tollNetwork,
}: TollNetworkItemProps): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
            <DeleteTollNetworkModal
              modalRef={deleteModalRef}
              tollNetwork={tollNetwork}
            ></DeleteTollNetworkModal>
            <MenuItem
              onClick={() => navigate(`/dashboard/toll/list/${tollNetwork.id}`)}
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('TOLL_LIST')}</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/dashboard/toll/add/${tollNetwork.id}`)}
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('ADD_TOLL')}</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() =>
                navigate(`/dashboard/toll/section/list/${tollNetwork.id}`)
              }
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('SECTION_LIST')}</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() =>
                navigate(`/dashboard/toll/section/add/${tollNetwork.id}`)
              }
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('ADD_SECTION')}</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() =>
                navigate(`/dashboard/toll/toll-network/graph/${tollNetwork.id}`)
              }
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faNetworkWired}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('GRAPH')}</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() =>
                navigate(`/dashboard/toll/toll-network/edit/${tollNetwork.id}`)
              }
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>{t('EDIT')}</MenuItem.Text>
            </MenuItem>
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
      <Table.Body.Td>{tollNetwork.name}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(tollNetwork.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(tollNetwork.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{tollNetwork.id}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default TollNetworkItem;
