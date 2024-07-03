import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import ThemedText from "../ThemedText/ThemedText";
import { ScreenSize } from "../../constants/Sizes";
import { colors } from "../../constants/Colors";
import Icon from "../Icons/Icon";
import { AppContext } from "../../context/context";

const PlantSaleCard = ({ image, price, name, type, item }) => {
  const { orders, setOrders } = useContext(AppContext);
  return (
    <View
      style={{
        backgroundColor: orders.find(product=>product.product.id==item.id)?'#b0c0b4':colors.white,
        padding: 15,
        borderRadius: 20,
        gap: 5,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: 0.15 * ScreenSize.height,
          width: 0.35 * ScreenSize.width,
          resizeMode: "cover",
          borderRadius: 20,
        }}
      />

      <View>
        <ThemedText text={name} size={18} style="semibold" />
        <ThemedText text={type} size={14} style="regular" />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ThemedText
          text={"$" + price}
          style="bold"
          size={17}
          color={colors.primary}
        />
        <Pressable
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: colors.white,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: colors.grey,
            shadowOpacity: 0.2,
            elevation: 10,
          }}
          onPress={() => {
            if(orders.find(product=>product.product.id==item.id)){
                setOrders(orders.filter(product=>product.product.id !=item.id))
                return
            }
            setOrders([...orders, { product: item, amount: 1 }]);
          }}
        >
          <Icon name={orders.find(product=>product.product.id==item.id)?'Minus':'Plus'} color={"black"} stroke={3.5} size={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default PlantSaleCard;
