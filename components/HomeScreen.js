import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen!</Text>
      <Button
        title="Goto Details"
        onPress={() => navigation.navigate("Details")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aabbaf",
    alignItems: "center",
    justifyContent: "center",
  },
});
