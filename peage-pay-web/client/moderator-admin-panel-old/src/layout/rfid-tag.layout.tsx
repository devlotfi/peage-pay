import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Table, Tabs } from '@peage-pay-web/ui';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { BASE_USER_BY_ID } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const RfidTagLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const { baseUserId } = useParams();
  const rfidTagListMatch = useMatch('/dashboard/rfid-tag/list/*');
  const addRfidTagMatch = useMatch('/dashboard/rfid-tag/add/*');

  const { loading, error, data } = useQuery(BASE_USER_BY_ID, {
    variables: {
      baseUserByIdInput: {
        id: baseUserId as string,
      },
    },
    fetchPolicy: 'network-only',
  });

  return (
    <AdminDashboardLayout.Tabs loading={loading} error={error}>
      <Table.Container className="mb-[1rem]">
        <Table>
          <Table.Body>
            <Table.Body.Tr>
              <Table.Body.Td className="text-primary-100 font-bold">
                User:
              </Table.Body.Td>
              <Table.Body.Td>
                {data?.baseUserById?.firstName} {data?.baseUserById?.lastName}
              </Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>

      <Tabs className="mb-[1rem]">
        <Tabs.Item
          onClick={() => navigate(`/dashboard/rfid-tag/list/${baseUserId}`)}
          isActive={rfidTagListMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Rfid tag list</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate(`/dashboard/rfid-tag/add/${baseUserId}`)}
          isActive={addRfidTagMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Add rfid tag</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
    </AdminDashboardLayout.Tabs>
  );
};

export default RfidTagLayout;
