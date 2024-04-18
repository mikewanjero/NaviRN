import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./components/HomeScreen";
import { DetailsScreen } from "./components/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Overview",
            headerStyle: { backgroundColor: "coral" },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "About",
            headerStyle: { backgroundColor: "coral" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
