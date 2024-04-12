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
import ReloadPage from '../screens/deposit.page';
import { faHome, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import TabIcon from './tab-icon.component';
import DashboardNavbar from '../layout/dashboard-navbar.component';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import ResetPasswordPage from '../screens/reset-password.page';
import MinimalNavbar from '../layout/minimal-navbar.component';

export type BottomTabsNavigatorParamList = {
  Home: undefined;
  Deposit: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsNavigatorParamList>();

type Props = DrawerScreenProps<DrawerNavigatorParamList, 'DrawerMain'>;

const BottomTabsNavigator = (props: Props): JSX.Element => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props}></CustomTabBar>}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          header: () => <DashboardNavbar {...props}></DashboardNavbar>,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={faHome}></TabIcon>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Deposit"
        component={ReloadPage}
        options={{
          header: () => <DashboardNavbar {...props}></DashboardNavbar>,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={faMoneyBillTransfer}></TabIcon>
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
  ResetPassword: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

const MainStackNavigator = (): JSX.Element => {
  const { authData } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authData !== null ? (
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
              options={{ header: () => <MinimalNavbar></MinimalNavbar> }}
            ></Stack.Screen>
            <Stack.Screen
              name="SignIn"
              component={SignInPage}
              options={{ header: () => <MinimalNavbar></MinimalNavbar> }}
            ></Stack.Screen>
            <Stack.Screen
              name="SignUp"
              component={SignUpPage}
              options={{ header: () => <MinimalNavbar></MinimalNavbar> }}
            ></Stack.Screen>
            <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordPage}
              options={{ header: () => <MinimalNavbar></MinimalNavbar> }}
            ></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
