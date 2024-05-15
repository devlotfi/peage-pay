import {
  faList,
  faNetworkWired,
  faPen,
  faPlus,
  faRuler,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Table, Tabs } from '@peage-pay-web/ui';
import { useMatch, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TOLL_NETWORK_BY_ID } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const TollLayout = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { tollNetworkId } = useParams();
  const tollListMatch = useMatch(`/dashboard/toll/list/${tollNetworkId}`);
  const addTollMatch = useMatch(`/dashboard/toll/add/${tollNetworkId}`);
  const sectionListMatch = useMatch(
    `/dashboard/toll/section/list/${tollNetworkId}`,
  );
  const addSectionMatch = useMatch(
    `/dashboard/toll/section/add/${tollNetworkId}`,
  );
  const tollNetworkGraphMatch = useMatch(
    `/dashboard/toll/toll-network/graph/${tollNetworkId}`,
  );
  const editTollNetworkMatch = useMatch(
    `/dashboard/toll/toll-network/edit/${tollNetworkId}`,
  );
  const generatedDistancesMatch = useMatch(
    `/dashboard/toll/toll-distance/list/${tollNetworkId}`,
  );

  const { loading, error, data } = useQuery(TOLL_NETWORK_BY_ID, {
    variables: {
      tollNetworkByIdInput: {
        id: tollNetworkId as string,
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
                {t('TOLL_NETWORK')}
              </Table.Body.Td>
              <Table.Body.Td>{data?.tollNetworkById.name}</Table.Body.Td>
            </Table.Body.Tr>
          </Table.Body>
        </Table>
      </Table.Container>
      <Tabs className="mb-[1rem]">
        <Tabs.Item
          onClick={() => navigate(`/dashboard/toll/list/${tollNetworkId}`)}
          isActive={tollListMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('TOLL_LIST')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate(`/dashboard/toll/add/${tollNetworkId}`)}
          isActive={addTollMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('ADD_TOLL')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() =>
            navigate(`/dashboard/toll/section/list/${tollNetworkId}`)
          }
          isActive={sectionListMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('SECTION_LIST')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() =>
            navigate(`/dashboard/toll/section/add/${tollNetworkId}`)
          }
          isActive={addSectionMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('ADD_SECTION')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() =>
            navigate(`/dashboard/toll/toll-network/graph/${tollNetworkId}`)
          }
          isActive={tollNetworkGraphMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faNetworkWired}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('GRAPH')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() =>
            navigate(`/dashboard/toll/toll-network/edit/${tollNetworkId}`)
          }
          isActive={editTollNetworkMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('EDIT_TOLL_NETWORK')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() =>
            navigate(`/dashboard/toll/toll-distance/list/${tollNetworkId}`)
          }
          isActive={generatedDistancesMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faRuler}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('GENERATED_DISTANCES')}</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
    </AdminDashboardLayout.Tabs>
  );
};

export default TollLayout;
