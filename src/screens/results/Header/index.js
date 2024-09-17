import React from "react";
import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Header = () => {
  return (
    <View className="bg-blue-500 flex-row p-4 py-4 items-center">
      <View className="w-[37%]">
        <Feather name="refresh-cw" size={30} color="white" />
      </View>
      <View className="w-[63%] flex-row justify-between">
        <Text className="text-2xl text-white font-bold">Results</Text>
        <View className="flex-row items-center space-x-3">
          <FontAwesome5 name="calendar-alt" size={24} color="white" />
          <Ionicons name="add-circle" size={34} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Header;
