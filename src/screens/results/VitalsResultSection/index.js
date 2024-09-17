import React from "react";
import { Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import VitalsCard from "./VitalsCard";
import { IconsColor, IconSize } from "../../home-screen/ModuleDetails";

const VitalsResultSection = () => {
  return (
    <View className="my-3 mt-5">
      <VitalsCard
        name="Pulse"
        unit={"bpm"}
        value={"98"}
        Icon={
          <Ionicons name="pulse-sharp" size={IconSize} color={IconsColor} />
        }
        date={"01 Aug, 2024"}
        navigateTo={"PulseResults"}
      />
      <VitalsCard
        name="Blood Pressure"
        unit={"mmHG"}
        value={"93/73"}
        Icon={
          <FontAwesome6 name="droplet" size={IconSize} color={IconsColor} />
        }
        date={"01 Aug, 2024"}
        navigateTo={"BloodPressureResults"}
      />

      <VitalsCard
        name="Glucose"
        unit={"mg/dL"}
        value={"96"}
        Icon={<Fontisto name="blood-test" size={IconSize} color={IconsColor} />}
        date={"17 Sep, 2024"}
        navigateTo={"GlucoseResults"}
      />
      <VitalsCard
        name="Weight"
        unit={"Lbs"}
        value={"148.0"}
        Icon={
          <MaterialIcons
            name="monitor-weight"
            size={IconSize}
            color={IconsColor}
          />
        }
        date={"17 Sep, 2024"}
        navigateTo={"WeightResults"}
      />
    </View>
  );
};

export default VitalsResultSection;
