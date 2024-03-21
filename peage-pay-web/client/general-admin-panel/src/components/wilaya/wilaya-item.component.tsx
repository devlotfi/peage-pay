import { Table, Button } from '@peage-pay-web/ui';
import { WilayaType } from '../../__generated__/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

interface WilayaItemProps {
  wilaya: WilayaType;
  selectedWilaya: WilayaType | null;
  onWilayaSelected: (wilaya: WilayaType) => void;
  onWilayaUnselected: () => void;
}

const WilayaItem = ({
  wilaya,
  selectedWilaya,
  onWilayaSelected,
  onWilayaUnselected,
}: WilayaItemProps): JSX.Element => {
  const renderButton = () => {
    if (selectedWilaya) {
      if (wilaya.id === selectedWilaya.id) {
        return (
          <Button
            className="min-h-[2rem] h-[2rem]"
            onClick={onWilayaUnselected}
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
          onClick={() => onWilayaSelected(wilaya)}
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
      <Table.Body.Td>{wilaya.id}</Table.Body.Td>
      <Table.Body.Td>{wilaya.name}</Table.Body.Td>
      <Table.Body.Td>{wilaya.code}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default WilayaItem;
