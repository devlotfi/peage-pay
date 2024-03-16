import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tabs } from '@peage-pay-web/ui';
import { Outlet } from 'react-router-dom';

const PriceLayout = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <Tabs>
        <Tabs.Item isActive={'active'}>
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Daily price</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item isActive={'active'}>
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Weekly price</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item isActive={'active'}>
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Monthly price</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item isActive={'active'}>
          <Tabs.Item.Icon position={'left'}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Yearly price</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item isActive={'active'}>
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

export default PriceLayout;
