import React from "react";
import { View, Text } from "react-native";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        merginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Text>BOTTOM</Text>
    </View>
  );
}
