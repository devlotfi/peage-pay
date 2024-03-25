import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Button } from "@peage-pay-web/ui";
import { TollType } from "../../__generated__/graphql";

interface TollPickerItemProps {
  toll: TollType;
  selectedToll: TollType | null;
  onTollSelected: (toll: TollType) => void;
  onTollUnselected: () => void;
}

const TollPickerItem = ({
  toll,
  selectedToll,
  onTollSelected,
  onTollUnselected,
}: TollPickerItemProps): JSX.Element => {
  const renderButton = () => {
    if (selectedToll) {
      if (toll.id === selectedToll.id) {
        return (
          <Button
            className="min-h-[2rem] h-[2rem]"
            onClick={onTollUnselected}
            variant={"error"}
          >
            <Button.Icon position={"left"}>
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
          onClick={() => onTollSelected(toll)}
          variant={"primary"}
        >
          <Button.Icon position={"left"}>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>Select</Button.Content>
        </Button>
      );
    }
  };

  return (
    <Table.Body.Tr variant={"zebra"}>
      <Table.Body.Td>{renderButton()}</Table.Body.Td>
      <Table.Body.Td>{toll.id}</Table.Body.Td>
      <Table.Body.Td>{toll.name}</Table.Body.Td>
      <Table.Body.Td>{toll.wilaya.name}</Table.Body.Td>
      <Table.Body.Td>{toll.wilaya.code}</Table.Body.Td>
      <Table.Body.Td>{toll.highway.name}</Table.Body.Td>
      <Table.Body.Td>{toll.highway.code}</Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(toll.createdAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
      <Table.Body.Td>
        {(() => {
          const date = new Date(toll.createdAt);
          return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        })()}
      </Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default TollPickerItem;
