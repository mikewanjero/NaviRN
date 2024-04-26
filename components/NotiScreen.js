import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export function NotiScreen({ navigation }) {
  return (
    <View style={styles.Notis}>
      <Text>Notifications Screen!</Text>
      <Button title="Goto Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Goto Details"
        onPress={() => navigation.navigate("Details")}
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
  Notis: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFBC4D",
  },
});
