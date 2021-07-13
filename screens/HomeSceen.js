import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,}}>

      <View style={{flex:1, flexDirection:"row"}}>
      <View style={{flex:1, backgroundColor:"darkturquoise"}}></View>
      <View style={{flex:1, backgroundColor:"red"}}></View>
      <View style={{flex:1, backgroundColor:"purple"}}></View>
    </View>

    <View style={{flex:5, backgroundColor:"deeppink"}}>
  </View>

  <View style={{flex:1, flexDirection:"row"}}>
  <View style={{flex:1, backgroundColor:"black"}}></View>
  <View style={{flex:1, backgroundColor:"white"}}></View>
  </View>

  </View>
  );
}