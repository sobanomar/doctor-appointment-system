import React from "react";
import Header from "./header";
import {
  SafeAreaView,
  View,
  Platform,
  StatusBar,
  ScrollView,
  RefreshControl,
  Text,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import GeneralInfo from "./General-Info";
import Setting from "./Setting";
const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        className="h-full"
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View className="bg-blue-50 flex-1">
          <Header />
          <ScrollView
            refreshControl={
              <RefreshControl
                // refreshing={refreshing}
                // onRefresh={onRefresh}
                tintColor="#000"
              />
            }
          >
            <View
              className="p-4 py-6 flex space-y-10 justify-between"
              style={{ flex: 1, backgroundColor: "#F0F9FF" }}
            >
              <GeneralInfo
                firstName={"Test"}
                lastName={"Patient"}
                Email={"kimw7152@gmail.com"}
              />
              <View className="shadow-lg rounded-lg  border-stone-100 border-spacing-1 border-2 bg-blue-50 p-4 ">
                <Text className="font-medium">Settings & Perferences</Text>
                {/* <View className="flex-row justify-between items-center mt-5">
                  <View className="flex flex-row gap-4">
                    <View className="flex flex-row items-center ">
                      <EvilIcons name="lock" size={50} color="#737373" />
                    </View>
                    <View>
                      <Text className="text-xl ">Change password</Text>
                      <Text className="text-neutral-500 text-sm">
                        Reset your app password
                      </Text>
                    </View>
                  </View>
                  <View>
                    <AntDesign name="right" size={24} color="black" />
                  </View>
                </View>
                <View className="flex-row justify-between items-center mt-8">
                  <View className="flex flex-row gap-4">
                    <View className="flex flex-row items-center gap-x-2.5 mr-2.5 ">
                      <MaterialCommunityIcons
                        name="email-edit"
                        size={32}
                        color="#737373"
                      />
                    </View>
                    <View>
                      <Text className="text-xl font-normal">Change email</Text>
                      <Text className="text-neutral-500 text-sm">
                        Change your email address
                      </Text>
                    </View>
                  </View>
                  <View>
                    <AntDesign name="right" size={24} color="black" />
                  </View>
                </View>
                <View className="flex-row justify-between items-center mt-8">
                  <View className="flex flex-row gap-4">
                    <View className="flex flex-row items-center gap-x-2.5 mr-2.5 ">
                      <Ionicons
                        name="finger-print-outline"
                        size={32}
                        color="black"
                      />
                    </View>
                    <View>
                      <Text className="text-xl font-normal">Screen Lock</Text>
                      <Text className="text-neutral-500 text-sm">
                        Biometrics & screen locks
                      </Text>
                    </View>
                  </View>
                  <View>
                    <AntDesign name="right" size={24} color="black" />
                  </View>
                </View> */}
                <Setting
                  Title={"Change password"}
                  SubTitle={"Reset your app password"}
                />
                <Setting
                  Title={"Change email"}
                  SubTitle={"Change your email address"}
                />
                <Setting
                  Title={"Screen Lock"}
                  SubTitle={"Biometrics & screen locks"}
                />
              </View>
            </View>
            <View className="w-full flex flex-row justify-center items-end  h-3/6 mt-8">
              <Text className="text-center font-light">
                App Version <Text className="text-neutral-500">1.0.0</Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
