import React from "react";
import { Text, View } from "react-native";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxComponent from "./ChatBoxComponent";

const ChatBox = () => {
  return (
    <View>
      <ChatBoxHeader />
      <ChatBoxComponent />
    </View>
  );
};

export default ChatBox;
