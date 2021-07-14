import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Text style={{ flex: 1, fontWeight:"bold" }}>Profile</Text>
      <View
        style={{
          flex: 5,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={{uri:"https://picsum.photos/200"}}
            style={{ width: 100, height: 100 }}
            resizeMode={"cover"}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ marginBottom: 10, fontWeight:"bold" }}>Siti Normas Bt Hassan</Text>
          <Text style= {{fontStyle:"italic"}}>Pegawai Latihan Vokasional</Text>
          <Text style= {{fontStyle:"italic"}}>No Telefon: 05- 5956000</Text>
          <Text style= {{fontStyle:"italic"}}>Email: siti_normas@jtm.gov.my</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;