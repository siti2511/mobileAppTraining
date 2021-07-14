import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Schedule = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScheduleRow  day = {"DAY"} morning= {"MORNING"} afternoon = {"AFTERNOON"}/>
      <ScheduleRow day={"Monday"} morning={"Physics"} afternoon={"Language"} />
      <ScheduleRow day={"Tuesday"} morning={"Mathematics"} afternoon={"Communication"}/>
      <ScheduleRow day= {"Wednesday"} morning= {"Chemistry"} afternoon= {"Programming C++" }/>
      <ScheduleRow day= {"Thursday"} morning= {"Islamic Study"} afternoon= {"Physics" }/>
      <ScheduleRow day= {"Friday"} morning= {"Technical English"} afternoon= {"Programming VB" }/>
    </View>
  );
};

const ScheduleRow = ({ day, morning, afternoon }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row",margin:10 }}>
      <View style={{ flex: 1 }}>
        <Text style ={{fontWeight:"bold"}}>{day}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style = {{ fontWeight:"bold", fontStyle:"italic", color:"darkblue"}}>{morning}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style= {{fontWeight:"bold", fontStyle: "italic", color:"black"}}>{afternoon}</Text>
      </View>
    </View>
  );
};

export default Schedule;