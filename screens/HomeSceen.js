import React from "react";
import { View } from "react-native";
import Header from "../components/header";
import Footer from "../components/footer";


export default function HomeSceen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View style={{ flex: 5, backgroundColor: "pink" }}></View>

      <Footer />
    </View>
  );
}