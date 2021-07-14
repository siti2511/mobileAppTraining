import React from "react";
import { View } from "react-native";
import Header from "../components/header";
import Footer from "../components/footer";
import Profile from "../components/profile";
import Schedule from "../components/schedule";

export default function HomeSceen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View style={{ flex: 5, backgroundColor: "honeydew" }}>
    <Profile/>
    <Schedule/>
    </View>

      <Footer />
    </View>
  );
}