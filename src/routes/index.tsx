import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Welcome } from "../pages/Welcome";
import { SignIn } from "../pages/SignIn";
import { Login } from "../pages/Login";

const Stack = createNativeStackNavigator();
type StackNavigation = {
  Welcome: undefined;
  SignIn: undefined;
  Login: undefined;
};
export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
