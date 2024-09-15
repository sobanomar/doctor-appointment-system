import React from "react";
import { Button, Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ResultsScreen from "../src/screens/DetailsScreen";
import AppointmentsScreen from "../src/screens/AppointmentsScreen";
import HomeScreen from "../src/screens/home-screen";
import CarePlan from "../src/screens/care-plan";
import MyTasks from "../src/screens/my-tasks";
import MessagesScreen from "../src/screens/messages";
import { HeightPercentage } from "../src/components/utils/HeightPercentage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  const { height: screenHeight } = Dimensions.get("window");
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconComponent;

          if (route.name === "Home") {
            iconComponent = <Entypo name="home" size={24} color={color} />;
          } else if (route.name === "Results") {
            iconComponent = (
              <Ionicons name="document-text" size={24} color={color} />
            );
          } else if (route.name === "Messages") {
            iconComponent = (
              <MaterialCommunityIcons
                name="android-messages"
                size={28}
                color={color}
              />
            );
          } else if (route.name === "Appointments") {
            iconComponent = (
              <FontAwesome5 name="calendar-alt" size={22} color={color} />
            );
          }

          return (
            <View
              style={{
                height: 40,
                width: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                backgroundColor: focused
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
              }}
            >
              {iconComponent}
            </View>
          );
        },
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#E5E5E5",
        tabBarStyle: {
          height: HeightPercentage(screenHeight, 7.5),
          backgroundColor: "#3B82F6",
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarLabelStyle: {
          fontWeight: "semibold",
          marginBottom: 3,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Results" component={ResultsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
    </Tab.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: "transparentModal", // modal for slide in
        }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="CarePlan" component={CarePlan} />
        <Stack.Screen name="MyTasks" component={MyTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
