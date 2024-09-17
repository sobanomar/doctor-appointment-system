import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";

const VitalsCard = ({ name, unit, value, Icon, date, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <View className="rounded-xl py-4 mb-3 border-blue-400 border flex-row justify-between pr-4 border-l-8">
        <View className="flex-row space-x-1 items-center">
          <View className="w-16 flex items-center">{Icon}</View>
          <View>
            <Text className="text-xs font-thin text-neutral-500">{name}</Text>
            <View className="flex flex-row space-x-1 items-end mt-1">
              <Text className="text-3xl  font-bold">{value}</Text>
              <Text className="mb-1">{unit}</Text>
            </View>
          </View>
        </View>
        <View className="relative w-20 justify-end items-end">
          <Text className="text-xs text-neutral-600 absolute right-0 -top-2">
            {date}
          </Text>
          <FontAwesome6 name="chevron-right" size={26} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VitalsCard;
