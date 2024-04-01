import { StyleSheet, Image } from "react-native";

import { Text, View } from "@/src/components/Themed";
import Colors from "@/src/constants/Colors";
import products from "@/assets/data/products";
import ProductsListItem from "@/src/components/ProductListItem";

const product = products[0];

export default function TabOneScreen() {
  return (
    <View>
      <ProductsListItem product = {products[0]}/>
      <ProductsListItem product = {products[1]}/>
    </View>
  );
}