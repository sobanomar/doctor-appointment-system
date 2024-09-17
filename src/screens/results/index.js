import React, { useState, useCallback } from "react";
import { Text, View, ScrollView, RefreshControl } from "react-native";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";
import ResultsCalendar from "./ResultsCalendar";
import VitalsResultSection from "./VitalsResultSection";

const ResultsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a network request or any action on refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // You can replace this with actual data fetching logic
  }, []);

  return (
    <View className="bg-blue-500 flex-1">
      <SafeAreaView>
        <ScrollView
          className="h-full"
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View className="bg-blue-50 h-full">
            <Header />
            <View className="m-3">
              <ResultsCalendar />
              <VitalsResultSection />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ResultsScreen;
