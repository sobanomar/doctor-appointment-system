import React from "react";
import { Text, View } from "react-native";

const MetricCard = ({ score, text }) => {
  return (
    <View className="my-2 flex-col items-center gap-2 pt-4">
      <View className="border-[15px] border-green-300 rounded-full w-28 h-28 items-center justify-center">
        <Text className="text-xl">{score}%</Text>
      </View>
      <Text className="text-xl break-words w-28 text-center leading-6">
        {text}
      </Text>
    </View>
  );
};

export default MetricCard;
