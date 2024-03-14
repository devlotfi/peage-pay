import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Button } from '@peage-pay-web/ui';
import { HighwayType } from '../../__generated__/graphql';

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
            <Button.Content>Unselect</Button.Content>
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
          <Button.Content>Select</Button.Content>
        </Button>
      );
    }
  };

  return (
    <Table.Body.Tr>
      <Table.Body.Td>{renderButton()}</Table.Body.Td>
      <Table.Body.Td>{highway.id}</Table.Body.Td>
      <Table.Body.Td>{highway.name}</Table.Body.Td>
      <Table.Body.Td>{highway.code}</Table.Body.Td>
      <Table.Body.Td>{highway.createdAt}</Table.Body.Td>
      <Table.Body.Td>{highway.updatedAt}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default HighwayPickerItem;
