import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "./HomeScreen";
import { DetailsScreen } from "./DetailsScreen";
import { NotiScreen } from "./NotiScreen";
import { ProfileScreen } from "./ProfileScreen";
import { SettingsScreen } from "./SettingsScreen";
import { View, Image, Text, StyleSheet } from "react-native";

const Tab = createMaterialBottomTabNavigator();

function LogoTitle({ title }) {
  // LogoTitle component definition
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

export function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: "home",
          tabBarLabel: () => <LogoTitle title={"Home"} />,
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarIcon: "information",
          tabBarLabel: () => <LogoTitle title={"Details"} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotiScreen}
        options={{
          tabBarIcon: "bell",
          tabBarLabel: () => <LogoTitle title={"Notifications"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: "account",
          tabBarLabel: () => <LogoTitle title={"Profile"} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: "cog",
          tabBarLabel: () => <LogoTitle title={"Settings"} />,
        }}
      />
    </Tab.Navigator>
  );
}
