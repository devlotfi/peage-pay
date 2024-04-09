import StartPage from '../screens/start.page';
import { NavigationContainer } from '@react-navigation/native';
import SignInPage from '../screens/sign-in.page';
import SignUpPage from '../screens/sign-up.page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import HomePage from '../screens/home.page';
import CustomDrawerContent from './custom-drawer-content.component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './custom-tab-bar.component';
import ReloadPage from '../screens/reload.page';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import TabIcon from './tab-icon.component';
import DashboardNavbar from '../layout/dashboard-navbar.component';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Text } from 'react-native';
import UIText from '../elements/ui-text/ui-text.component';

export type BottomTabsNavigatorParamList = {
  Home: undefined;
  Reload: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsNavigatorParamList>();

type Props = DrawerScreenProps<DrawerNavigatorParamList, 'DrawerMain'>;

const BottomTabsNavigator = (props: Props): JSX.Element => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props}></CustomTabBar>}>
      <Tab.Screen
        name="Acceuil"
        component={HomePage}
        options={{
          header: () => <DashboardNavbar {...props}></DashboardNavbar>,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={faHome}></TabIcon>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Recharge"
        component={ReloadPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={faHome}></TabIcon>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profil"
        component={ReloadPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={faHome}></TabIcon>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Carte"
        component={ReloadPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={faHome}></TabIcon>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Calcul de tarifs"
        component={ReloadPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={faHome}></TabIcon>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export type DrawerNavigatorParamList = {
  DrawerMain: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

const DrawerNavigator = (): JSX.Element => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props}></CustomDrawerContent>
      )}
    >
      <Drawer.Screen
        name="DrawerMain"
        component={BottomTabsNavigator}
        options={{ headerShown: false }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export type MainStackNavigatorParamList = {
  Start: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

const MainStackNavigator = (): JSX.Element => {
  const { authData } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authData ? (
          <>
            <Stack.Screen
              name="Dashboard"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            ></Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="Start"
              component={StartPage}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="SignIn"
              component={SignInPage}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="SignUp"
              component={SignUpPage}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="Dashboard"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            ></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
