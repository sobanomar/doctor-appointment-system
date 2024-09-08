import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import HeaderBlueBg from "../../components/common/HeaderBlueBg";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "./Header";
import ModuleDetails from "./ModuleDetails";
import UserMatrics from "./UserMatrics";
import BottomText from "./BottomText";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="bg-blue-500">
      <SafeAreaView>
        <View className="bg-blue-50">
          <View className="flex flex-col">
            <HeaderHome />
            <View className="bg-blue-500 rounded-r-full self-start pl-4 pr-3 py-1 mt-3">
              <Text className="text-white">Today's Summary</Text>
            </View>
          </View>

          <View className="mx-3">
            <ModuleDetails />
            <ScrollView className="h-[300px]">
              <UserMatrics />
              <BottomText />
              <View className="h-8" />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
