import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Button } from '@peage-pay-web/ui';
import { AutomaticGateType } from '../../../__generated__/graphql';
import { Utils } from '@peage-pay-web/utils';
import { useTranslation } from 'react-i18next';

interface AutomaticGatePickerItemProps {
  automaticGate: AutomaticGateType;
  selectedAutomaticGate: AutomaticGateType | null;
  onAutomaticGateSelected: (automaticGate: AutomaticGateType) => void;
  onAutomaticGateUnselected: () => void;
}

const AutomaticGatePickerItem = ({
  automaticGate,
  selectedAutomaticGate,
  onAutomaticGateSelected,
  onAutomaticGateUnselected,
}: AutomaticGatePickerItemProps): JSX.Element => {
  const { t } = useTranslation();

  const renderButton = (): any => {
    if (selectedAutomaticGate) {
      if (automaticGate.id === selectedAutomaticGate.id) {
        return (
          <Button
            className="min-h-[2rem] h-[2rem]"
            onClick={onAutomaticGateUnselected}
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
          onClick={() => onAutomaticGateSelected(automaticGate)}
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
      <Table.Body.Td>{automaticGate.name}</Table.Body.Td>
      <Table.Body.Td>{t(automaticGate.direction)}</Table.Body.Td>
      <Table.Body.Td>{t(automaticGate.variant)}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(automaticGate.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(automaticGate.createdAt);
          return Utils.formatDateTime(date);
        })()}
      </Table.Body.Td>
      <Table.Body.Td>{automaticGate.id}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default AutomaticGatePickerItem;
