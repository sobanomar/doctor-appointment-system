import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center justify-between bg-blue-500 px-3 py-4">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={40} color="white" />
      </TouchableOpacity>
      <View className="items-center">
        <Text className="text-2xl font-bold text-white">My Tasks</Text>
      </View>
      <Feather name="refresh-cw" size={36} color="white" />
    </View>
  );
};

export default Header;
