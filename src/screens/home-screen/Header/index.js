import React from "react";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const HeaderHome = () => {
  return (
    <View className="flex-row items-center justify-between my-2">
      <View className="flex-row items-center gap-2">
        <View className="bg-gray-300 w-12 h-12 justify-center flex rounded-full p-2">
          <Text className="text-center font-bold text-white text-xl">TP</Text>
        </View>
        <View>
          <Text className="font-bold text-white text-xl">Hi, Test!</Text>
          <Text className="text-white">Today's Summary</Text>
        </View>
      </View>
      <View>
        <Ionicons name="settings-sharp" size={30} color="white" />
      </View>
    </View>
  );
};

export default HeaderHome;
