import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Easing } from "react-native-reanimated";

import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const TaskCard = ({ name, dueTime, icon }) => (
  <View className="p-4 mb-2 bg-green-100 rounded-lg shadow-md border-l-4 border-green-600 flex-row justify-between items-center">
    <View className="flex-row space-x-2">
      {icon}
      <View>
        <Text className="text-lg font-semibold text-green-700">{name}</Text>
        <Text className="text-sm text-green-500">Completed by {dueTime}</Text>
      </View>
    </View>
    <AntDesign name="checkcircle" size={20} color={"green"} />
  </View>
);

const CompletedTasks = () => {
  const [isOpen, setIsOpen] = useState(true);
  const iconSize = 40;
  const tasks = [
    {
      name: "Blood Pressure",
      dueTime: "10pm",
      icon: <FontAwesome6 name="droplet" size={iconSize} color={"green"} />,
    },
    {
      name: "Pulse Check",
      dueTime: "9pm",
      icon: <Ionicons name="pulse-sharp" size={iconSize} color={"green"} />,
    },
    {
      name: "Glucose Level",
      dueTime: "8pm",
      icon: <Fontisto name="blood-test" size={iconSize} color={"green"} />,
    },
  ];

  const dropDownHeight = tasks.length * 90;

  const animatedHeight = useSharedValue(isOpen ? dropDownHeight : 0);
  const rotation = useSharedValue(isOpen ? 0 : 180); // Initial rotation value

  // Toggle the dropdown and update the animated height and icon rotation
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    animatedHeight.value = withTiming(isOpen ? 0 : dropDownHeight, {
      duration: 500,
      easing: Easing.out(Easing.quad),
    });

    rotation.value = withTiming(isOpen ? 180 : 0, {
      duration: 500,
      easing: Easing.out(Easing.quad),
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      overflow: "hidden",
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View>
      {/* Updated Dropdown Header */}
      <TouchableOpacity
        onPress={toggleDropdown}
        className="flex-row justify-between items-center p-4 bg-green-100 border-l-4 border-green-600 shadow-md rounded-lg"
      >
        <Text className="text-green-700 text-xl font-bold">
          Completed Tasks ({tasks.length})
        </Text>
        {/* Animated Icon */}
        <Animated.View style={animatedIconStyle}>
          <AntDesign name="caretup" size={16} color={"green"} />
        </Animated.View>
      </TouchableOpacity>

      {/* Animated Dropdown Content */}
      <Animated.View style={[animatedStyle, { marginTop: 10 }]}>
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </Animated.View>
    </View>
  );
};

export default CompletedTasks;
