import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Tabs } from '@peage-pay-web/ui';
import { useTranslation } from 'react-i18next';
import { useMatch, useNavigate } from 'react-router-dom';

const HighwayLayout = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const highwayListMatch = useMatch('/dashboard/highway/list');
  const addHighwayMatch = useMatch('/dashboard/highway/add');

  return (
    <AdminDashboardLayout.Tabs>
      <Tabs className="mb-[1rem]">
        <Tabs.Item
          onClick={() => navigate('/dashboard/highway/list')}
          isActive={highwayListMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('HIGHWAY_LIST')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/highway/add')}
          isActive={addHighwayMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('ADD_HIGHWAY')}</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
    </AdminDashboardLayout.Tabs>
  );
};

export default HighwayLayout;
