import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tabs } from '@peage-pay-web/ui';
import { useState } from 'react';

enum SignInTabsEnum {
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  GOOGLE = 'GOOGLE',
}

const SignInPageTabs = (): JSX.Element => {
  const [tab, setTab] = useState<SignInTabsEnum>(SignInTabsEnum.EMAIL);

  return (
    <Tabs>
      <Tabs.Item
        className="flex-1"
        onClick={() => setTab(SignInTabsEnum.EMAIL)}
        isActive={tab === SignInTabsEnum.EMAIL ? 'active' : 'notActive'}
      >
        <Tabs.Item.Icon position={'left'}>
          <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
        </Tabs.Item.Icon>
        <Tabs.Item.Content>E-mail</Tabs.Item.Content>
      </Tabs.Item>
      <Tabs.Item
        className="flex-1"
        onClick={() => setTab(SignInTabsEnum.GOOGLE)}
        isActive={tab === SignInTabsEnum.GOOGLE ? 'active' : 'notActive'}
      >
        <Tabs.Item.Icon position={'left'}>
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
        </Tabs.Item.Icon>
        <Tabs.Item.Content>Google</Tabs.Item.Content>
      </Tabs.Item>
      <Tabs.Item
        className="flex-1"
        onClick={() => setTab(SignInTabsEnum.PHONE)}
        isActive={tab === SignInTabsEnum.PHONE ? 'active' : 'notActive'}
      >
        <Tabs.Item.Icon position={'left'}>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
        </Tabs.Item.Icon>
        <Tabs.Item.Content>Phone</Tabs.Item.Content>
      </Tabs.Item>
    </Tabs>
  );
};

export default SignInPageTabs;
