import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export function DetailsScreen({ navigation }) {
  return (
    <View style={styles.details}>
      <Text>Details Screen!</Text>
      <Button title="Goto Home" onPress={() => navigation.navigate("Home")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFBC4D",
  },
});
