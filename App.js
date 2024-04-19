import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "./components/HomeScreen";
import { DetailsScreen } from "./components/DetailsScreen";
import { NotiScreen } from "./components/NotiScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { Image, Text, StyleSheet } from "react-native";
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

function LogoTitle({ title }) {
  return (
    <React.Fragment>
      <Image
        style={{
          width: 30,
          height: 30,
        }}
        source={require("./assets/phamacore.png")}
      />
      <Text
        style={{
          fontSize: 20,
          color: "#000",
          fontWeight: "500",
          marginLeft: 50,
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
    </React.Fragment>
  );
}

function Sidebar() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} title="Overview" />,
          headerStyle: { backgroundColor: "coral" },
          headerTintColor: "#000fed",
        }}
      />
      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} title="About" />,
          headerStyle: { backgroundColor: "coral" },
          headerTintColor: "#000fed",
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotiScreen}
        options={{
          headerTitle: (props) => (
            <LogoTitle {...props} title="User Notifications" />
          ),
          headerStyle: { backgroundColor: "coral" },
          headerTintColor: "#000fed",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} title="User Profile" />,
          headerStyle: { backgroundColor: "coral" },
          headerTintColor: "#000fed",
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} title="Settings" />,
          headerStyle: { backgroundColor: "coral" },
          headerTintColor: "#000fed",
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Sidebar />
    </NavigationContainer>
  );
}
