import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "./components/HomeScreen";
import { DetailsScreen } from "./components/DetailsScreen";
import { NotiScreen } from "./components/NotiScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { View, Image, Text, StyleSheet } from "react-native";
import { Table, TableWrapper, Row } from "react-native-table-component";
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function LogoTitle({ title }) {
  return (
    <React.Fragment>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{
            width: 30,
            height: 30,
            marginRight: 10,
          }}
          source={require("./assets/phamacore.png")}
        />
        <Text
          style={{
            fontSize: 20,
            color: "#000",
            fontWeight: "500",
            marginBottom: 5,
          }}
        >
          {title}
        </Text>
      </View>
    </React.Fragment>
  );
}

function Sidebar() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <LogoTitle {...props} title="Overview" />,
          headerStyle: { backgroundColor: "coral" },
          headerTintColor: "#000fed",
        })}
      />
      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <LogoTitle {...props} title="Page Details" />,
          headerStyle: { backgroundColor: "coral" },
          headerTintColor: "#000fed",
        })}
      />

      <Drawer.Screen
        name="Notifications"
        component={NotiScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => (
            <LogoTitle {...props} title="User Notifications" />
          ),
          headerStyle: { backgroundColor: "coral" },
          headerTintColor: "#000fed",
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <LogoTitle {...props} title="User Profile" />,
          headerStyle: { backgroundColor: "coral" },
          headerTintColor: "#000fed",
        })}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <LogoTitle {...props} title="Settings" />,
          headerStyle: { backgroundColor: "coral" },
          headerTintColor: "#000fed",
        })}
      />
      <Drawer.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarIcon: "information",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotiScreen}
        options={{
          tabBarIcon: "bell",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: "account",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: "cog",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Sidebar />
    </NavigationContainer>
  );
}
