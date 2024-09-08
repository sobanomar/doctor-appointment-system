import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, {
  Circle,
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
} from "react-native-svg";

const HalfCircularVitalIndicator = ({ value, maxValue, label, size = 100 }) => {
  const percentage = (value / maxValue) * 100;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const halfCircumference = circumference / 2;
  const strokeDashoffset =
    halfCircumference - (percentage / 100) * halfCircumference;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}: {value}
      </Text>

      <Svg width={size} height={size / 2} viewBox={`0 0 ${size} ${size}`}>
        <Defs>
          <SvgLinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="red" />
            <Stop offset="50%" stopColor="yellow" />
            <Stop offset="100%" stopColor="green" />
          </SvgLinearGradient>
        </Defs>

        {/* Background half circle */}
        <Circle
          stroke="gray"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${halfCircumference} ${halfCircumference}`}
          strokeDashoffset={0}
          transform={`rotate(-90, ${size / 2}, ${size / 2})`} // Start from the top
        />

        {/* Foreground (gradient) half circle */}
        <Circle
          stroke="url(#grad)"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${halfCircumference} ${halfCircumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`} // Start from the top
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HalfCircularVitalIndicator;
