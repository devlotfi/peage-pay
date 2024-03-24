import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs } from "@peage-pay-web/ui";

export enum SignInTabsEnum {
  EMAIL = "EMAIL",
  GOOGLE = "GOOGLE",
}

interface Props {
  onChange: (value: SignInTabsEnum) => void;
  value: SignInTabsEnum;
}

const SignInPageTabs = ({ onChange, value }: Props): JSX.Element => {
  return (
    <Tabs>
      <Tabs.Item
        className="flex-1"
        onClick={() => onChange(SignInTabsEnum.EMAIL)}
        isActive={value === SignInTabsEnum.EMAIL ? "active" : "notActive"}
      >
        <Tabs.Item.Icon position={"left"}>
          <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
        </Tabs.Item.Icon>
        <Tabs.Item.Content>E-mail</Tabs.Item.Content>
      </Tabs.Item>
      <Tabs.Item
        className="flex-1"
        onClick={() => onChange(SignInTabsEnum.GOOGLE)}
        isActive={value === SignInTabsEnum.GOOGLE ? "active" : "notActive"}
      >
        <Tabs.Item.Icon position={"left"}>
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
        </Tabs.Item.Icon>
        <Tabs.Item.Content>Google</Tabs.Item.Content>
      </Tabs.Item>
    </Tabs>
  );
};

export default SignInPageTabs;
