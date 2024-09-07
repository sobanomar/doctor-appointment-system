import React from "react";
import { Text, View } from "react-native";

const SmallCard = ({ Icon, text }) => {
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
        <View className="flex-row gap-2 items-center ">
          <View>{Icon}</View>
          <Text className="text-base font-extralight">{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default SmallCard;
