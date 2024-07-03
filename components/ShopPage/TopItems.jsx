import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import ThemedText from "../ThemedText/ThemedText";
import Icon from "../Icons/Icon";
import { colors } from "../../constants/Colors";
import { AppContext } from "../../context/context";
import { router } from "expo-router";
const TopItems = () => {
  const {orders}=useContext(AppContext)
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 20,
        // borderBottomWidth: 1,
        // borderBottomColor: "rgb(197,199,198)",
        justifyContent: "space-between",
      }}
    >
      <View style={{ alignContent: "center", flexDirection: "row", gap: 20 }}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?uid=R113224370&ga=GA1.2.274668747.1718577781&semt=ais_user",
          }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 100,
            resizeMode: "cover",
          }}
        />
        {/* <View>
          <ThemedText text={"Welcome Here"} size={18} />
          <ThemedText text={"Customer"} size={22} style="bold" />
        </View> */}
      </View>
      <Pressable
        style={{
          padding: 15,
          borderRadius: 200,
          backgroundColor: colors.white,
        }}
        onPress={()=>{router.push('/(tabs)/checkout')}}
      >
        <Icon
          name={"ShoppingBasket"}
          size={20}
          color={colors.grey}
          stroke={2}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: colors.primary,
            top: "-20",
            width: 20,
            height: 20,
            borderRadius: 100,
            right:0
          }}
        >
          <ThemedText
            text={orders.length}
            color={colors.white}
            align="center"
            style="bold"
          />
        </View>
      </Pressable>
    </View>
  );
};

export default TopItems;
