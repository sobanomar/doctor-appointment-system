import React from "react";
import { Dimensions, Text, View } from "react-native";
import { HeightPercentage } from "../../../components/utils/HeightPercentage";

const Header = () => {
  const { height: screenHeight } = Dimensions.get("window");
  return (
    <View
      style={{ height: HeightPercentage(screenHeight, 5) }}
      className={`bg-blue-500 flex justify-center items-center`}
    >
      <Text className="text-white text-2xl font-bold">Messages</Text>
    </View>
  );
};

export default Header;
