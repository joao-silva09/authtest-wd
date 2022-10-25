import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Login from "../screens/login";
import Splash from "../screens/splash";
import { StackRoutes } from "./stack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
