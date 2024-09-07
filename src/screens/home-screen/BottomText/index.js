import React from "react";
import { Text, View } from "react-native";

const BottomText = () => {
  return (
    <View className="flex gap-2">
      <Text
        className="text-blue-400 text-4xl font-bold"
        style={{ lineHeight: 50 }}
      >
        Hospital-at-home Anytime, Anywhere
      </Text>
      <Text className="text-blue-400 text-base font-semibold">
        Driving better decisions and outcomes
      </Text>
    </View>
  );
};

export default BottomText;
