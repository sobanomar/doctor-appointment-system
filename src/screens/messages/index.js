import React from "react";
import { Text, View } from "react-native";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatBox from "./ChatBox";

const MessagesScreen = () => {
  return (
    <View className="bg-blue-500 flex-1">
      <SafeAreaView>
        <View className="bg-blue-50">
          <Header />
          <ChatBox />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MessagesScreen;
