import { faEllipsisH, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from '@peage-pay-web/ui';
import { useRef } from 'react';
import DeleteSectionModal from './delete-section-modal.component';
import { SectionType } from '../../__generated__/graphql';

interface SectionItemProps {
  section: SectionType;
}

const SectionItem = ({ section }: SectionItemProps): JSX.Element => {
  const deleteModalRef = useRef<HTMLDialogElement>(null);

  return (
    <Table.Body.Tr variant={'zebra'}>
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
            <DeleteSectionModal
              modalRef={deleteModalRef}
              section={section}
            ></DeleteSectionModal>
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
      <Table.Body.Td>{section.fromToll.name}</Table.Body.Td>
      <Table.Body.Td>{section.toToll.name}</Table.Body.Td>
      <Table.Body.Td>{section.distance} km</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default SectionItem;
