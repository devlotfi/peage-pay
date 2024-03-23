import { faEllipsisH, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from "@peage-pay-web/ui";
import { useRef } from "react";
import { YearlyPriceType } from "../../../__generated__/graphql";
import DeleteGlobalPriceModal from "../delete-global-price-modal.component";
import { YEARLY_PRICE_GLOBAL_LIST } from "../../../graphql/queries";

interface YearlyPriceItemProps {
  yearlyPrice: YearlyPriceType;
}

const YearlyPriceListItem = ({
  yearlyPrice,
}: YearlyPriceItemProps): JSX.Element => {
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
              price={yearlyPrice.price}
              refetchList={YEARLY_PRICE_GLOBAL_LIST}
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
      <Table.Body.Td>{yearlyPrice.price.id}</Table.Body.Td>
      <Table.Body.Td>{yearlyPrice.startDate}</Table.Body.Td>
      <Table.Body.Td>{yearlyPrice.endDate}</Table.Body.Td>
      <Table.Body.Td>{yearlyPrice.price.value}</Table.Body.Td>
      <Table.Body.Td>{yearlyPrice.price.priority}</Table.Body.Td>
      <Table.Body.Td>{yearlyPrice.price.startTimestamp}</Table.Body.Td>
      <Table.Body.Td>{yearlyPrice.price.endTimestamp}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default YearlyPriceListItem;
