import React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.2 }} />
      <View style={{ backgroundColor: "green", flex: 0.5 }} />
      <Text>Teste View Box!</Text>
    </View>
  );
};

export default ViewBoxesWithColorAndText;
