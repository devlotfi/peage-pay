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
import AddHumanRessourcesAdminRoleModal from "./add-human-ressources-admin-role-modal.component";
import { useRef } from "react";
import RemoveHumanRessourcesAdminRoleModal from "./remove-human-ressources-admin-role-modal.component";

interface BaseUserItemProps {
  baseUser: BaseUserType;
}

const BaseUserItem = ({ baseUser }: BaseUserItemProps): JSX.Element => {
  const addHumanRessourcesAdminRoleModalRef = useRef<HTMLDialogElement>(null);
  const removeHumanRessourcesAdminRoleModalRef =
    useRef<HTMLDialogElement>(null);

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
            <AddHumanRessourcesAdminRoleModal
              modalRef={addHumanRessourcesAdminRoleModalRef}
              baseUser={baseUser}
            ></AddHumanRessourcesAdminRoleModal>
            <RemoveHumanRessourcesAdminRoleModal
              modalRef={removeHumanRessourcesAdminRoleModalRef}
              baseUser={baseUser}
            ></RemoveHumanRessourcesAdminRoleModal>
            {!baseUser.roles.includes(
              BaseUserRolesType.HumanRessourcesAdmin
            ) ? (
              <MenuItem
                onClick={() =>
                  addHumanRessourcesAdminRoleModalRef.current?.showModal()
                }
                className="w-full"
                variant={"base-100"}
              >
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>Add (human ressources admin) role</MenuItem.Text>
              </MenuItem>
            ) : null}
            {baseUser.roles.includes(BaseUserRolesType.HumanRessourcesAdmin) ? (
              <MenuItem
                onClick={() =>
                  removeHumanRessourcesAdminRoleModalRef.current?.showModal()
                }
                className="w-full"
                variant={"base-100"}
              >
                <MenuItem.Icon>
                  <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
                </MenuItem.Icon>
                <MenuItem.Text>
                  Remove (human ressources admin) role
                </MenuItem.Text>
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
      <Table.Body.Td>{baseUser.createdAt}</Table.Body.Td>
      <Table.Body.Td>{baseUser.updatedAt}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default BaseUserItem;
