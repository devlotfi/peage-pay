import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BaseUserRolesType } from '../../../__generated__/graphql';
import Dropdown from '../dropdown/dropdown.component';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Table from '../table/table.component';
import ButtonOutline from '../button/button-outline.component';

interface UserRolesDropdownProps {
  userRoles: BaseUserRolesType[];
}

const UserRolesDropdown = ({
  userRoles,
}: UserRolesDropdownProps): JSX.Element => {
  return (
    <Dropdown
      mainElement={
        <Dropdown.Main>
          <ButtonOutline variant={'edge-100'} className="min-h-[2rem] h-[2rem]">
            <ButtonOutline.Icon position={'left'}>
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </ButtonOutline.Icon>
            <ButtonOutline.Content>Roles</ButtonOutline.Content>
          </ButtonOutline>
        </Dropdown.Main>
      }
    >
      <Dropdown.Content position={'bottom-left'}>
        <Table.Container>
          <Table>
            <Table.Body>
              {userRoles.map((role) => (
                <Table.Body.Tr key={role}>
                  <Table.Body.Td className="p-[0.2rem]">{role}</Table.Body.Td>
                </Table.Body.Tr>
              ))}
            </Table.Body>
          </Table>
        </Table.Container>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default UserRolesDropdown;
