import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Platform,
  StatusBar,
  ScrollView,
  RefreshControl,
  Text,
} from "react-native";
import Header from "./Header";
import CompletedTasks from "./CompletedTasks";
import PendingTasks from "./PendingTasks";

const MyTasks = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <Header />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#000"
            />
          }
        >
          <View
            className="p-4 py-6 flex space-y-2"
            style={{ flex: 1, backgroundColor: "#F0F9FF" }}
          >
            <View>
              <CompletedTasks />
            </View>
            <View>
              <PendingTasks />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MyTasks;
