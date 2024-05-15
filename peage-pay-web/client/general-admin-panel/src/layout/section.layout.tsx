import { faList, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Table, Tabs } from '@peage-pay-web/ui';
import { useMatch, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TOLL_BY_ID } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const SectionLayout = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { tollNetworkId, tollId } = useParams();
  const sectionListMatch = useMatch(`/dashboard/toll/section/list/${tollId}`);
  const editTollMatch = useMatch(
    `/dashboard/toll/edit/${tollNetworkId}/${tollId}`,
  );

  const { loading, error, data } = useQuery(TOLL_BY_ID, {
    variables: {
      tollByIdInput: {
        id: tollId as string,
      },
    },
    fetchPolicy: 'network-only',
  });

  return (
    <AdminDashboardLayout.Tabs loading={loading} error={error}>
      <Table.Container className="mb-[0.5rem]">
        <Table>
          <Table.Body>
            <Table.Body.Tr>
              <Table.Body.Td className="text-primary-100 font-bold">
                Toll:
              </Table.Body.Td>
              <Table.Body.Td>{data?.tollById.name}</Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>
      <Tabs className="mb-[1rem]">
        <Tabs.Item
          onClick={() => navigate(`/dashboard/toll/section/list/${tollId}`)}
          isActive={sectionListMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Section list</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() =>
            navigate(`/dashboard/toll/edit/${tollNetworkId}/${tollId}`)
          }
          isActive={editTollMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Edit toll</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
    </AdminDashboardLayout.Tabs>
  );
};

export default SectionLayout;
