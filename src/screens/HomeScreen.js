// screens/HomeScreen.js

import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        color={"tomato"}
        title="Go to Results"
        onPress={() => navigation.navigate("Results")}
      />
    </View>
  );
}
