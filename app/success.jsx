import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../components/Icons/Icon";
import { colors } from "../constants/Colors";
import ThemedText from "../components/ThemedText/ThemedText";
import { ScreenSize } from "../constants/Sizes";
import { router } from "expo-router";
import { AppContext } from "../context/context";

const Success = () => {
  const { setOrders } = useContext(AppContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        gap: 25,
        justifyContent:'center'
      }}
    >
      <Icon name={"BadgeCheck"} color={colors.primary} stroke={1.5} size={70} />
      <View style={{ gap: 5 }}>
        <ThemedText
          text={"Order Confirmed"}
          size={30}
          color={colors.primary}
          style="bold"
          align="center"
        />
        <ThemedText
          text={
            "Order submitted successfully, our delivery team will respond to you shortly via email "
          }
          color={colors.grey}
          align="center"
          size={18}
        />
      </View>
      <Pressable
        style={{
          backgroundColor: colors.primary,
          padding: 20,
          borderRadius: 100,
        }}
        onPress={() => {
          setOrders([]);
          router.push("(tabs)/shop");
        }}
      >
        <ThemedText
          text={"Continue Shopping"}
          color={colors.white}
          size={18}
          align="center"
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default Success;
