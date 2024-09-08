import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center bg-blue-500">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex-row items-center gap-2 p-4"
      >
        <Ionicons name="arrow-back-circle" size={40} color="white" />
      </TouchableOpacity>
      <View className="absolute items-center flex w-full">
        <Text className="text-2xl font-bold text-white">My Care Plan</Text>
      </View>
    </View>
  );
};

export default Header;
