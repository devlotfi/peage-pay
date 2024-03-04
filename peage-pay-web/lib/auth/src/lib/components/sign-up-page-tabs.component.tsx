import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tabs } from '@peage-pay-web/ui';

export enum SignUpTabsEnum {
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  GOOGLE = 'GOOGLE',
}

interface Props {
  onChange: (value: SignUpTabsEnum) => void;
  value: SignUpTabsEnum;
}

const SignUpPageTabs = ({ onChange, value }: Props): JSX.Element => {
  return (
    <Tabs>
      <Tabs.Item
        className="flex-1"
        onClick={() => onChange(SignUpTabsEnum.EMAIL)}
        isActive={value === SignUpTabsEnum.EMAIL ? 'active' : 'notActive'}
      >
        <Tabs.Item.Icon position={'left'}>
          <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
        </Tabs.Item.Icon>
        <Tabs.Item.Content>E-mail</Tabs.Item.Content>
      </Tabs.Item>
      <Tabs.Item
        className="flex-1"
        onClick={() => onChange(SignUpTabsEnum.PHONE)}
        isActive={value === SignUpTabsEnum.PHONE ? 'active' : 'notActive'}
      >
        <Tabs.Item.Icon position={'left'}>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
        </Tabs.Item.Icon>
        <Tabs.Item.Content>Phone</Tabs.Item.Content>
      </Tabs.Item>
    </Tabs>
  );
};

export default SignUpPageTabs;
