import React from "react";
import { View, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const customDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>Custom Text</Text>
      </View>
    </View>
  );
};

export default customDrawer;
