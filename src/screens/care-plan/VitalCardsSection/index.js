import React from "react";
import { Text, View } from "react-native";
import VitalCard from "./VitalCard";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { IconsColor } from "../../home-screen/ModuleDetails";

const IconSize = 50;

const VitalCardsSection = () => {
  return (
    <View>
      <VitalCard
        name="Blood Pressure Systolic"
        unit={"mmHG"}
        value1={90}
        value2={160}
        Icon={
          <FontAwesome6 name="droplet" size={IconSize} color={IconsColor} />
        }
      />
      <VitalCard
        name="Blood Pressure Diastolic"
        unit={"mmHG"}
        value1={55}
        value2={100}
        Icon={
          <FontAwesome6 name="droplet" size={IconSize} color={IconsColor} />
        }
      />
      <VitalCard
        name="Pulse"
        unit={"mmHG"}
        value1={50}
        value2={115}
        Icon={
          <Ionicons name="pulse-sharp" size={IconSize} color={IconsColor} />
        }
      />
      <VitalCard
        name="Weight"
        unit={"lbs"}
        value1={18}
        value2={24}
        Icon={
          <MaterialIcons
            name="monitor-weight"
            size={IconSize}
            color={IconsColor}
          />
        }
      />
      <VitalCard
        name="Glucose"
        unit={"mg/dl"}
        value1={60}
        value2={200}
        Icon={<Fontisto name="blood-test" size={IconSize} color={IconsColor} />}
      />
    </View>
  );
};

export default VitalCardsSection;
