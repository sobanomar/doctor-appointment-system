import React from "react";
import { Text, View } from "react-native";
import HeaderBlueBg from "../../components/common/HeaderBlueBg";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "./Header";
import ModuleDetails from "./ModuleDetails";

const HomeScreen = () => {
  return (
    <View>
      <HeaderBlueBg />
      <SafeAreaView>
        <View className="mx-4">
          <HeaderHome />
          <ModuleDetails />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
