import React from "react";
import { Text, View } from "react-native";
import ModuleDetailCard from "./ModuleDetailCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const IconSize = 50;
const IconsColor = "#c9cbcf";

const ModuleDetails = () => {
  return (
    <View className="flex-row justify-between flex-wrap my-5">
      <ModuleDetailCard
        name={"Pending Vitals"}
        quantity={4}
        Icon={
          <FontAwesome5 name="heartbeat" size={IconSize} color={IconsColor} />
        }
      />
      <ModuleDetailCard
        name={"Messages"}
        Icon={<AntDesign name="message1" size={IconSize} color={IconsColor} />}
      />
      <ModuleDetailCard
        name={"Devices"}
        quantity={1}
        Icon={
          <FontAwesome5 name="stethoscope" size={IconSize} color={IconsColor} />
        }
      />
      <ModuleDetailCard
        name={"Assessments"}
        quantity={0}
        Icon={
          <FontAwesome5
            name="clipboard-list"
            size={IconSize}
            color={IconsColor}
          />
        }
      />
    </View>
  );
};

export default ModuleDetails;
