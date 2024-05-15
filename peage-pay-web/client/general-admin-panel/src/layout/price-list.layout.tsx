import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminDashboardLayout, Tabs } from '@peage-pay-web/ui';
import { useTranslation } from 'react-i18next';
import { useMatch, useNavigate } from 'react-router-dom';

const PriceListLayout = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const listDailyPriceMatch = useMatch('/dashboard/price/list/daily');
  const listWeeklyPriceMatch = useMatch('/dashboard/price/list/weekly');
  const listMonthltPriceMatch = useMatch('/dashboard/price/list/monthly');
  const listYearlyPriceMatch = useMatch('/dashboard/price/list/yearly');
  const listCustomPriceMatch = useMatch('/dashboard/price/list/custom');

  return (
    <AdminDashboardLayout.Tabs>
      <Tabs className="mb-[1rem]">
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/list/daily')}
          isActive={listDailyPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('DAILY_PRICE_GLOBAL_LIST')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/list/weekly')}
          isActive={listWeeklyPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('WEEKLY_PRICE_GLOBAL_LIST')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/list/monthly')}
          isActive={listMonthltPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>
            {t('MONTHLY_PRICE_GLOBAL_LIST')}
          </Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/list/yearly')}
          isActive={listYearlyPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('YEARLY_PRICE_GLOBAL_LIST')}</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/list/custom')}
          isActive={listCustomPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>{t('CUSTOM_PRICE_GLOBAL_LIST')}</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
    </AdminDashboardLayout.Tabs>
  );
};

export default PriceListLayout;
