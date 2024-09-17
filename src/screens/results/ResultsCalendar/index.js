import React from "react";
import { Text, View } from "react-native";
import Calendar from "react-native-swipe-calendar";

const ResultsCalendar = () => {
  return (
    <View className="p-1 rounded-xl border-blue-400 border-2 overflow-hidden">
      <Calendar
        pageInterval="week"
        theme={{
          todayIndicatorDotColor: "#60A5FA",
          dayLabelColor: "#60A5FA",
          headerFontSize: 16,
          dayLabelFontSize: 10,
        }}
      />
    </View>
  );
};

export default ResultsCalendar;
