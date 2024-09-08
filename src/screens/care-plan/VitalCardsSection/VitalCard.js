import React from "react";
import { Text, View } from "react-native";

const VitalCard = ({ name, unit, value1, value2, Icon }) => {
  return (
    <View className="rounded-xl py-3 px-2 mb-4 border-blue-400 border flex flex-row space-x-3 items-center border-l-8">
      <View className="w-16 flex items-center">{Icon}</View>
      <View>
        <Text className="text-xs font-thin text-neutral-500">{name}</Text>
        <View className="flex flex-row space-x-1 items-end mt-1">
          <Text className="text-3xl  font-bold">
            {value1} - {value2}
          </Text>
          <Text className="mb-1">{unit}</Text>
        </View>
      </View>
    </View>
  );
};

export default VitalCard;
