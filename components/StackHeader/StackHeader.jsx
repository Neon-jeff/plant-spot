import { View, Text, Pressable } from "react-native";
import React from "react";
import ThemedText from "../ThemedText/ThemedText";
import Icon from "../Icons/Icon";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/Colors";

const StackHeader = ({ label = "", backroute = "" }) => {
  return (
    <SafeAreaView
      style={{ flexDirection: "row", alignItems: "center", padding: 20,gap:20,backgroundColor:colors.background }}
    >
      <Pressable
        onPress={() => {
          router.push(backroute);
        }}
        style={{backgroundColor:colors.white,padding:10,borderRadius:100}}
      >
        <Icon name={"ChevronLeft"} color="black"  stroke={2} size={20} />
      </Pressable>
      <ThemedText text={label} size={22} style="medium" />
    </SafeAreaView>
  );
};

export default StackHeader;
