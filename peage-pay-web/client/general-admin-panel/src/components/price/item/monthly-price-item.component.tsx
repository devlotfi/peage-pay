import { faEllipsisH, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from '@peage-pay-web/ui';
import { useRef } from 'react';
import { MonthlyPriceType } from '../../../__generated__/graphql';
import DeleteGlobalPriceModal from '../delete-global-price-modal.component';
import { MONTHLY_PRICE_GLOBAL_LIST } from '../../../graphql/queries';
import { Utils } from '@peage-pay-web/utils';

interface MonthlyPriceItemProps {
  monthlyPrice: MonthlyPriceType;
}

const MonthlyPriceListItem = ({
  monthlyPrice,
}: MonthlyPriceItemProps): JSX.Element => {
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
            <DeleteGlobalPriceModal
              modalRef={deleteModalRef}
              price={monthlyPrice.price}
              refetchList={MONTHLY_PRICE_GLOBAL_LIST}
            ></DeleteGlobalPriceModal>
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
      <Table.Body.Td>{monthlyPrice.startDay}</Table.Body.Td>
      <Table.Body.Td>{monthlyPrice.endDay}</Table.Body.Td>
      <Table.Body.Td>
        <Table.Container>
          <Table>
            <Table.Body>
              {monthlyPrice.months.map((month) => (
                <Table.Body.Tr key={month}>
                  <Table.Body.Td className="p-[0.2rem]">{month}</Table.Body.Td>
                </Table.Body.Tr>
              ))}
            </Table.Body>
          </Table>
        </Table.Container>
      </Table.Body.Td>
      <Table.Body.Td>{monthlyPrice.price.value}</Table.Body.Td>
      <Table.Body.Td>{monthlyPrice.price.priority}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(monthlyPrice.price.startTimestamp);
          return Utils.formatTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(monthlyPrice.price.endTimestamp);
          return Utils.formatTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{monthlyPrice.price.id}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default MonthlyPriceListItem;
