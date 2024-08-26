import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../src/screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ResultsScreen from "../src/screens/DetailsScreen";
import MessagesScreen from "../src/screens/Messages";
import AppointmentsScreen from "../src/screens/AppointmentsScreen";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              return <Entypo name="home" size={24} color={color} />;
            } else if (route.name === "Results") {
              return <Ionicons name="document-text" size={24} color={color} />;
            } else if (route.name === "Messages") {
              return (
                <MaterialCommunityIcons
                  name="android-messages"
                  size={28}
                  color={color}
                />
              );
            } else if (route.name === "Appointments") {
              return (
                <FontAwesome5 name="calendar-alt" size={22} color={color} />
              );
            }

            // You can return any component that you like here!
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            height: 50,
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
