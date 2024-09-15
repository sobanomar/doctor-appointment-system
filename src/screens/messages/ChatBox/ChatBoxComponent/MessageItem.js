import React from "react";
import { Text, View } from "react-native";

const MessageItem = ({ text, user }) => {
  let bgColor, alignment, textColor, border;

  if (user == 1) {
    bgColor = "bg-blue-400";
    alignment = "self-end";
    textColor = "white";
    border = "rounded-br";
  } else {
    bgColor = "bg-blue-100";
    alignment = "self-start";
    textColor = "black";
    border = "rounded-tl";
  }

  return (
    <View
      className={`my-1 p-3 ${bgColor} ${alignment} rounded-full ${border}  `}
    >
      <Text className={`text-${textColor}`}>{text}</Text>
    </View>
  );
};

export default MessageItem;
