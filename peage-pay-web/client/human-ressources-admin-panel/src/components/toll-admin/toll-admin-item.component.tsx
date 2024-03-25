import {
  faEllipsisH,
  faPen,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from "@peage-pay-web/ui";
import { TollAdminType } from "../../__generated__/graphql";
import { useRef } from "react";
import { TOLL_ADMIN_LIST } from "../../graphql/queries";
import RemoveTollAdminRoleModal from "./remove-toll-admin-role-modal.component";
import { useNavigate } from "react-router-dom";

interface TollAdminItemProps {
  tollAdmin: TollAdminType;
}

const TollAdminItem = ({ tollAdmin }: TollAdminItemProps): JSX.Element => {
  const navigate = useNavigate();
  const removeTollAdminRoleModalRef = useRef<HTMLDialogElement>(null);

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
            <RemoveTollAdminRoleModal
              modalRef={removeTollAdminRoleModalRef}
              baseUser={tollAdmin.baseUser}
              refetchQuery={TOLL_ADMIN_LIST}
            ></RemoveTollAdminRoleModal>

            <MenuItem
              onClick={() =>
                navigate(`/dashboard/toll-admin/edit/${tollAdmin.baseUser.id}`)
              }
              className="w-full mb-[0.5rem]"
              variant={"base-100"}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Edit</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => removeTollAdminRoleModalRef.current?.showModal()}
              className="w-full"
              variant={"error"}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Remove (toll admin) role</MenuItem.Text>
            </MenuItem>
          </Dropdown.Content>
        </Dropdown>
      </Table.Body.Td>
      <Table.Body.Td>{tollAdmin.baseUser.id}</Table.Body.Td>
      <Table.Body.Td>{tollAdmin.baseUser.firstName}</Table.Body.Td>
      <Table.Body.Td>{tollAdmin.baseUser.lastName}</Table.Body.Td>
      <Table.Body.Td>
        {tollAdmin.toll ? tollAdmin.toll.name : "Not assigned"}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(tollAdmin.baseUser.createdAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(tollAdmin.baseUser.updatedAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default TollAdminItem;
