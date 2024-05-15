import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Tabs } from '@peage-pay-web/ui';
import { useTranslation } from 'react-i18next';
import { useMatch, useNavigate } from 'react-router-dom';

const AutomaticGateLayout = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const automaticGateListMatch = useMatch('/dashboard/automatic-gate/list');
  const addAutomaticGateMatch = useMatch('/dashboard/automatic-gate/add');

  return (
    <AdminDashboardLayout.Tabs>
      <Tabs className="mb-[1rem]">
        <Tabs.Item
          onClick={() => navigate('/dashboard/automatic-gate/list')}
          isActive={automaticGateListMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('AUTOMATIC_GATE_LIST')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/automatic-gate/add')}
          isActive={addAutomaticGateMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('ADD_AUTOMATIC_GATE')}</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
    </AdminDashboardLayout.Tabs>
  );
};

export default AutomaticGateLayout;
