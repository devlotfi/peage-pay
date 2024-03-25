import { faEllipsisH, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from "@peage-pay-web/ui";
import { ModeratorType } from "../../__generated__/graphql";
import { useRef } from "react";
import { MODERATOR_LIST } from "../../graphql/queries";
import RemoveModeratorRoleModal from "./remove-moderator-role-modal.component";

interface ModeratorItemProps {
  moderator: ModeratorType;
}

const ModeratorItem = ({ moderator }: ModeratorItemProps): JSX.Element => {
  const removeModeratorRoleModalRef = useRef<HTMLDialogElement>(null);

  return (
    <Table.Body.Tr variant={"zebra"}>
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
          <Dropdown.Content position={"bottom-left"}>
            <RemoveModeratorRoleModal
              modalRef={removeModeratorRoleModalRef}
              baseUser={moderator.baseUser}
              refetchQuery={MODERATOR_LIST}
            ></RemoveModeratorRoleModal>

            <MenuItem
              onClick={() => removeModeratorRoleModalRef.current?.showModal()}
              className="w-full"
              variant={"error"}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Remove (moderator) role</MenuItem.Text>
            </MenuItem>
          </Dropdown.Content>
        </Dropdown>
      </Table.Body.Td>
      <Table.Body.Td>{moderator.baseUser.id}</Table.Body.Td>
      <Table.Body.Td>{moderator.baseUser.firstName}</Table.Body.Td>
      <Table.Body.Td>{moderator.baseUser.lastName}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(moderator.baseUser.createdAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(moderator.baseUser.updatedAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default ModeratorItem;
