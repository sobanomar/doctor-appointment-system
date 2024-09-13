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
import AddManualReading from "./AddManualREading";

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
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor="#000"
              />
            }
          >
            <View
              className="p-4 py-6 flex space-y-2 justify-between"
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

          {/* Add Manual Reading */}
          <AddManualReading />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MyTasks;
