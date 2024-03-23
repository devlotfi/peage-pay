import { faEllipsisH, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from "@peage-pay-web/ui";
import { useRef } from "react";
import { CustomPriceType } from "../../../__generated__/graphql";
import DeleteGlobalPriceModal from "../delete-global-price-modal.component";
import { CUSTOM_PRICE_GLOBAL_LIST } from "../../../graphql/queries";

interface CustomPriceItemProps {
  customPrice: CustomPriceType;
}

const CustomPriceListItem = ({
  customPrice,
}: CustomPriceItemProps): JSX.Element => {
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
            <DeleteGlobalPriceModal
              modalRef={deleteModalRef}
              price={customPrice.price}
              refetchList={CUSTOM_PRICE_GLOBAL_LIST}
            ></DeleteGlobalPriceModal>
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
      <Table.Body.Td>{customPrice.price.id}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(customPrice.startDate);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(customPrice.endDate);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{customPrice.price.value}</Table.Body.Td>
      <Table.Body.Td>{customPrice.price.priority}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(customPrice.price.startTimestamp);
          return `${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(customPrice.price.endTimestamp);
          return `${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default CustomPriceListItem;
