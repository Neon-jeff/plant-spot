import { View, Text, ScrollView, FlatList, Pressable } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "../../components/ThemedText/ThemedText";
import { AppContext } from "../../context/context";
import CartItemCard from "../../components/Cards/CartItemCard";
import { colors } from "../../constants/Colors";
import { ScreenSize } from "../../constants/Sizes";
import { router } from "expo-router";
import Icon from "../../components/Icons/Icon";

const Checkout = () => {
  const { orders } = useContext(AppContext);
  if (orders.length == 0) {
    return (
      <SafeAreaView
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          paddingHorizontal: 70,
        }}
      >
        <Icon name={"ShoppingBasket"} color="#b0c0b4" stroke={1} size={70} />
        <ThemedText
          text={"Cart Empty!"}
          size={25}
          style="bold"
          color={colors.primary}
          extras={{ marginTop: 15 }}
        />
        <ThemedText
          text={"Head to the shopping page to add items to your cart"}
          size={18}
          extras={{ marginBottom: 35 }}
          align="center"
          
        />
        <Pressable
          style={{
            backgroundColor: colors.primary,
            padding: 20,
            borderRadius: 100,
          }}
          onPress={() => {
            router.push("(tabs)/shop");
          }}
        >
          <ThemedText
            text={"Head to shop"}
            color={colors.white}
            size={18}
            align="center"
          />
        </Pressable>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, gap: 30, paddingTop: 20 }}>
      <ThemedText
        text={"My Cart"}
        size={30}
        style="bold"
        extras={{ paddingLeft: 20 }}
      />
      <FlatList
        keyExtractor={(item) => item.product.id}
        data={orders}
        renderItem={({ item, index }) => <CartItemCard item={item} />}
        contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 10 }}
        style={{
          flexGrow: 0,
          height: 0.65 * ScreenSize.height,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
      <Pressable
        style={{
          backgroundColor: colors.primary,
          padding: 20,
          borderRadius: 100,
          marginHorizontal: 20,
        }}
        onPress={() => {
          router.push("/payment");
        }}
      >
        <ThemedText
          color={colors.white}
          text={"Checkout Order"}
          align="center"
          size={17}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default Checkout;
