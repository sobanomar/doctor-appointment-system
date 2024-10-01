import React, { useState } from "react";
import {
  View,
  Platform,
  StatusBar,
  ScrollView,
  RefreshControl,
} from "react-native";
import Header from "./Header";

import HalfCircularVitalIndicator from "../../components/VitalLevelIndicator";
import VitalCard from "./VitalCardsSection";
import VitalCardsSection from "./VitalCardsSection";
import { SafeAreaView } from "react-native-safe-area-context";

const CarePlan = () => {
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
          // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
            className="p-4 py-6"
            style={{ flex: 1, backgroundColor: "#F0F9FF" }}
          >
            <VitalCardsSection />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CarePlan;
