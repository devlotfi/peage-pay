import { createDrawerNavigator } from '@react-navigation/drawer';

export type SidebarRouterParamList = {
  Home: undefined;
  Reload: undefined;
};

const Drawer = createDrawerNavigator<SidebarRouterParamList>();

const SidebarRouter = (): JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={SidebarRouter}
        options={{ headerShown: false }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default SidebarRouter;
