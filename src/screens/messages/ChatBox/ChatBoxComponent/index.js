import React, { useRef, useEffect } from "react";
import { ScrollView, View } from "react-native";
import MessageItem from "./MessageItem";
import MessagesList from "./MessagesList";
import SendMessage from "./SendMessage";

const ChatBoxComponent = () => {
  return (
    <View className="">
      <MessagesList />
      <SendMessage />
    </View>
  );
};

export default ChatBoxComponent;
