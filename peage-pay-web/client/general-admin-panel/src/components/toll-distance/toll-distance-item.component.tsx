import { Table } from '@peage-pay-web/ui';
import { TollDistanceType } from '../../__generated__/graphql';

interface TollDistanceItemProps {
  tollDistance: TollDistanceType;
}

const TollDistanceItem = ({
  tollDistance,
}: TollDistanceItemProps): JSX.Element => {
  return (
    <Table.Body.Tr variant={'zebra'}>
      <Table.Body.Td>{tollDistance.fromToll.name}</Table.Body.Td>
      <Table.Body.Td>{tollDistance.toToll.name}</Table.Body.Td>
      <Table.Body.Td>{tollDistance.distance}</Table.Body.Td>
      <Table.Body.Td>{tollDistance.fromToll.id}</Table.Body.Td>
      <Table.Body.Td>{tollDistance.toToll.id}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default TollDistanceItem;
