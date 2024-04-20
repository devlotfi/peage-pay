import { faEllipsisH, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Dropdown,
  IconButtonOutline,
  MenuItem,
} from '@peage-pay-web/ui';
import { useRef } from 'react';
import { CustomPriceType } from '../../../__generated__/graphql';
import DeleteLocalPriceModal from '../delete-global-price-modal.component';
import { CUSTOM_PRICE_LOCAL_LIST } from '../../../graphql/queries';
import { Utils } from '@peage-pay-web/utils';

interface CustomPriceItemProps {
  customPrice: CustomPriceType;
}

const CustomPriceListItem = ({
  customPrice,
}: CustomPriceItemProps): JSX.Element => {
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
              price={customPrice.price}
              refetchList={CUSTOM_PRICE_LOCAL_LIST}
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
          const date = new Date(customPrice.startDate);
          return Utils.formatDate(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(customPrice.endDate);
          return Utils.formatDate(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{customPrice.price.value}</Table.Body.Td>
      <Table.Body.Td>{customPrice.price.priority}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(customPrice.price.startTimestamp);
          return Utils.formatTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(customPrice.price.endTimestamp);
          return Utils.formatTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{customPrice.price.id}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default CustomPriceListItem;
