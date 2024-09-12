import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Easing } from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TaskCard = ({ name, dueTime, icon }) => (
  <View className="p-4 mb-2 bg-orange-50 rounded-lg shadow-md border-l-4 border-orange-300 flex-row items-center space-x-2">
    {icon}
    <View>
      <Text className="text-lg font-semibold text-orange-700">{name}</Text>
      <Text className="text-sm text-orange-500">Due by {dueTime}</Text>
    </View>
  </View>
);

const PendingTasks = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pendingIconColor = "#fbbf24";
  const tasks = [
    {
      name: "Weight Check",
      dueTime: "6pm",
      icon: (
        <MaterialIcons
          name="monitor-weight"
          size={44}
          color={pendingIconColor}
        />
      ),
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
      {/* Dropdown Header */}
      <TouchableOpacity
        onPress={toggleDropdown}
        className="flex-row justify-between items-center p-4 bg-orange-50 border-l-4 border-orange-300 shadow-md rounded-lg"
      >
        <Text className="text-orange-800 text-xl font-bold">
          Pending Tasks ({tasks.length})
        </Text>
        {/* Animated Icon */}
        <Animated.View style={animatedIconStyle}>
          <AntDesign name="caretup" size={20} color={"#c2410c"} />
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

export default PendingTasks;
