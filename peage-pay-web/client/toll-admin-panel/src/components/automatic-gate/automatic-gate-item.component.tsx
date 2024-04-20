import { faEllipsisH, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from '@peage-pay-web/ui';
import { useRef } from 'react';
import { AutomaticGateType } from '../../__generated__/graphql';
import { useNavigate } from 'react-router-dom';
import DeleteAutomaticGateModal from './delete-automatic-gate-modal.component';
import { Utils } from '@peage-pay-web/utils';

interface AutomaticGateItemProps {
  automaticGate: AutomaticGateType;
}

const AutomaticGateItem = ({
  automaticGate,
}: AutomaticGateItemProps): JSX.Element => {
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
            <DeleteAutomaticGateModal
              modalRef={deleteModalRef}
              automaticGate={automaticGate}
            ></DeleteAutomaticGateModal>
            <MenuItem
              onClick={() =>
                navigate(`/dashboard/automatic-gate/edit/${automaticGate.id}`)
              }
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Edit</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => deleteModalRef.current?.showModal()}
              className="w-full"
              variant={'error'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Delete</MenuItem.Text>
            </MenuItem>
          </Dropdown.Content>
        </Dropdown>
      </Table.Body.Td>

      <Table.Body.Td>{automaticGate.name}</Table.Body.Td>
      <Table.Body.Td>{automaticGate.variant}</Table.Body.Td>
      <Table.Body.Td>{automaticGate.direction}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(automaticGate.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(automaticGate.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{automaticGate.id}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default AutomaticGateItem;
