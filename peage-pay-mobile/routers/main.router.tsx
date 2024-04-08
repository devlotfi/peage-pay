import StartPage from '../pages/start.page';
import { NavigationContainer } from '@react-navigation/native';
import SignInPage from '../pages/sign-in.page';
import SignUpPage from '../pages/sign-up.page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardRouter from './dashboard.router';

export type MainRouterParamList = {
  Start: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<MainRouterParamList>();

const MainRouter = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          component={DashboardRouter}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
