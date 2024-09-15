import React from "react";
import { Dimensions, Text, TextInput, View } from "react-native";
import { HeightPercentage } from "../../../../components/utils/HeightPercentage";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SendMessage = () => {
  const { height: screenHeight } = Dimensions.get("window");
  return (
    <View
      style={{ height: HeightPercentage(screenHeight, 6) }}
      className="bg-blue-100 flex items-center flex-row justify-center px-3"
    >
      <TextInput className="bg-white border-[0.5px] border-blue-200 rounded-full h-[35px] w-[90%] px-4" />
      <View className="">
        <MaterialCommunityIcons name="send-circle" size={40} color="#60a5fa" />
      </View>
    </View>
  );
};

export default SendMessage;
