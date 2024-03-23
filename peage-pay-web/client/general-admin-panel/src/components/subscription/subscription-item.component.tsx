import { faEllipsisH, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from "@peage-pay-web/ui";
import { useRef } from "react";
import { SubscriptionType } from "../../__generated__/graphql";
import { useNavigate } from "react-router-dom";
import DeleteSubscriptionModal from "./delete-subscription-modal.component";

interface SubscriptionListItemProps {
  subscription: SubscriptionType;
}

const SubscriptionListItem = ({
  subscription,
}: SubscriptionListItemProps): JSX.Element => {
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
            <DeleteSubscriptionModal
              modalRef={deleteModalRef}
              subscription={subscription}
            ></DeleteSubscriptionModal>
            <MenuItem
              onClick={() =>
                navigate(`/dashboard/subscription/edit/${subscription.id}`)
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
      <Table.Body.Td>{subscription.id}</Table.Body.Td>
      <Table.Body.Td>{subscription.name}</Table.Body.Td>
      <Table.Body.Td>{subscription.days} days</Table.Body.Td>
      <Table.Body.Td>{subscription.price} dzd/km</Table.Body.Td>
      <Table.Body.Td>{subscription.createdAt}</Table.Body.Td>
      <Table.Body.Td>{subscription.updatedAt}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default SubscriptionListItem;
