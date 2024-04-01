import { faEllipsisH, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from '@peage-pay-web/ui';
import { useRef } from 'react';
import { WeeklyPriceType } from '../../../__generated__/graphql';
import DeleteLocalPriceModal from '../delete-global-price-modal.component';
import { WEEKLY_PRICE_LOCAL_LIST } from '../../../graphql/queries';

interface WeeklyPriceItemProps {
  weeklyPrice: WeeklyPriceType;
}

const WeeklyPriceListItem = ({
  weeklyPrice,
}: WeeklyPriceItemProps): JSX.Element => {
  const deleteModalRef = useRef<HTMLDialogElement>(null);

  return (
    <Table.Body.Tr variant={'zebra'}>
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
          <Dropdown.Content position={'bottom-left'}>
            <DeleteLocalPriceModal
              modalRef={deleteModalRef}
              price={weeklyPrice.price}
              refetchList={WEEKLY_PRICE_LOCAL_LIST}
            ></DeleteLocalPriceModal>
            <MenuItem
              onClick={() => deleteModalRef.current?.showModal()}
              className="w-full"
              variant={'error'}
            >
              <MenuItem.Icon>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </MenuItem.Icon>
              <MenuItem.Text>Delete</MenuItem.Text>
            </MenuItem>
          </Dropdown.Content>
        </Dropdown>
      </Table.Body.Td>
      <Table.Body.Td>{weeklyPrice.price.id}</Table.Body.Td>
      <Table.Body.Td>
        <Table.Container>
          <Table>
            <Table.Body>
              {weeklyPrice.days.map((dayOfWeek) => (
                <Table.Body.Tr key={dayOfWeek}>
                  <Table.Body.Td className="p-[0.2rem]">
                    {dayOfWeek}
                  </Table.Body.Td>
                </Table.Body.Tr>
              ))}
            </Table.Body>
          </Table>
        </Table.Container>
      </Table.Body.Td>
      <Table.Body.Td>{weeklyPrice.price.value}</Table.Body.Td>
      <Table.Body.Td>{weeklyPrice.price.priority}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(weeklyPrice.price.startTimestamp);
          return `${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(weeklyPrice.price.endTimestamp);
          return `${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default WeeklyPriceListItem;
