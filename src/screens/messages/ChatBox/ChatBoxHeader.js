import React from "react";
import { Dimensions, Text, View } from "react-native";
import { HeightPercentage } from "../../../components/utils/HeightPercentage";

const ChatBoxHeader = () => {
  const { height: screenHeight } = Dimensions.get("window");

  return (
    <View
      style={{ height: HeightPercentage(screenHeight, 9) }}
      className={` justify-between flex-row items-center px-4 bg-blue-100`}
    >
      <View className="space-x-2 flex-row items-center">
        <View className="bg-blue-400 w-12 h-12 justify-center flex rounded-2xl p-2">
          <Text className="text-center font-bold text-white text-xl">DG</Text>
        </View>
        <View>
          <Text className="text-lg font-bold">David Goins</Text>
          <Text className="text-xs">(Assigned Care Coordinator)</Text>
        </View>
      </View>
      <View className="w-3 h-3 bg-green-400 rounded-full" />
    </View>
  );
};

export default ChatBoxHeader;
