import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const Setting = ({ Title, SubTitle }) => {
  let classes = "flex flex-row items-center ";
  Title == "Change password"
    ? (classes = "flex flex-row items-center")
    : (classes = "flex flex-row items-center gap-x-2.5 mr-2.5");
  return (
    <View
      className={`flex-row justify-between items-center mt-${
        Title == "Change password" ? "5" : "8"
      }`}
    >
      <View className="flex flex-row gap-4">
        <View className={classes}>
          {Title == "Change password" && (
            <EvilIcons name="lock" size={50} color="#737373" />
          )}
          {Title == "Change email" && (
            <MaterialCommunityIcons
              name="email-edit"
              size={32}
              color="#737373"
            />
          )}
          {Title == "Screen Lock" && (
            <Ionicons name="finger-print-outline" size={32} color="black" />
          )}
        </View>
        <View>
          <Text className="text-xl ">{Title}</Text>
          <Text className="text-neutral-500 text-sm">{SubTitle}</Text>
        </View>
      </View>
      <View>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </View>
  );
};

export default Setting;
