import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BottomTabs } from "./BottomTabs";

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen!</Text>
      <Button
        title="Goto Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Goto Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button
        title="Goto Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Goto Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <StatusBar style="auto" />
      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
