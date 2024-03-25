import { faEllipsisH, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from "@peage-pay-web/ui";
import { GateAdminType } from "../../__generated__/graphql";
import { useRef } from "react";
import RemoveGateAdminRoleModal from "./remove-gate-admin-role-modal.component";
import { GATE_ADMIN_LIST } from "../../graphql/queries";

interface GateAdminItemProps {
  gateAdmin: GateAdminType;
}

const GateAdminItem = ({ gateAdmin }: GateAdminItemProps): JSX.Element => {
  const removeGateAdminRoleModalRef = useRef<HTMLDialogElement>(null);

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
            <RemoveGateAdminRoleModal
              modalRef={removeGateAdminRoleModalRef}
              baseUser={gateAdmin.baseUser}
              refetchQuery={GATE_ADMIN_LIST}
            ></RemoveGateAdminRoleModal>

            <MenuItem
              onClick={() => removeGateAdminRoleModalRef.current?.showModal()}
              className="w-full"
              variant={"error"}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Remove (gate admin) role</MenuItem.Text>
            </MenuItem>
          </Dropdown.Content>
        </Dropdown>
      </Table.Body.Td>
      <Table.Body.Td>{gateAdmin.baseUser.id}</Table.Body.Td>
      <Table.Body.Td>{gateAdmin.baseUser.firstName}</Table.Body.Td>
      <Table.Body.Td>{gateAdmin.baseUser.lastName}</Table.Body.Td>
      <Table.Body.Td>
        {gateAdmin.toll ? gateAdmin.toll.name : "Not assigned"}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(gateAdmin.baseUser.createdAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(gateAdmin.baseUser.updatedAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default GateAdminItem;
