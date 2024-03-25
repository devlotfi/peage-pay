import {
  faEllipsisH,
  faUserMinus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from "@peage-pay-web/ui";
import { BaseUserRolesType, BaseUserType } from "../../__generated__/graphql";
import { useRef } from "react";
import AddTollAdminRoleModal from "../toll-admin/add-toll-admin-role-modal.component";
import { BASE_USER_LIST } from "../../graphql/queries";
import RemoveTollAdminRoleModal from "../toll-admin/remove-toll-admin-role-modal.component";
import AddGateAdminRoleModal from "../gate-admin/add-gate-admin-role-modal.component";
import RemoveGateAdminRoleModal from "../gate-admin/remove-gate-admin-role-modal.component";
import AddModeratorRoleModal from "../moderator/add-moderator-role-modal.component";
import RemoveModeratorRoleModal from "../moderator/remove-moderator-role-modal.component";

interface BaseUserItemProps {
  baseUser: BaseUserType;
}

const BaseUserItem = ({ baseUser }: BaseUserItemProps): JSX.Element => {
  const addTollAdminRoleModalRef = useRef<HTMLDialogElement>(null);
  const removeTollAdminRoleModalRef = useRef<HTMLDialogElement>(null);

  const addGateAdminRoleModalRef = useRef<HTMLDialogElement>(null);
  const removeGateAdminRoleModalRef = useRef<HTMLDialogElement>(null);

  const addModeratorRoleModalRef = useRef<HTMLDialogElement>(null);
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
            <AddTollAdminRoleModal
              modalRef={addTollAdminRoleModalRef}
              baseUser={baseUser}
              refetchQuery={BASE_USER_LIST}
            ></AddTollAdminRoleModal>
            <RemoveTollAdminRoleModal
              modalRef={removeTollAdminRoleModalRef}
              baseUser={baseUser}
              refetchQuery={BASE_USER_LIST}
            ></RemoveTollAdminRoleModal>

            <AddGateAdminRoleModal
              modalRef={addGateAdminRoleModalRef}
              baseUser={baseUser}
              refetchQuery={BASE_USER_LIST}
            ></AddGateAdminRoleModal>
            <RemoveGateAdminRoleModal
              modalRef={removeGateAdminRoleModalRef}
              baseUser={baseUser}
              refetchQuery={BASE_USER_LIST}
            ></RemoveGateAdminRoleModal>

            <AddModeratorRoleModal
              modalRef={addModeratorRoleModalRef}
              baseUser={baseUser}
              refetchQuery={BASE_USER_LIST}
            ></AddModeratorRoleModal>
            <RemoveModeratorRoleModal
              modalRef={removeModeratorRoleModalRef}
              baseUser={baseUser}
              refetchQuery={BASE_USER_LIST}
            ></RemoveModeratorRoleModal>

            {!baseUser.roles.includes(BaseUserRolesType.TollAdmin) ? (
              <MenuItem
                onClick={() => addTollAdminRoleModalRef.current?.showModal()}
                className="w-full mb-[0.5rem] last:mb-0"
                variant={"base-100"}
              >
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Add (toll admin) role</MenuItem.Text>
              </MenuItem>
            ) : null}
            {baseUser.roles.includes(BaseUserRolesType.TollAdmin) ? (
              <MenuItem
                onClick={() => removeTollAdminRoleModalRef.current?.showModal()}
                className="w-full mb-[0.5rem] last:mb-0"
                variant={"error"}
              >
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Remove (toll admin) role</MenuItem.Text>
              </MenuItem>
            ) : null}

            {!baseUser.roles.includes(BaseUserRolesType.GateAdmin) ? (
              <MenuItem
                onClick={() => addGateAdminRoleModalRef.current?.showModal()}
                className="w-full mb-[0.5rem] last:mb-0"
                variant={"base-100"}
              >
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Add (gate admin) role</MenuItem.Text>
              </MenuItem>
            ) : null}
            {baseUser.roles.includes(BaseUserRolesType.GateAdmin) ? (
              <MenuItem
                onClick={() => removeGateAdminRoleModalRef.current?.showModal()}
                className="w-full mb-[0.5rem] last:mb-0"
                variant={"error"}
              >
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Remove (gate admin) role</MenuItem.Text>
              </MenuItem>
            ) : null}

            {!baseUser.roles.includes(BaseUserRolesType.Moderator) ? (
              <MenuItem
                onClick={() => addModeratorRoleModalRef.current?.showModal()}
                className="w-full mb-[0.5rem] last:mb-0"
                variant={"base-100"}
              >
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Add (moderator) role</MenuItem.Text>
              </MenuItem>
            ) : null}
            {baseUser.roles.includes(BaseUserRolesType.Moderator) ? (
              <MenuItem
                onClick={() => removeModeratorRoleModalRef.current?.showModal()}
                className="w-full mb-[0.5rem] last:mb-0"
                variant={"error"}
              >
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Remove (moderator) role</MenuItem.Text>
              </MenuItem>
            ) : null}
          </Dropdown.Content>
        </Dropdown>
      </Table.Body.Td>
      <Table.Body.Td>{baseUser.id}</Table.Body.Td>
      <Table.Body.Td>
        <Table.Container>
          <Table>
            <Table.Body>
              {baseUser.roles.map((role) => (
                <Table.Body.Tr key={role}>
                  <Table.Body.Td className="p-[0.2rem]">{role}</Table.Body.Td>
                </Table.Body.Tr>
              ))}
            </Table.Body>
          </Table>
        </Table.Container>
      </Table.Body.Td>
      <Table.Body.Td>{baseUser.firstName}</Table.Body.Td>
      <Table.Body.Td>{baseUser.lastName}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(baseUser.createdAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(baseUser.updatedAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default BaseUserItem;
