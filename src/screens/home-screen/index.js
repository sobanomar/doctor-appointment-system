import React from "react";
import { ScrollView, Text, View } from "react-native";
import HeaderBlueBg from "../../components/common/HeaderBlueBg";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "./Header";
import ModuleDetails from "./ModuleDetails";
import UserMatrics from "./UserMatrics";

const HomeScreen = () => {
  return (
    <View className="bg-blue-50">
      <SafeAreaView>
        <HeaderBlueBg />
        <View className="mx-4">
          <HeaderHome />
        </View>
        <ScrollView className="bg-transparent">
          <View className="mx-4 mb-32">
            <ModuleDetails />
            <UserMatrics />
            <UserMatrics />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
