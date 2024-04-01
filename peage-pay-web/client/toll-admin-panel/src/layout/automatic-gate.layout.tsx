import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Tabs } from '@peage-pay-web/ui';
import { useMatch, useNavigate } from 'react-router-dom';

const AutomaticGateLayout = (): JSX.Element => {
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
          <Tabs.Item.Content>Automatic gate list</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/automatic-gate/add')}
          isActive={addAutomaticGateMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Add automatic gate</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
    </AdminDashboardLayout.Tabs>
  );
};

export default AutomaticGateLayout;
