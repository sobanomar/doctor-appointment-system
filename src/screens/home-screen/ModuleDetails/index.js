import React from "react";
import { Text, View } from "react-native";
import ModuleDetailCard from "./ModuleDetailCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SmallCard from "./SmallCard";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const IconSize = 50;
const IconsColor = "#c9cbcf";

const SmallIconSize = 40;

const ModuleDetails = () => {
  return (
    <View className="flex-row justify-between flex-wrap mt-3">
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
      <SmallCard
        Icon={
          <Foundation
            name="telephone"
            size={SmallIconSize}
            color={IconsColor}
          />
        }
        text={"TeleHealth"}
      />
      <SmallCard
        Icon={
          <MaterialCommunityIcons
            name="file-document-edit"
            size={SmallIconSize}
            color={IconsColor}
          />
        }
        text={"Careplan"}
      />
    </View>
  );
};

export default ModuleDetails;
