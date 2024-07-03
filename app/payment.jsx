import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "../components/ThemedText/ThemedText";
import { colors } from "../constants/Colors";
import Field from "../components/Fields/Field";
import { router } from "expo-router";
import { AppContext } from "../context/context";
import { Redirect } from "expo-router";
const Payment = () => {
  const { orders, setOrders } = useContext(AppContext);
  if (orders.length == 0) {
    return <Redirect href={"/(tabs)/shop"} />;
  }
  let total = orders.reduce((a, b) => a + b.product.price * b.amount, 0);
  total = parseFloat(total).toFixed(2);

  return (
    <SafeAreaView
      style={{
        padding: 20,
        justifyContent: "",
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <View
        style={{
          backgroundColor: colors.white,
          padding: 30,
          borderRadius: 20,
          gap: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: colors.grey,
            paddingBottom: 10,
          }}
        >
          <ThemedText text={"Total Price"} size={20} style="semibold" />
          <ThemedText text={"$" + total} size={20} style="semibold" />
        </View>
        <View style={{ gap: 20 }}>
          <Field placeholder={"Enter Card Number"} label={"Card Number"} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Field placeholder={"MM/YY"} label={"Expiry"} width={"30%"} />
            <Field placeholder={"Enter CVV"} label={"CVV"} width={"60%"} />
          </View>
        </View>
        <Pressable
          style={{
            backgroundColor: colors.primary,
            padding: 20,
            borderRadius: 100,
          }}
          onPress={() => {
            router.push("/success");
            setOrders([]);
          }}
        >
          <ThemedText text={"Pay Now"} color={colors.white} align="center" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
