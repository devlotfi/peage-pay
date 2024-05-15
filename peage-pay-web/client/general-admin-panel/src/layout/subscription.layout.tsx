import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Tabs } from '@peage-pay-web/ui';
import { useTranslation } from 'react-i18next';
import { useMatch, useNavigate } from 'react-router-dom';

const SubscriptionLayout = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const subscriptionListMatch = useMatch('/dashboard/subscription/list');
  const addSubscriptionMatch = useMatch('/dashboard/subscription/add');

  return (
    <AdminDashboardLayout.Tabs>
      <Tabs className="mb-[1rem]">
        <Tabs.Item
          onClick={() => navigate('/dashboard/subscription/list')}
          isActive={subscriptionListMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('SUBSCRIPTION_LIST')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/subscription/add')}
          isActive={addSubscriptionMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('ADD_SUBSCRIPTION')}</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
    </AdminDashboardLayout.Tabs>
  );
};

export default SubscriptionLayout;
