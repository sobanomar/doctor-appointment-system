import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

const GeneralInfo = ({ firstName, lastName, Email }) => {
  return (
    <View className="shadow-lg rounded-lg bg-blue-50 p-4 flex-row justify-between items-center">
      <View className="flex flex-row gap-4">
        <View className="bg-blue-500 rounded-full flex flex-row items-center ">
          <Text className="text-white px-4 text-lg">
            {firstName[0] + lastName[0]}
          </Text>
        </View>
        <View>
          <Text className="text-2xl font-medium">
            {firstName + " " + lastName}
          </Text>
          <Text className="text-neutral-500 text-base">{Email}</Text>
        </View>
      </View>
      <View>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </View>
  );
};

export default GeneralInfo;
