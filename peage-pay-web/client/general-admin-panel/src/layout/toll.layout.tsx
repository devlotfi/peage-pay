import { faList, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminDashboardLayout, Tabs } from "@peage-pay-web/ui";
import { useMatch, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const TollLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const { tollNetworkId } = useParams();
  const tollListMatch = useMatch(`/dashboard/toll/list/${tollNetworkId}`);
  const addTollMatch = useMatch(`/dashboard/toll/add/${tollNetworkId}`);

  return (
    <AdminDashboardLayout.Tabs>
      <Tabs className="mb-[1rem]">
        <Tabs.Item
          onClick={() => navigate(`/dashboard/toll/list/${tollNetworkId}`)}
          isActive={tollListMatch ? "active" : "notActive"}
        >
          <Tabs.Item.Icon position={"left"}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Toll list</Tabs.Item.Content>
        </Tabs.Item>
        <Tabs.Item
          onClick={() => navigate(`/dashboard/toll/add/${tollNetworkId}`)}
          isActive={addTollMatch ? "active" : "notActive"}
        >
          <Tabs.Item.Icon position={"left"}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Tabs.Item.Icon>
          <Tabs.Item.Content>Add toll</Tabs.Item.Content>
        </Tabs.Item>
      </Tabs>
    </AdminDashboardLayout.Tabs>
  );
};

export default TollLayout;
