import {
  faEllipsisH,
  faList,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from "@peage-pay-web/ui";
import { useRef } from "react";
import { TollType } from "../../__generated__/graphql";
import { useNavigate } from "react-router-dom";
import DeleteTollModal from "./delete-toll-modal.component";

interface TollListItemProps {
  toll: TollType;
}

const TollListItem = ({ toll }: TollListItemProps): JSX.Element => {
  const navigate = useNavigate();
  const deleteModalRef = useRef<HTMLDialogElement>(null);

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
            <DeleteTollModal
              modalRef={deleteModalRef}
              toll={toll}
            ></DeleteTollModal>
            <MenuItem
              onClick={() => navigate(`/dashboard/section/add/${toll.id}`)}
              className="w-full mb-[0.5rem]"
              variant={"base-100"}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Add section</MenuItem.Text>
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/dashboard/section/list/${toll.id}`)}
              className="w-full mb-[0.5rem]"
              variant={"base-100"}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Section list</MenuItem.Text>
            </MenuItem>

            <MenuItem
              onClick={() =>
                navigate(
                  `/dashboard/toll/edit/${toll.tollNetworkId}/${toll.id}`
                )
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
              onClick={() => deleteModalRef.current?.showModal()}
              className="w-full"
              variant={"base-100"}
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
      <Table.Body.Td>
        {(() => {
          const date = new Date(toll.createdAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(toll.createdAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default TollListItem;
