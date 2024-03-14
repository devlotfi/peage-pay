import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Dropdown, IconButtonOutline } from '@peage-pay-web/ui';
import { BaseUserType } from '../../__generated__/graphql';

interface BaseUserItemProps {
  baseUser: BaseUserType;
}

const BaseUserItem = ({ baseUser }: BaseUserItemProps): JSX.Element => {
  return (
    <Table.Body.Tr>
      <Table.Body.Td>
        <Dropdown
          mainElement={
            <Dropdown.Main>
              {
                <IconButtonOutline className="min-h-[2rem] min-w-[2rem] h-[2rem] w-[2rem]">
                  <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                </IconButtonOutline>
              }
            </Dropdown.Main>
          }
        >
          <Dropdown.Content position={'bottom-left'}>
            <h1>lol</h1>
          </Dropdown.Content>
        </Dropdown>
      </Table.Body.Td>
      <Table.Body.Td>{baseUser.id}</Table.Body.Td>
      <Table.Body.Td>{JSON.stringify(baseUser.roles)}</Table.Body.Td>
      <Table.Body.Td>{baseUser.firstName}</Table.Body.Td>
      <Table.Body.Td>{baseUser.lastName}</Table.Body.Td>
      <Table.Body.Td>{baseUser.createdAt}</Table.Body.Td>
      <Table.Body.Td>{baseUser.updatedAt}</Table.Body.Td>
    </Table.Body.Tr>
  );
};

export default BaseUserItem;
