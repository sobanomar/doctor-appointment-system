import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";

const Setting = ({ Title, SubTitle }) => {
  let classes = "flex flex-row items-center w-8 justify-center";
  return (
    <View className={`flex-row justify-between items-center mt-8`}>
      <View className="flex flex-row space-x-4">
        <View className={classes}>
          {Title == "Change password" && (
            // <EvilIcons name="lock" size={60} color="#737373" />
            <FontAwesome5 name="unlock-alt" size={30} color="#737373" />
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
        <AntDesign name="right" size={20} color="black" />
      </View>
    </View>
  );
};

export default Setting;
