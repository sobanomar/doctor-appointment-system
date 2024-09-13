import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View, TextInput } from "react-native";
import Modal from "react-native-modal";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { Picker } from "@react-native-picker/picker";

const AddManualReading = () => {
  const [vital, setVital] = useState("glucose");
  const [isModalOpen, setModalOpen] = useState(false);
  const [mealType, setMealType] = useState("beforeMeal");
  const [value, setValue] = useState("");

  const scale = useSharedValue(0);

  const openModal = () => {
    setModalOpen(true);
    scale.value = withTiming(1, { duration: 300 });
  };

  const closeModal = () => {
    scale.value = withTiming(0, { duration: 100 });
    setModalOpen(false);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const getUnit = () => {
    switch (vital) {
      case "bloodpressure":
        return "mmHg";
      case "pulse":
        return "bpm";
      case "weight":
        return "lbs";
      default:
        return "mg/dl";
    }
  };

  return (
    <View className="p-3 border-t border-neutral-400 flex items-center">
      <TouchableOpacity
        className="bg-blue-500 p-2 px-4 rounded-full"
        onPress={openModal}
      >
        <Text className="text-white">Add Manual Reading</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalOpen}
        backdropOpacity={1}
        onBackdropPress={closeModal}
        backdropTransitionOutTiming={0}
        customBackdrop={
          <BlurView
            tint="dark"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            intensity={100}
          />
        }
      >
        <Animated.View
          style={[
            {
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
            },
            animatedStyle,
          ]}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Add Manual Reading
          </Text>

          <View className="mx-4 my-4">
            <View className="mb-2">
              <Text className="text-sm py-1">Select Vital</Text>
              <View className="rounded-lg border-blue-500 border">
                <Picker
                  selectedValue={vital}
                  onValueChange={(itemValue) => setVital(itemValue)}
                >
                  <Picker.Item label="Glucose" value="glucose" />
                  <Picker.Item label="Blood Pressure" value="bloodpressure" />
                  <Picker.Item label="Weight" value="weight" />
                  <Picker.Item label="Pulse" value="pulse" />
                </Picker>
              </View>
            </View>

            <View className="mb-2">
              <Text className="text-sm py-1">
                Enter{" "}
                {vital === "bloodpressure"
                  ? "Blood Pressure"
                  : vital.charAt(0).toUpperCase() + vital.slice(1)}{" "}
                Value
              </Text>
              <View
                className="border border-blue-500 rounded-lg px-2 py-1"
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TextInput
                  value={value}
                  onChangeText={setValue}
                  keyboardType="numeric"
                  placeholder="Enter value"
                  style={{
                    padding: 10,
                    flex: 1,
                    marginRight: 10,
                  }}
                />
                <Text className="text-xs ">{getUnit()}</Text>
              </View>
            </View>

            <View className="mb-2">
              <Text className="text-sm py-1">Enter Meal Type</Text>
              <View className="border border-blue-500 rounded-lg">
                <Picker
                  selectedValue={mealType}
                  onValueChange={(itemValue) => setMealType(itemValue)}
                >
                  <Picker.Item label="Before Meal" value="beforeMeal" />
                  <Picker.Item label="After Meal" value="afterMeal" />
                  <Picker.Item label="Fasting" value="fasting" />
                  <Picker.Item label="Casual" value="casual" />
                  <Picker.Item label="Bedtime" value="bedtime" />
                </Picker>
              </View>
            </View>
          </View>
          <View className="flex flex-row justify-center space-x-3 mx-6">
            <TouchableOpacity
              onPress={closeModal}
              className="border border-blue-500 rounded-full px-5 py-2 w-1/2 items-center"
            >
              <Text className="text-blue-500 text-base">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={closeModal}
              className="bg-blue-500 rounded-full px-5 py-2 w-1/2 items-center"
            >
              <Text className="text-white text-base">Confirm</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
};

export default AddManualReading;
