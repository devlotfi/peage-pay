import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Tabs } from '@peage-pay-web/ui';
import { useTranslation } from 'react-i18next';
import { useMatch, useNavigate } from 'react-router-dom';

const AddPriceLayout = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const addDailyPriceMatch = useMatch('/dashboard/price/add/daily');
  const addWeeklyPriceMatch = useMatch('/dashboard/price/add/weekly');
  const addMonthltPriceMatch = useMatch('/dashboard/price/add/monthly');
  const addYearlyPriceMatch = useMatch('/dashboard/price/add/yearly');
  const addCustomPriceMatch = useMatch('/dashboard/price/add/custom');

  return (
    <AdminDashboardLayout.Tabs>
      <Tabs className="mb-[1rem]">
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/add/daily')}
          isActive={addDailyPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('ADD_LOCAL_DAILY_PRICE')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/add/weekly')}
          isActive={addWeeklyPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('ADD_LOCAL_WEEKLY_PRICE')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/add/monthly')}
          isActive={addMonthltPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('ADD_LOCAL_MONTHLY_PRICE')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/add/yearly')}
          isActive={addYearlyPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('ADD_LOCAL_YEARLY_PRICE')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/add/custom')}
          isActive={addCustomPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('ADD_LOCAL_CUSTOM_PRICE')}</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
    </AdminDashboardLayout.Tabs>
  );
};

export default AddPriceLayout;
