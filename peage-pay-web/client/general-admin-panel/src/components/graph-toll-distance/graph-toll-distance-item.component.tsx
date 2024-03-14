import { faEllipsisH, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from '@peage-pay-web/ui';
import { useRef } from 'react';
import { GraphTollDistanceType } from '../../__generated__/graphql';
import DeleteGraphTollDistanceModal from './delete-highway-toll-distance-modal.component';

interface GraphTollDistanceItemProps {
  graphTollDistance: GraphTollDistanceType;
}

const GraphTollDistanceItem = ({
  graphTollDistance,
}: GraphTollDistanceItemProps): JSX.Element => {
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
            <DeleteGraphTollDistanceModal
              modalRef={deleteModalRef}
              graphTollDistance={graphTollDistance}
            ></DeleteGraphTollDistanceModal>
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
      <Table.Body.Td>{graphTollDistance.fromToll.name}</Table.Body.Td>
      <Table.Body.Td>{graphTollDistance.toToll.name}</Table.Body.Td>
      <Table.Body.Td>{graphTollDistance.distance} km</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default GraphTollDistanceItem;
