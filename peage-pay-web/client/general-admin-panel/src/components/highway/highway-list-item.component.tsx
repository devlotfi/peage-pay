import { faEllipsisH, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from '@peage-pay-web/ui';
import { useRef } from 'react';
import { HighwayType } from '../../__generated__/graphql';
import { useNavigate } from 'react-router-dom';
import DeleteHighwayModal from './delete-highway-modal.component';

interface HighwatListItemProps {
  highway: HighwayType;
}

const HighwayListItem = ({ highway }: HighwatListItemProps): JSX.Element => {
  const navigate = useNavigate();
  const deleteModalRef = useRef<HTMLDialogElement>(null);

  return (
    <Table.Body.Tr>
      <Table.Body.Td>
        <Dropdown
          mainElement={
            <Dropdown.Main>
              {
                <IconButtonOutline className="min-h-[2rem] min-w-[2rem] h-[2rem] w-[2rem]">
                  <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                </IconButtonOutline>
              }
            </Dropdown.Main>
          }
        >
          <Dropdown.Content position={'bottom-left'}>
            <DeleteHighwayModal
              modalRef={deleteModalRef}
              highway={highway}
            ></DeleteHighwayModal>
            <MenuItem
              onClick={() => navigate(`/dashboard/highway/edit/${highway.id}`)}
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
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon
                  className="text-error-100"
                  icon={faTrash}
                ></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text className="text-error-100">Delete</MenuItem.Text>
            </MenuItem>
          </Dropdown.Content>
        </Dropdown>
      </Table.Body.Td>
      <Table.Body.Td>{highway.id}</Table.Body.Td>
      <Table.Body.Td>{highway.name}</Table.Body.Td>
      <Table.Body.Td>{highway.code}</Table.Body.Td>
      <Table.Body.Td>{highway.createdAt}</Table.Body.Td>
      <Table.Body.Td>{highway.updatedAt}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default HighwayListItem;
