import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import { colors } from "../../constants/Colors";
import ThemedText from "../ThemedText/ThemedText";
import { ScreenSize } from "../../constants/Sizes";
import Icon from "../Icons/Icon";
import { AppContext } from "../../context/context";

const CartItemCard = ({ item }) => {
  const { orders, setOrders } = useContext(AppContext);
  return (
    <View
      style={{
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 20,
        // flexDirection: "row",
        justifyContent: "space-between",
        gap:10
        // alignItems: "center",
      }}
    >
      <Pressable
        style={{ position: "absolute", top: 15, right: 10 }}
        onPress={() => {
          setOrders(
            orders.filter((product) => product.product.id != item.product.id)
          );
        }}
      >
        <Icon name={"X"} stroke={2} size={22} color="#b0c0b4" />
      </Pressable>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Image
          source={{ uri: item.product.image }}
          style={{
            height: 0.11 * ScreenSize.height,
            width: 0.2 * ScreenSize.width,
            resizeMode: "cover",
            borderRadius: 20,
          }}
        />
        <View style={{ gap: 10 }}>
          <ThemedText
            text={item.product.name}
            size={18}
            style="bold"
            extras={{ alignSelf: "start" }}
          />
          <ThemedText text={item.product.type} />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between",alignItems:'center' }}>
        <ThemedText
          text={"$" + item.product.price * item.amount}
          align="center"
          size={20}
          style="bold"
          // extras={{
          //   backgroundColor: "#b0c0b4",
          //   padding: 10,
          //   borderRadius: 20,
          // }}
        />
        <View
          style={{
            alignItems: "center",
           
            borderRadius: 100,
            alignSelf: "flex-end",
            gap: 15,
            flexDirection: "row",
          }}
        >
          <Pressable
            style={{
              height: 30,
              width: 30,
              borderRadius: 100,
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#b0c0b4",
            }}
            onPress={() => {
              let newArray = orders.map((order) => {
                if (order.product.id == item.product.id) {
                  if (order.amount == 1) {
                    return { ...order };
                  }
                  return { ...order, amount: item.amount - 1 };
                }
                return order;
              });
              setOrders(newArray);
            }}
          >
            <Icon name={"Minus"} color="#b0c0b4" stroke={4} size={18} />
          </Pressable>
          <ThemedText text={item.amount} size={18} style="bold" />
          <Pressable
            style={{
              height: 30,
              width: 30,
              borderRadius: 100,
              backgroundColor: "#b0c0b4",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              let newArray = orders.map((order) => {
                if (order.product.id == item.product.id) {
                  return { ...order, amount: item.amount + 1 };
                }
                return order;
              });
              setOrders(newArray);
            }}
          >
            <Icon name={"Plus"} color="white" stroke={4} size={18} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItemCard;
