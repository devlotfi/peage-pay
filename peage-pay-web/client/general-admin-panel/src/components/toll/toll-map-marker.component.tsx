import { TollType } from '../../__generated__/graphql';
import { Button, Table } from '@peage-pay-web/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

interface TollMapMarkerProps {
  toll: TollType;
}

const TollMapMarker = ({ toll }: TollMapMarkerProps): JSX.Element => {
  return (
    <div className="group shadow-lg flex flex-col p-[0.5rem] bg-base-100 rounded-lg relative border-edge-100 border-[1px] translate-y-[-2rem]">
      <div className="flex items-center text-primary-100 font-bold text-[12pt]">
        <div className="flex text-[11pt]">{toll.name}</div>
      </div>
      <div className="hidden group-hover:flex mt-[0.5rem] w-full">
        <a
          className="w-full"
          href={`/dashboard/toll/edit/${toll.tollNetworkId}/${toll.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant={'base-200'}
            className="mr-[0.5rem] min-h-[2rem] w-full"
          >
            <Button.Icon position={'left'}>
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            </Button.Icon>
            <Button.Content>Edit</Button.Content>
          </Button>
        </a>
      </div>
      <Table.Container className="text-[10pt] hidden group-hover:flex mt-[0.5rem]">
        <Table>
          <Table.Body>
            <Table.Body.Tr>
              <Table.Body.Td className="py-[0.1rem]">Info</Table.Body.Td>
            </Table.Body.Tr>
            <Table.Body.Tr>
              <Table.Body.Td className="py-[0.1rem]">Highway</Table.Body.Td>
              <Table.Body.Td className="py-[0.1rem]">
                {toll.highway.name} {toll.highway.code}
              </Table.Body.Td>
            </Table.Body.Tr>
            <Table.Body.Tr>
              <Table.Body.Td className="py-[0.1rem]">Wilaya</Table.Body.Td>
              <Table.Body.Td className="py-[0.1rem]">
                {toll.wilaya.name}
              </Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>

      <div className="absolute bg-primary-100 flex h-[2rem] w-[0.3rem] bottom-[-2rem] left-[50%] translate-x-[-50%]"></div>
      <div className="absolute bg-primary-100 flex h-[1rem] w-[1rem] bottom-[-2.5rem] left-[50%] translate-x-[-50%] rounded-full"></div>
    </div>
  );
};

export default TollMapMarker;
