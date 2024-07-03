import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./../constants/Colors";
import ThemedText from "../components/ThemedText/ThemedText";
import { ScreenSize } from "../constants/Sizes";
import Icon from "../components/Icons/Icon";
import { TabRouter } from "@react-navigation/native";
import { router } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
      }}
    >
      <Image
        source={require("../assets/images/cactus.png")}
        style={{
          height: 0.4 * ScreenSize.height,
          width: 0.6 * ScreenSize.width,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <ThemedText
          text={"Healthy plants for your beautiful  "}
          size={35}
          style="regular"
        >
          <Text style={{ fontFamily: "bold", color: colors.primary }}>
            Decors
          </Text>
        </ThemedText>
      </View>

      <Image
        source={require("../assets/images/plant.png")}
        style={{
          height: 0.2 * ScreenSize.height,
          width: 0.5 * ScreenSize.width,
          resizeMode: "cover",
          position: "absolute",
          bottom: 0,
          opacity: 1,
          left: 0,
        }}
      />
      {/* decoration views */}
      <View
        style={{
          width: 0.3 * ScreenSize.width,
          height: 0.3 * ScreenSize.width,
          borderWidth: 1,
          borderRadius: 300,
          position: "absolute",
          right: "-20%",
          top: 50,
          borderColor: "rgb(197,199,198)",
        }}
      ></View>
      <View
        style={{
          width: 0.3 * ScreenSize.width,
          height: 0.3 * ScreenSize.width,
          borderWidth: 1,
          borderRadius: 300,
          position: "absolute",
          left: "-20%",
          top: '50',
          borderColor: "rgb(197,199,198)",
        }}
      ></View>
      <Pressable
      onPress={()=>{router.push('(tabs)/shop')}}
        style={{
          padding: 20,
          backgroundColor: "black",
          alignSelf: "center",
          borderRadius: 200,
        }}
      >
        <Icon
          name={"ArrowRight"}
          fill={"transparent"}
          stroke={2}
          color="white"
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default Index;
