import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, }}></View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      <Text style={{ fontWeight:"bold", fontSize: 30, color: "darkturquoise" }}>HOME</Text>
      </View>
      <View style={{ flex: 1,justifyContent:"center", alignItems:"center"}}>
      <Ionicons name={"home"} size={32} color={"darkturquoise"} />
    </View>
    </View>
  );
};

export default Header;