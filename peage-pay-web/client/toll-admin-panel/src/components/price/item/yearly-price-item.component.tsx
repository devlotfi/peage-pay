import { faEllipsisH, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from '@peage-pay-web/ui';
import { useRef } from 'react';
import { YearlyPriceType } from '../../../__generated__/graphql';
import DeleteLocalPriceModal from '../delete-global-price-modal.component';
import { YEARLY_PRICE_LOCAL_LIST } from '../../../graphql/queries';
import { Utils } from '@peage-pay-web/utils';

interface YearlyPriceItemProps {
  yearlyPrice: YearlyPriceType;
}

const YearlyPriceListItem = ({
  yearlyPrice,
}: YearlyPriceItemProps): JSX.Element => {
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
              price={yearlyPrice.price}
              refetchList={YEARLY_PRICE_LOCAL_LIST}
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
      <Table.Body.Td>
        {(() => {
          const date = new Date(yearlyPrice.startDate);
          return Utils.formatDate(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(yearlyPrice.endDate);
          return Utils.formatDate(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{yearlyPrice.price.value}</Table.Body.Td>
      <Table.Body.Td>{yearlyPrice.price.priority}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(yearlyPrice.price.startTimestamp);
          return Utils.formatTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(yearlyPrice.price.endTimestamp);
          return Utils.formatTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{yearlyPrice.price.id}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default YearlyPriceListItem;
