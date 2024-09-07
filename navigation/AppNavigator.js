import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ResultsScreen from "../src/screens/DetailsScreen";
import MessagesScreen from "../src/screens/Messages";
import AppointmentsScreen from "../src/screens/AppointmentsScreen";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import HomeScreen from "../src/screens/home-screen";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
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
            height: 60,
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
    </NavigationContainer>
  );
}
