import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tabs } from '@peage-pay-web/ui';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';

const AddPriceLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const addDailyPriceMatch = useMatch('/dashboard/price/add/daily');
  const addWeeklyPriceMatch = useMatch('/dashboard/price/add/weekly');
  const addMonthltPriceMatch = useMatch('/dashboard/price/add/monthly');
  const addYearlyPriceMatch = useMatch('/dashboard/price/add/yearly');
  const addCustomPriceMatch = useMatch('/dashboard/price/add/custom');

  return (
    <div className="flex flex-col">
      <Tabs>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/add/daily')}
          isActive={addDailyPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Daily price</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/add/weekly')}
          isActive={addWeeklyPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Weekly price</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/add/monthly')}
          isActive={addMonthltPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Monthly price</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/add/yearly')}
          isActive={addYearlyPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Yearly price</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate('/dashboard/price/add/custom')}
          isActive={addCustomPriceMatch ? 'active' : 'notActive'}
        >
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Custom price</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
      <Outlet></Outlet>
    </div>
  );
};

export default AddPriceLayout;
