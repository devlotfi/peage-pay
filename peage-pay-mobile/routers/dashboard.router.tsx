import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/home.page';
import ReloadPage from '../pages/reload.page';

export type DashboardRouterParamList = {
  Home: undefined;
  Reload: undefined;
};

const Tab = createBottomTabNavigator<DashboardRouterParamList>();

const DashboardRouter = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        name="Reload"
        component={ReloadPage}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default DashboardRouter;
