import * as React from "react";
import { StyleSheet, Text, View, Button, Settings } from "react-native";
import { StatusBar } from "expo-status-bar";

export function SettingsScreen({ navigation }) {
  return (
    <View style={styles.Settings}>
      <Text>Settings Screen!</Text>
      <Button title="Goto Home" onPress={() => navigation.navigate("Home")} />
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Settings: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFBC4D",
  },
});
