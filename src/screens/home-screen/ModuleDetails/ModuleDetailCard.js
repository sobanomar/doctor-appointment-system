import React from "react";
import { Text, View } from "react-native";

const ModuleDetailCard = ({ name, quantity, Icon }) => {
  return (
    <View className="w-1/2 flex gap-2 mb-4 ">
      <View
        className="bg-white rounded-md p-3 border border-blue-300"
        style={{
          shadowColor: "#93C5FD",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.9,
          shadowRadius: 0.5,

          elevation: 2,
        }}
      >
        <Text className="text-base font-extralight ">{name}</Text>
        <View className="flex-row justify-between items-center ">
          <Text className="text-5xl font-bold pt-4">
            {quantity == null ? "-" : quantity}
          </Text>
          <View>{Icon}</View>
        </View>
      </View>
    </View>
  );
};

export default ModuleDetailCard;
