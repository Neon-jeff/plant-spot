import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopItems from "../../components/ShopPage/TopItems";
import Search from "../../components/ShopPage/Search";
import { colors } from "../../constants/Colors";
import { plants } from "../../data/plants";
import PlantSaleCard from "../../components/Cards/PlantSaleCard";

const Shop = () => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.background }}
      >
        <TopItems />
        <Search />
        <FlatList
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          data={plants}
          renderItem={({ item, index }) => (
            <PlantSaleCard {...item} item={item} />
          )}
          numColumns={2}
          contentContainerStyle={{
            gap: 20,
            alignItems: "center",
            paddingBottom: 100,
          }}
          columnWrapperStyle={{ gap: 20 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;
