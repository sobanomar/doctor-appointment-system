import React from "react";
import { Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MetricCard from "./MetricCard";

const UserMatrics = () => {
  return (
    <View className="border border-blue-300 rounded-md p-5 bg-white mb-4 ">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-semibold">Your Metrics</Text>
        <FontAwesome6 name="circle-info" size={24} color="gray" />
      </View>
      <Text className="text-sm text-neutral-500 my-2">
        Review your performance report for Aug 24
      </Text>
      <View className="flex-row justify-around">
        <MetricCard score={"100"} text={"Daily Compliance"} />
        <MetricCard score={"100"} text={"Health Score"} />
      </View>
    </View>
  );
};

export default UserMatrics;
