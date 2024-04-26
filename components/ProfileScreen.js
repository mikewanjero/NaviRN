import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export function ProfileScreen({ navigation }) {
  return (
    <View style={styles.Profile}>
      <Text>Profile Screen!</Text>
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
        title="Goto Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <StatusBar style="auto" />
      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  Profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
});
