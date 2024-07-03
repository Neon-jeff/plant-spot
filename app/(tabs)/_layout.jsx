import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { colors } from "./../../constants/Colors";
import { Dimensions } from "react-native";
import Icon from "../../components/Icons/Icon";
import ThemedText from "../../components/ThemedText/ThemedText";
import { AppContextProvider } from "../../context/context";

const TabBarIcon = ({ color, focused, icon, label }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Icon
        size={25}
        name={icon}
        stroke={focused ? 2.1 : 1.5}
        color={focused ? colors.primary : "grey"}
      />
      <ThemedText
        text={label}
        color={focused ? colors.primary : "grey"}
        style={focused ? "bold" : "regular"}
      />
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const TabLayout = () => {
  return (
    
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 0.09 * height,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "white",
            borderWidth: 0,
            position: "absolute",
            shadowColor: "transparent",
            shadowOpacity: 0,
            borderTopWidth: 0,
          },
        }}
        sceneContainerStyle={{ backgroundColor: colors.background }}
      >
        <Tabs.Screen
          name="shop"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabBarIcon
                focused={focused}
                color={color}
                icon={"Store"}
                label={"Shop"}
              />
            ),
            tabBarShowLabel: false,
          }}
        />

        <Tabs.Screen
          name="checkout"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabBarIcon
                focused={focused}
                color={color}
                icon={"ShoppingCart"}
                label={"Cart"}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tabs>
  
  );
};

export default TabLayout;
