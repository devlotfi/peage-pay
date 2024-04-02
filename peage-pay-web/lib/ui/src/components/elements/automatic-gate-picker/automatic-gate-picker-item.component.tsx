import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Button } from '@peage-pay-web/ui';
import { AutomaticGateType } from '../../../__generated__/graphql';

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
  const renderButton = () => {
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
            <Button.Content>Unselect</Button.Content>
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
          <Button.Content>Select</Button.Content>
        </Button>
      );
    }
  };

  return (
    <Table.Body.Tr variant={'zebra'}>
      <Table.Body.Td>{renderButton()}</Table.Body.Td>
      <Table.Body.Td>{automaticGate.id}</Table.Body.Td>
      <Table.Body.Td>{automaticGate.name}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(automaticGate.createdAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(automaticGate.createdAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default AutomaticGatePickerItem;
