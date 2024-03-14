import {
  faEllipsisH,
  faList,
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
import { TollType } from '../../__generated__/graphql';
import { useNavigate } from 'react-router-dom';
import DeleteTollModal from './delete-toll-modal.component';

interface TollListItemProps {
  toll: TollType;
}

const TollListItem = ({ toll }: TollListItemProps): JSX.Element => {
  const navigate = useNavigate();
  const deleteModalRef = useRef<HTMLDialogElement>(null);

  return (
    <Table.Body.Tr>
      <Table.Body.Td>
        <Dropdown
          mainElement={
            <Dropdown.Main>
              {
                <IconButtonOutline>
                  <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                </IconButtonOutline>
              }
            </Dropdown.Main>
          }
        >
          <Dropdown.Content position={'bottom-left'}>
            <DeleteTollModal
              modalRef={deleteModalRef}
              toll={toll}
            ></DeleteTollModal>
            <MenuItem
              onClick={() =>
                navigate(`/dashboard/graph-toll-distance/add/${toll.id}`)
              }
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Add graph toll distance</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() =>
                navigate(`/dashboard/graph-toll-distance/list/${toll.id}`)
              }
              className="w-full mb-[0.5rem]"
              variant={'base-100'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Graph toll diatnce list</MenuItem.Text>
            </MenuItem>

            <MenuItem
              onClick={() => navigate(`/dashboard/toll/edit/${toll.id}`)}
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
      <Table.Body.Td>{toll.id}</Table.Body.Td>
      <Table.Body.Td>{toll.name}</Table.Body.Td>
      <Table.Body.Td>{toll.wilaya.name}</Table.Body.Td>
      <Table.Body.Td>{toll.wilaya.code}</Table.Body.Td>
      <Table.Body.Td>{toll.highway.name}</Table.Body.Td>
      <Table.Body.Td>{toll.highway.code}</Table.Body.Td>
      <Table.Body.Td>{toll.createdAt}</Table.Body.Td>
      <Table.Body.Td>{toll.updatedAt}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default TollListItem;
