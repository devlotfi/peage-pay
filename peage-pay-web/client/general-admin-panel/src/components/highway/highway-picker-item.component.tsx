import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Button } from '@peage-pay-web/ui';
import { HighwayType } from '../../__generated__/graphql';
import { Utils } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

interface HighwatPickerItemProps {
  highway: HighwayType;
  selectedHighway: HighwayType | null;
  onHighwaySelected: (highway: HighwayType) => void;
  onHighwayUnselected: () => void;
}

const HighwayPickerItem = ({
  highway,
  selectedHighway,
  onHighwaySelected,
  onHighwayUnselected,
}: HighwatPickerItemProps): JSX.Element => {
  const { t } = useTranslation();

  const renderButton = () => {
    if (selectedHighway) {
      if (highway.id === selectedHighway.id) {
        return (
          <Button
            className="min-h-[2rem] h-[2rem]"
            onClick={onHighwayUnselected}
            variant={'error'}
          >
            <Button.Icon position={'left'}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>{t('UNSELECT')}</Button.Content>
          </Button>
        );
      }
    } else {
      return (
        <Button
          className="min-h-[2rem] h-[2rem]"
          onClick={() => onHighwaySelected(highway)}
          variant={'primary'}
        >
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>{t('SELECT')}</Button.Content>
        </Button>
      );
    }
  };

  return (
    <Table.Body.Tr variant={'zebra'}>
      <Table.Body.Td>{renderButton()}</Table.Body.Td>
      <Table.Body.Td>{highway.name}</Table.Body.Td>
      <Table.Body.Td>{highway.code}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(highway.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(highway.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{highway.id}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default HighwayPickerItem;
