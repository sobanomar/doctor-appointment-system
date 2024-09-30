import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <View className="flex-row items-center justify-between p-3 bg-blue-500">
      <View className="flex-row items-center gap-2">
        <View className="bg-gray-300 w-12 h-12 justify-center flex rounded-full p-2">
          <Text className="text-center font-bold text-white text-xl">TP</Text>
        </View>
        <View>
          <Text className="text-white text-sm font-extralight">
            {formattedDate}
          </Text>
          <Text className="font-bold text-white text-2xl">Hi, Username!</Text>
        </View>
      </View>
      <View>
        <Ionicons
          name="settings-sharp"
          size={30}
          color="white"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
};

export default Header;
