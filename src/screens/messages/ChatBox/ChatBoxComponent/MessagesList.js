import React, { useRef, useEffect } from "react";
import { Dimensions, FlatList, ScrollView, View } from "react-native";
import MessageItem from "./MessageItem";
import { HeightPercentage } from "../../../../components/utils/HeightPercentage";

const messages = [
  { text: "Thanks a lot, doctor 👍", user: 1 },
  { text: "No problem! Let me know if you need anything.", user: 2 },
  { text: "Will do. Rest and meds, right?", user: 1 },
  { text: "Exactly. Rest up and take the meds.", user: 2 },
  { text: "Got it, thanks!", user: 1 },
  { text: "Avoid heavy activity for a few days.", user: 2 },
  { text: "Okay, I'll take it easy.", user: 1 },
  { text: "You should feel better in a week.", user: 2 },
  { text: "How long until I recover?", user: 1 },
  { text: "About a week, but everyone is different.", user: 2 },
  { text: "Alright. Fever's still there, though.", user: 1 },
  { text: "That's normal. It'll go down soon.", user: 2 },
  { text: "Okay, thanks.", user: 1 },
  { text: "Keep an eye on it, and let me know.", user: 2 },
  { text: "Sure. What if it gets worse?", user: 1 },
  { text: "Contact me or go to the ER if needed.", user: 2 },
  { text: "Got it. Thanks again.", user: 1 },
  { text: "Take care.", user: 2 },
  { text: "Hi.", user: 1 },
  { text: "Hello! How can I assist you?", user: 2 },
];

const MessagesList = () => {
  const scrollViewRef = useRef();
  const { height: screenHeight } = Dimensions.get("window");
  // console.log("screenHeight", screenHeight);

  // Automatically scroll to the bottom when messages are updated or on mount
  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    // <ScrollView
    //   ref={scrollViewRef}
    //   showsVerticalScrollIndicator={false}
    //   className="h-[78%] bg-slate-700"
    //   contentContainerStyle={{
    //     marginHorizontal: 16,
    //     display: "flex",
    //     justifyContent: "flex-end",
    //   }}
    // >
    //   {messages.map((message, index) => (
    //     <MessageItem key={index} text={message.text} user={message.user} />
    //   ))}
    //   {/* <View className="h-40" /> */}
    // </ScrollView>
    <View
      style={{ height: HeightPercentage(screenHeight, 72.5) }}
      className="mx-3 "
    >
      <FlatList
        inverted
        showsVerticalScrollIndicator={false}
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MessageItem text={item.text} user={item.user} />
        )}
      />
    </View>
  );
};

export default MessagesList;
